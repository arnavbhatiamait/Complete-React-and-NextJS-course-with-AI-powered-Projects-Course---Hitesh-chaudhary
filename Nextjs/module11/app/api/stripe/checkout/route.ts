import { stripeClient } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import { STRIPE_PRICE_ID } from "@/lib/stripe";
import { NextResponse, NextRequest } from "next/server";
import { requiredAuth } from "@/lib/auth-guard";


export async function POST(request: NextRequest) {
    try {
        const session = await requiredAuth();

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { priceId } = await request.json();
        if (!priceId) {
            return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
        }
        const user = await prisma.user.findUnique({
            where: { id: session.user.id }
        })
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        let customerId = user.stripeCustomerId;
        if (!customerId) {
            const customer = await stripeClient.customers.create({
                email: user.email || undefined,
                metadata: {
                    userId: user.id
                }
            });
            customerId = customer.id;
            await prisma.user.update({
                where: { id: user.id },
                data: { stripeCustomerId: customerId }
            });
        }
        const checkoutSession=await stripeClient.checkout.sessions.create({
            customer:customerId,
            payment_method_types:["card"],
            line_items:[{
                // price:STRIPE_PRICE_ID[priceId as keyof typeof STRIPE_PRICE_ID],
                price:priceId,
                quantity:1,
            

            },],
            mode:"subscription",
            success_url:`${process.env.NEXT_PUBLIC_APP_URL}`,
            cancel_url:`${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
            metadata:{
                userId:user.id,
                priceId
            }
        });
        return NextResponse.json({ url: checkoutSession.url });
    }
    catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
    }
}