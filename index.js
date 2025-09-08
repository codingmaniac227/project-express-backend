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

// Creates Data in MongoDB
app.post('/person', express.json(), async (req, res) => {
    try {
        const { email, name, age } = req.body
        const newPerson = new Person({
            name,
            age, 
            email
        })
        await newPerson.save()
        console.log(newPerson)
        res.send('Person Added')
    } catch (error) {
        res.send(error.message)
    }
})

// Updating Data in MongoDB
app.put('/person', express.json(), async (req, res) => {
    
    const { name } = req.body

    const personData = await Person.find({name})

    console.log(personData)
    res.send('Person Added')
})

app.delete('/person/:id', async (req, res) => {
    const { id } = req.params

    await Person.findByIdAndDelete(id)

    res.send('User Deleted')
})

app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})