"use server"
// import {contact} from "@/lib/model/contact";
// import mongoose from "mongoose";

export async function createContact(formData) {
    const { name, email, message } = Object.fromEntries(formData);
    return { name, email, message };
}