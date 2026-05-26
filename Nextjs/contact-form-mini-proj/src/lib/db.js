import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_CONN);
    console.log("MongoDB connection established:", connection.connection.host);
    console.log("Connected to MongoDB");
  }
    catch (error) {
    console.error("Error connecting to MongoDB:", error);
    }
};