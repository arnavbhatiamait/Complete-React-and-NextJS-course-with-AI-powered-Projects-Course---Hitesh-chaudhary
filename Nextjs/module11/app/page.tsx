import LogoutButton from "@/components/logout-button";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requiredAuth } from "@/lib/auth-guard";
import Image from "next/image";

async function Home() {
  const session = await requiredAuth();
  const {user} = session;

    return (
      <div className="flex justify-center bg-zinc-900 items-center h-screen" >
        <Image src={user.image!} alt="Profile Picture" width={100} height={100} className="rounded-full mb-4" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton/>
      </div>
    );
  }
export default Home