import express from 'express'
import router from './route.js'
import multer from 'multer'

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req,file,cb) => {
        cb(null, file.filename+'_'+Date.now()+file.originalname)
    }
})

const app = express()
const upload = multer({storage})
const PORT = 8080


//app.use(express.urlencoded({extended:true}))
app.use(upload.single('image'))


app.get('/', (req, res) => {
    res.send('Hello Express')
})


app.post('/form', (req, res) => {
    console.log(req.body)
    console.log(req.file)

    res.send('Form Received')
})


app.listen(PORT, () => {
    console.log(`Server now running on http://localhost:${PORT}`)
})