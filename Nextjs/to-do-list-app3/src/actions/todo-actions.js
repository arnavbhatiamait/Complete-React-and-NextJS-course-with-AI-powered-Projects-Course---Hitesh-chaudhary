"use server"
// import {ConnectedTodo} from "@/lib/connected-todo";
import { connectToDatabase } from "@/lib/db";
import { todoSchema } from "@/schema/todo-schema";

export async function addTodo(data){
    await connectToDatabase();
    const validatedFields=todoSchema.safeParse(data);
    if(!validatedFields.success){
        throw new Error("Invalid data");
    }
    try{
        const newtodo=await todoSchema.create(validatedFields.data);
        return JSON.parse(JSON.stringify(newtodo));
    }
    catch(error){
        console.error("Error creating todo:",error);
        return {error:"Failed to create todo"};
    }
}