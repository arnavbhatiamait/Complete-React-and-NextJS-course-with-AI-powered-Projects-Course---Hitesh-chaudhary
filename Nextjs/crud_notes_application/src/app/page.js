"use client";
// import Image from "next/image";
// import { connectToDatabase } from "@/lib/db";
import { useState, useEffect } from "react";
export default function Home() {
  // await connectToDatabase();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  const handleEdit=()=>{}
  const handleDelete=async (id)=>{
    if (!confirm("Are you sure you want to delete this note?")) return;
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchNotes();
        alert("Note deleted successfully");
      } else {
        alert("Error deleting note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

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
        fetchNotes();
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

  const fetchNotes = async () => {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setNotes(data);
      }

    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []


  )


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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No notes found. Add a new note to get started!</p>
              </div>
            ) : (
              notes.map((note) => (
                <div key={note._id} className="bg-white p-6 rounded-lg shadow-md">
                  {editingId === note._id ? (
                    <>
                      <div className="space-y-4">
                        <input
                          type="text"
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />

                        <div className="flex gap-2">
                          <button
                            onClick={() => updateNote(note._id)}
                            disabled={loading}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50"
                          >
                            {loading ? "Saving..." : "Save"}
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* view */}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{note.title}</h3>
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEdit(note)}
                            className="text-blue-500 hover:text-blue-700 text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteNote(note._id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-2">{note.content}</p>
                      <p className="text-sm text-gray-500">
                        Created: {new Date(note.createdAt).toLocaleDateString()}
                      </p>
                      {note.updatedAt !== note.createdAt && (
                        <p className="text-sm text-gray-500">
                          Updated: {new Date(note.updatedAt).toLocaleDateString()}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
