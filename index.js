import express from 'express'
import router from './route.js'


const app = express()
const PORT = 8080

app.use('/public', express.static('public'))
app.use('images', express.static('images'))

app.get('/', (req, res) => {
    res.send('Hello Express')
})


app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})