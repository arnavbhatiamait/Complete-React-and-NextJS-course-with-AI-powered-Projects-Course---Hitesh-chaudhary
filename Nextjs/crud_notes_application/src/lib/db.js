import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
        const MONGODB_URL=`${process.env.MONGODB_URL}/notes-mini-app`;
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}