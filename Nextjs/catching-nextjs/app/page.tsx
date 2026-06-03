import Image from "next/image";

export default function Home() {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
    </div>
  );
}
