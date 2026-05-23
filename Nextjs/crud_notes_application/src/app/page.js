import Image from "next/image";
import { connectToDatabase } from "@/lib/db";
export default async function Home() {
  await connectToDatabase();
  return (
    <div>
      <h1>My Notes App</h1>
    </div>
  );
}
