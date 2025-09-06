import express from 'express'
import router from './route.js'


const app = express()

const PORT = 8080


app.get('/', (req, res) => {
     res.send('Hello, Express')
})

app.use('/user', router)

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hello, Express')
})

app.get('/things/:name/:id', (req,res) => {
    const { name, id } = req.params
    res.json({
        message: `ID - ${id}; Name - ${name}`
    })
})

app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})