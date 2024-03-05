import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Database error");
  }
};
export default connectDB;
