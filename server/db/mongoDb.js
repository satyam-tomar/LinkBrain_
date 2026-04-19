import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDb() {
   try {
     const connection = await mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDb connected successfully");
   } catch (error) {
     console.log('MongoDb connecton error', error);
   }
}