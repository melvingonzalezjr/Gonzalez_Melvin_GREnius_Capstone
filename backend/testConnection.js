import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const testSchema = new mongoose.Schema({ name: String });
    const Test = mongoose.model("Test", testSchema);

    // Try to insert a test document
    const doc = new Test({ name: "Test User" });
    await doc.save();
    console.log("Document inserted successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("MongoDB connection or insert error:", error.message);
  }
};

testConnection();
