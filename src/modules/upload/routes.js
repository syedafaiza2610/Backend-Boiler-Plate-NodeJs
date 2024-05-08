import  { Router } from "express";
import uploadController from "./controllers/upload.js";
const router = Router();
import multer from "multer"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })



router.post("/" , upload.single('file'), uploadController)


export default router;