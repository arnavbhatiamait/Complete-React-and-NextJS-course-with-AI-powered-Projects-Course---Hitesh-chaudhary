// ! headers support in nextjs 
import {headers, cookies} from "next/headers";
// ^ method 1
// export async function GET(request) {

//     const reqHeaders= new Headers(request.headers);
//     console.log(reqHeaders);

//     return Response.json({ message: "Hello, Next.js!" });
// }

// ^ method 2
export async function GET(request) {
    const reqHeaders = await headers();
    // ! traditional way to get cookies from headers
    // const username= request.cookies.get("username");
    // console.log(username);

    const cookieStore = await cookies();
    const username = cookieStore.get("username");
    console.log(username);

    cookieStore.set("theme", "Dark");
    console.log(cookieStore);
    console.log(reqHeaders.get("Authorization"));
    // return Response.json({ message: "Hello, Next.js!" });.
    // & cusom header
    return new Response("<h1>Hello, Next.js!</h1>", {
        headers: {
            "Content-Type": "text/html",
            "set-cookie": "username=Arnav"
        }
    });
}
