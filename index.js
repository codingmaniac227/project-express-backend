import express from 'express'
import mongoose from 'mongoose'
import { connectDB } from './config/db.js'
import { Person } from './models/Person.js'

const app = express()
const PORT = 8080
const MONGODB_URI = 'mongodb+srv://codingmaniac:coding123@cluster0.jwxuvsr.mongodb.net/express'

await connectDB()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Express')
})

// Saving Data in MongoDB
app.post('/person', express.json(), async (req, res) => {
    const { email, name, age } = req.body
    const newPerson = new Person({
        name,
        age, 
        email
    })
    await newPerson.save()
    console.log(newPerson)
    res.send('Person Added')
})

// Creating Data in MongoDB
app.put('/person', express.json(), async (req, res) => {
    const { email } = req.body

    const personData = await Person.find({email})

    console.log(personData)
    res.send('Person Added')
})

app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})