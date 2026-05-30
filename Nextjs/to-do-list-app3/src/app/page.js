import { Button } from "@/components/ui/button";
import { connectToDatabase } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  await connectToDatabase();
  return (
   <Button >Hello World</Button>
  );
}
