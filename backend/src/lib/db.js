import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connect ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error", error);
  }
};
