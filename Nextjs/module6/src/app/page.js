// "use client"
// import Image from "next/image";
// import {usePathname} from "next/navigation";
// export default function Home() {
//   const pathname = usePathname();
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Current path: {pathname}</p>
//     </div>
//   );
// }
// ! redirect
import {redirect} from "next/navigation";
export default function Home() {
  const isLoggedIn = false; // Simulating user authentication status

  if (!isLoggedIn) {
    redirect("/login"); // Redirecting to the login page if the user is not logged in
  }
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}
 