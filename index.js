const express = require('express')

const app = express()

const PORT = 8080

// Defining a simple request
app.get('/', (req, res) => {
     res.send('Hello, Express')
})


// username is a dynamic route
app.get('/user/:username', (req,res) => {
    const username = req.params.username
    res.send(`Welcome ${username}`)
})

// /search?keyword=express
app.get('/search', (req,res) => {
    const keyword = req.query.keyword
    res.send(`Searching for ${keyword}`)
})

// Listen in on the port established earlier
app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})