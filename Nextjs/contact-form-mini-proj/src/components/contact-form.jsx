"use client"
// import { Form } from "next/form";
export default function ContactForm({action}) {
    return(
        <form action={action} className="space-y-4 flex flex-col">
            <input type="text" name="name" placeholder="Your Name" className="border p-2" />
            <input type="email" name="email" placeholder="Your Email" className="border p-2" />
            <textarea name="message" placeholder="Your Message" className="border p-2"></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
        </form>
    )
}