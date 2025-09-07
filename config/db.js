import mongoose from "mongoose";


export const connectDB = async () => {
    const MONGODB_URI = 'mongodb+srv://codingmaniac:coding123@cluster0.jwxuvsr.mongodb.net/express'
    
    await mongoose.connect(MONGODB_URI).then(() => {
        console.log('Database Connected')
    })
}