"use server";

import { revalidateTag } from "next/cache";


export async function getUserList() {
    console.log("Fetching user list...");
    const res = await fetch("https://69ce152e33a09f831b7cddf2.mockapi.io/api/users/users", {next: { tags: ["users"] }});

    console.log("Response received:", res);
    return await res.json();
}
export async function updateTheList(){
    console.log("Updating user list...");
    revalidateTag("users","default");
}
// ! In this example, the getUserList function is tagged with "users", allowing you to later invalidate all cached data associated with that tag when necessary, ensuring that users always see the most up-to-date information without having to wait for the cache to expire naturally. The updateTheList function calls revalidateTag with the "users" tag, which will trigger a revalidation of all cached data associated with that tag, effectively updating the user list whenever this function is invoked.
// ! updateTheList is a server action that can be called from the client side to trigger the revalidation of the "users" tag, ensuring that the user list is updated with the latest data when needed. 