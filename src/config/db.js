import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()
const dbUrl = process.env.DB_URL

export const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log("Database Connected Sucessfully")
    } catch (error) {
        console.log(error.message,"message")
    }
}