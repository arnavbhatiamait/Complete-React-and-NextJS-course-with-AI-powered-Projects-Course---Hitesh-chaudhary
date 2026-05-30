"use client";  
import {useMutation, useQueryClient} from "@tanstack/react-query";

async function addPost(newPost) {
    const res=await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    return res.json();
}

export default function AddPost() {
    const mutation = useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            alert("Post added successfully");
        },
        onError: () => {
            alert("Error adding post",error);
        }
    });

    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => mutation.mutate({ title: "New Post", body: "This is a new post", userId: 1 })}>
            Add Post
        </button>
    )
}