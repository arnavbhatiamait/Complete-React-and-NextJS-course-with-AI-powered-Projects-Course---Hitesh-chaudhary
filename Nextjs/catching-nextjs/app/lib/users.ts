import {cacheLife,cacheTag } from "next/cache";
export async function getUser(){
    "use cache";
    cacheLife("hours");

    cacheTag("users");
    const res = await fetch("https://69ce152e33a09f831b7cddf2.mockapi.io/api/users/users");
    return await res.json();
}