import { stripeClient } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import { STRIPE_PRICE_ID } from "@/lib/stripe";
import { NextResponse, NextRequest } from "next/server";
import { requiredAuth } from "@/lib/auth-guard";
import { Stripe } from "stripe";
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature") as string;
    let event: Stripe.Event;
    try {
        event = stripeClient.webhooks.constructEvent(body, signature, webhookSecret as string);
    }
    catch (error) {
        console.error("Error processing webhook:", error);
        return NextResponse.json({ error: "Failed to process webhook" }, { status: 400 });
    }
    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object as Stripe.Checkout.Session;
                const userId = session.metadata?.userId;
                const priceId = session.metadata?.priceId;
                if (!userId || !priceId || !session.subscription) break;
                const subscription = await stripeClient.subscriptions.retrieve(session.subscription as string);
                await prisma.user.update({
                    where: { id: userId },
                    data: {
                        stripePriceId: priceId,
                        stripeCurrentPeriodEnd: subscription.current_period_end
                            ? new Date(subscription.current_period_end * 1000)
                            : null,
                        plan: subscription.status === "active" && priceId === STRIPE_PRICE_ID ? "PREMIUM" : "FREE",
                    },
                });
                break;
            }
            case "customer.subscription.updated": {
                const subscription = event.data.object as Stripe.Subscription;
                const userId = subscription.metadata?.userId;
                const priceId = subscription.items.data[0]?.price?.id ?? null;
                if (!userId) break;
                await prisma.user.update({
                    where: { id: userId },
                    data: {
                        stripePriceId: priceId,
                        stripeCurrentPeriodEnd: subscription.current_period_end
                            ? new Date(subscription.current_period_end * 1000)
                            : null,
                        plan: subscription.status === "active" && priceId === STRIPE_PRICE_ID ? "PREMIUM" : "FREE",
                    },
                });
                break;
            }
            case "invoice.payment_succeeded": {
                const invoice = event.data.object as Stripe.Invoice;
                const userId = invoice.metadata?.userId;
                if (!userId || !invoice.subscription) break;
                const subscription = await stripeClient.subscriptions.retrieve(invoice.subscription as string);
                await prisma.user.update({
                    where: { id: userId },
                    data: {
                        stripeCurrentPeriodEnd: subscription.current_period_end
                            ? new Date(subscription.current_period_end * 1000)
                            : null,
                        plan: subscription.status === "active" ? "PREMIUM" : "FREE",
                    },
                });
                break;
            }
            case "invoice.payment_failed": {
                const invoice = event.data.object as Stripe.Invoice;
                const userId = invoice.metadata?.userId;
                if (!userId) break;
                await prisma.user.update({ where: { id: userId }, data: { plan: "FREE", stripePriceId: null } });
                break;
            }
            case "customer.subscription.deleted": {
                const subscription = event.data.object as Stripe.Subscription;
                const userId = subscription.metadata?.userId;
                if (!userId) break;
                await prisma.user.update({
                    where: { id: userId },
                    data: { plan: "FREE", stripePriceId: null, stripeCurrentPeriodEnd: null },
                });
                break;
            }
            default:
                break;
        }
    }
    catch (error) {
        console.error("Error handling webhook event:", error);
        return NextResponse.json({ error: "Failed to handle webhook event" }, { status: 500 });
    }
    return NextResponse.json({ received: true }, { status: 200 });
}