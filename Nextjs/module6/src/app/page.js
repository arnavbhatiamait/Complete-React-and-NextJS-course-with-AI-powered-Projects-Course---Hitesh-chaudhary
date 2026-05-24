"use client"
import Image from "next/image";
import {usePathname} from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Current path: {pathname}</p>
    </div>
  );
}
