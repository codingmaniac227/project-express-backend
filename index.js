import express from 'express'
import router from './route.js'


const app = express()

const PORT = 8080

app.use((req,res,next) => {
    console.log('Start')

    res.on('finish', () => {
        console.log('End')
    })
    next()
})

app.get('/', (req, res) => {
    console.log('Middle')
     res.send('Hello, Express')
})

app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})