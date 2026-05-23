import { connectToDatabase } from "@/lib/db";
import Note from "@/models/Note";
export async function POST(request){
    connectToDatabase();
    const {title, content} = await request.json();
    const { note } = await Note.create({ title, content });
    return new Response(note, { status: 201 });
} 