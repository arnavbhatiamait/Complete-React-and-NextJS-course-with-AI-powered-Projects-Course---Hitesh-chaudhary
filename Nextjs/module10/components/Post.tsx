"use client"
import { deletePost, updatePost } from '@/actions/post-actions';
import React from 'react'

const Post = ({ post }: { post: { id: string; title: string; content: string; createdAt: Date; updatedAt: Date } }) => {
    const { title, content } = post

    const handleDelete = async () => {
        await deletePost(post.id)
        // Optionally, you may want to refresh the page or revalidate data here.
    }

    const handleUpdate = async () => {
        const newTitle = window.prompt('Edit title', title) ?? title
        const newContent = window.prompt('Edit content', content) ?? content
        const formData = new FormData()
        formData.append('title', newTitle)
        formData.append('content', newContent)
        await updatePost(post.id, formData)
        // Optionally refresh or revalidate after update.
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleDelete}>Delete Post</button>
            <button onClick={handleUpdate}>Update Post</button>
        </div>
    )
}

export default Post
