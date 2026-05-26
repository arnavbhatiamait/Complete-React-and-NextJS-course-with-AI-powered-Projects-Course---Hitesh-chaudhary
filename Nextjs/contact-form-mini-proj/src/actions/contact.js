"use server"
import {contacts} from "@/lib/model/contact";
import mongoose from "mongoose";
import {connectToDB} from "@/lib/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createContact(formData) {
    await connectToDB();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await contacts.create({name,email,message});
    console.log("Contact created successfully");
    redirect("/dashboard");
    return {
        success: true,
        message: "Contact created successfully"
    }
}

export async function updateStatus(id) {
    await connectToDB();
    await contacts.findByIdAndUpdate(id, { status: "resolved" });
    console.log("Contact status updated to resolved");
    // redirect("/dashboard");
    revalidatePath("/dashboard");
    return {
        success: true,
        message: "Contact status updated to resolved"
    }
}