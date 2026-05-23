"use client";
// import Image from "next/image";
// import { connectToDatabase } from "@/lib/db";
import { useState } from "react";
export default function Home() {
  // await connectToDatabase();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        alert("Note added successfully");
        setTitle("");
        setContent("");
      } else {
        alert("Error adding note");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 p-8">
      < div className="max-w-4xl mx-auto">
        <div className='mb-8'>
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">
            My Notes
          </h1>
          <p className='text-gray-400'>
            Create, read, update, and delete your notes

          </p>
          {/* {! form} */}
          <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-8 border border-gray-800">
            <form onSubmit={onSubmit}>
              <div className='mb-4'>
                <label className="block font-medium text-sm mb-2 text-yellow-400" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter a new Title..."
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg  placeholder:text-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className="block font-medium text-sm mb-2 text-yellow-400" htmlFor="content">
                  Content
                </label>
                <textarea
                  type="text"
                  placeholder="Enter a new Content..."
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg  placeholder:text-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div>
                <button type="submit" disabled={loading} className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
