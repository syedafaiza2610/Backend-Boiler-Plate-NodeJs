import  { Router } from "express";
import uploadController from "./controllers/upload.js";
import multer from "multer"
// import path from "path";
// const __dirname = path.resolve()
const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/modules/upload/files') // nodejs me dirname directry name
    },
    filename: function (req, file, cb) {
      // console.log("file===>" , file)
      const uniqueID   = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,`${uniqueID}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })



router.post("/" , upload.single('file'), uploadController)


export default router;