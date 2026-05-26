import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const mongoURI = `${process.env.MONGODB_CONN}/contact-form-db`
    console.log("Connecting to MongoDB at:", mongoURI);
    const connection = await mongoose.connect(mongoURI);
    console.log("MongoDB connection established:", connection.connection.host);
    console.log("Connected to MongoDB");
  }
    catch (error) {
    console.error("Error connecting to MongoDB:", error);
    }
};