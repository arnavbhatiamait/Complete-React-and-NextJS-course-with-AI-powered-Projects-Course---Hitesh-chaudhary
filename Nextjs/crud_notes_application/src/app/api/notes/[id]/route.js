import {connectToDatabase} from "@/lib/mongodb";
import {Note} from "@/lib/models/Note";

export async function DELETE(req,{params}){
    await connectToDatabase();
    const {id} = params;
    await Note.findByIdAndDelete(id);
    return Response.json({message:"Note deleted successfully"},{status:200})
}