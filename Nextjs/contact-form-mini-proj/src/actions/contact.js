"use server"
import {contacts} from "@/lib/model/contact";
import mongoose from "mongoose";
import {connectToDB} from "@/lib/db";
import { redirect } from "next/navigation";

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