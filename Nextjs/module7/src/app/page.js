"use client"
import Image from "next/image";
import { createToDo } from "./actions/actions";

export default function Home() {
  // async function createToDo(formData){
  //   "use server"
  //   const title = formData.get("title")
  //   console.log(title)

  // }
  return (
    <form action={createToDo}>
      <input name='title' placeholder='Todo title'/>
      <button type="submit">Add Todo</button>
    </form>
  );
}
