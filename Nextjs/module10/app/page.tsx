import { createUser } from "@/actions/actions";
import Image from "next/image";
export default function Home() {
  return (
   <div className="">
    <h1>
      Create User
    </h1>
    <form action={createUser}>
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="email" name="email" placeholder="Enter Email" />
      <button type="submit">Create User</button>
    </form>
   </div>
  );
}
