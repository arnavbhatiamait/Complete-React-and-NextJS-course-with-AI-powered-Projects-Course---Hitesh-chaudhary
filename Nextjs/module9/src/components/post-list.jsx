"use client"
import {useQuery} from "@tanstack/react-query";

async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}


export default function PostList() {

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data);
    return (
       <div>
        {data.slice(0,5).map(post => (
            <div key={post.id}>
                <h3>title:{post.title}</h3>
                <p> body: {post.body}</p>
            </div>
        ))}

       </div> 
    );}