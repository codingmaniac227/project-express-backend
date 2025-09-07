import express from "express"
import multer from "multer"

 export const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req,file,cb) => {
        cb(null, file.filename+'_'+Date.now()+file.originalname)
    }
})
