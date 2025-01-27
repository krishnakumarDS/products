import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`Server is connected on ${process.env.MONGO_DB_URI}`);
  } catch (error) {
    console.log("error in mongoDB", error);
  }
};
