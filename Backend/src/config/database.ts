import mongoose from "mongoose";
import devConfig from "./config.js";

async function connectDB(){

    await mongoose.connect(devConfig.MONGO_URI)

    console.log("Connect to DB")
}

export default connectDB