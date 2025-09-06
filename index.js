import express from 'express'
import router from './route.js'


const app = express()

const PORT = 8080

// Set EJS as the view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const userName = 'John Doe'
    res.render('index', {userName})
})


app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})