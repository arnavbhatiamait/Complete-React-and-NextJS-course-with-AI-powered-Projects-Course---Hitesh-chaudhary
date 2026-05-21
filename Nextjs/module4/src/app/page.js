// import Image from "next/image";
import React from "react";
export default async function HomePage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
  const jsonData = await data.json()
  return (
    <div>
      <h1>Home Page</h1>
      <p>{JSON.stringify(jsonData)}</p>
    </div>
    
  );
}
