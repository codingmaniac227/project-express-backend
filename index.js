import express from 'express'
import router from './route.js'


const app = express()

const PORT = 8080



app.get('/', (req, res) => {
    console.log('Middle')
     res.send('Hello, Express')
})

app.get('/error', () => {
    throw new Error('This is test error')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.send('Internal Server Error')
})

app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})