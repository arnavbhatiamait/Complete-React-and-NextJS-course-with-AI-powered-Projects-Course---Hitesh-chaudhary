import { connectToDatabase } from "@/lib/db";
import { Note } from "@/lib/models/Note";

export async function DELETE(req, { params }) {
    await connectToDatabase();
    const { id } = params;
    await Note.findByIdAndDelete(id);
    return Response.json({ success: true, message: "Note deleted successfully" }, { status: 200 })
}

export async function PUT(req, { params }) {
    await connectToDatabase();
    const { id } = await params;
    const { title, content } = await req.json();
    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    return Response.json({ success: true, data: note }, { status: 200 })
}