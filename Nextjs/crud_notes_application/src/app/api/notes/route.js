import { connectToDatabase } from "@/lib/db";
import { Note } from "@/lib/models/Note";

export async function POST(request) {
    await connectToDatabase();

    const { title, content } = await request.json();
    const note = await Note.create({ title, content });

    return Response.json(note, { status: 201 });
}
