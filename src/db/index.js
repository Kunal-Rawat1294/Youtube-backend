import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectMongodb = async () => {
  try {
    const mongodbInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`mongo db instance : ${mongodbInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB ERROR OCCURED:", error);
    process.exit(1);
  }
};

export default connectMongodb;
