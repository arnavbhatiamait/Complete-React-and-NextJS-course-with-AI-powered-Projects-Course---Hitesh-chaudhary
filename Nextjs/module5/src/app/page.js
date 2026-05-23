"use client";
import Image from "next/image";
import React from "react";
import useState from "react"
export default function Home() {
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, completed: false })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage(`Todo created successfully: ${data.todo.title}`);
        setTitle("");
        return;
      }

      setMessage(data.message || "Failed to create todo.");
      console.log(data);
    } catch (error) {
      setMessage("Failed to create todo.");
      console.error(error);
    }
  }
  return (

    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter todo title" />
        <button type="submit">Submit </button>
      </form>
      {
        message && <p>{message}</p>
      }
    </div>
  );
}
