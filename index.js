import express from 'express'
import router from './route.js'


const app = express()

const PORT = 8080


app.get('/', (req, res) => {
     res.send('Hello, Express')
})

app.use('/user', router)

app.post('/users', express.json(), (req, res) => {
    const { name, email } = req.body
    res.json({
        message:`User ${name} with email ${email} created successfully`
    })
})



app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})