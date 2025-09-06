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
/* Express.json will convert the json 
   formatted body data and pass it in object and add it in the 
   request body 
*/
app.put('/users/:id', express.json(), (req,res) => {
    const userId = req.params.id
    const {name, email} = req.body
    res.json({
        message:`User ${userId} updated to ${name}, ${email}`
    })
})


app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})