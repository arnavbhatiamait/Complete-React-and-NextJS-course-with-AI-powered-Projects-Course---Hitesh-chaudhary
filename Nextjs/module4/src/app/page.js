// ! server component
import Image from "next/image";
import React from "react";
import ClientComp from "./components/client-comp";
export default async function HomePage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
  const jsonData = await data.json()
  return (
    <div>
      <h1>Home Page</h1>
      {/* <p>{JSON.stringify(jsonData)}</p> */}
      <ClientComp />
    </div>
    
  );
}
// ! client component
// "use client"
// import React from "react"
// import ClientComp from "./components/client-comp"
// const HomePage = () => {
//   const [name, setName] = React.useState("John Doe")
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Name: {name}</p>
//       <button onClick={() => setName("AABC")}>Change Name</button>
//     </div>
//   )
// }
// export default HomePage