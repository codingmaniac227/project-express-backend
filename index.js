import express from 'express'
import router from './route.js'


const app = express()

const PORT = 8080

app.use('/welcome', (req, res, next) => {
    console.log(`A new request received at`+Date.now())
    next()
})

app.get('/', (req, res) => {
     res.send('Hello, Express')
})

app.get('/welcome', (req, res) => {
     res.send('Welcome to Express App')
})

app.use('/user', router)

app.use(express.json())


app.get('/things/:name/:id', (req,res) => {
    const { name, id } = req.params
    res.json({
        message: `ID - ${id}; Name - ${name}`
    })
})

// Catch all invalid routes
app.use((req,res) => {
    res.status(404).type('text').send('Internal Server Error')
})

app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})