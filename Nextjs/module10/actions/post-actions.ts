"use server"
import { Prisma } from "@/app/generated/prisma/client" 
import { prisma } from "@/lib/db";

export const createPost = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    if (!title ) return;
    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
        }
    });
    return post;
}

export const getAllPosts=async()=>{
    const posts=await prisma.post.findMany({
        orderBy:{
            updatedAt:"desc"}
    });
    return posts;
}

export const getPostById=async(id:string)=>{
    const post=await prisma.post.findUnique({
        where:{
            id:id
        }
    });
    return post;
}

export const updatePost=async(id:string,formData:FormData)=>{
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    if (!title ) return;
    const post=await prisma.post.update({
        where:{
            id:id
        },
        data:{
            title:title,
            content:content
        }
    });
    return post;
}

export const deletePost=async(id:string)=>{
    const post=await prisma.post.delete({
        where:{
            id:id
        }
    });
    return post;
}