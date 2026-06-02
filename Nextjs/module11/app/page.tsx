import LogoutButton from "@/components/logout-button";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requiredAuth } from "@/lib/auth-guard";
import { prisma } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

async function Home() {
  const session = await requiredAuth();
  const { user } = session;
  const dbuser = await prisma.user.findUnique(
    {
      where: { id: session?.user?.id },
      select: {
        plan: true,
        stripePriceId: true,
        stripeCurrentPeriodEnd: true,
        stripeCustomerId: true,
      }
    }
  )
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
        <Image
          src={user.image ?? "/avatar-placeholder.png"}
          alt="Profile Picture"
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
        <h2 className="mt-4 text-2xl font-semibold text-white">{user.name}</h2>
        <p className="mt-1 text-sm text-zinc-300">{user.email}</p>

        <div className="mt-4 flex items-center gap-3">
          <Badge variant={dbuser?.plan === "PREMIUM" ? "default" : "outline"}>
            {dbuser?.plan ?? "FREE"}
          </Badge>
          {dbuser?.plan === "FREE" ? (
            <Link href="/pricing">
              <Button>Upgrade</Button>
            </Link>
          ) : (
            <Link href="/pricing">
              <Button>Manage</Button>
            </Link>
          )}
        </div>

        <div className="mt-6 w-full">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
export default Home