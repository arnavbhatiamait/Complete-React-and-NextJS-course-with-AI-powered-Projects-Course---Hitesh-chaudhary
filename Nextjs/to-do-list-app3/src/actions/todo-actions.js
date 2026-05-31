// "use server"
// // import {ConnectedTodo} from "@/lib/connected-todo";
// import { connectToDatabase } from "@/lib/db";
// import { todoSchema } from "@/schema/todo-schema";

// export async function addTodo(data){
//     await connectToDatabase();
//     const validatedFields=todoSchema.safeParse(data);
//     if(!validatedFields.success){
//         throw new Error("Invalid data");
//     }
//     try{
//         const newtodo=await todoSchema.create(validatedFields.data);
//         return JSON.parse(JSON.stringify(newtodo));
//     }
//     catch(error){
//         console.error("Error creating todo:",error);
//         return {error:"Failed to create todo"};
//     }
// }

// export async function getTodos(){
//     await connectToDatabase();
//     try{
//         const todos=await todoSchema.find({}).sort({createdAt:-1});
//         return JSON.parse(JSON.stringify(todos));
//     }
//     catch(error){
//         console.error("Error fetching todos:",error);
//         return {error:"Failed to fetch todos"};
//     }
// }


"use server"
import { connectToDatabase } from "@/lib/db";
import Todo from "@/models/todo";
import { todoSchema as todoValidationSchema } from "@/schema/todo-schema";

export async function addTodo(data){
    await connectToDatabase();
    const validated = todoValidationSchema.safeParse(data);
    if(!validated.success){
        throw new Error("Invalid data");
    }
    try{
        const newtodo = await Todo.create(validated.data);
        return JSON.parse(JSON.stringify(newtodo));
    }
    catch(error){
        console.error("Error creating todo:",error);
        return {error:"Failed to create todo"};
    }
}

export async function getTodos(){
    await connectToDatabase();
    try{
        const todos = await Todo.find({}).sort({createdAt:-1});
        return JSON.parse(JSON.stringify(todos));
    }
    catch(error){
        console.error("Error fetching todos:",error);
        return {error:"Failed to fetch todos"};
    }
}

export async function updateTodo({id, completed}){
    await connectToDatabase();
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
        return JSON.parse(JSON.stringify(updatedTodo));
    }
    catch(error){
        console.error("Error updating todo:",error);
        return {error:"Failed to update todo"};
    }
}