import  { Router } from "express";
import uploadController from "./controllers/upload.js";
const router = Router();
import multer from "multer"

const upload = multer({ dest : "uploads"})

router.post("/" , upload.single('file'), uploadController)


export default router;