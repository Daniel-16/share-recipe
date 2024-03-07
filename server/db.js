import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_DEV}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Couldn't connect to DB", error);
  }
};

export default connectDB;
