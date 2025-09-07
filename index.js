import express from 'express'
import mongoose from 'mongoose'
import { connectDB } from './config/db.js'

const app = express()
const PORT = 8080
const MONGODB_URI = 'mongodb+srv://codingmaniac:coding123@cluster0.jwxuvsr.mongodb.net/express'

await connectDB()

app.get('/', (req, res) => {
    res.send('Hello Express')
})


app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})