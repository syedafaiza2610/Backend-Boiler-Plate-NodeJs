import uploadFile from "../services/upload.js"
import multer from "multer"

// controller ka kam h service se lena bus or server ko wapis dena
const upload = multer({ dest : "uploads"})
const uploadController = async (req , res) =>{
    try{
    // console.log("req" , req.body)

    }catch(err){
        // console.log("error" , err)
        res.status(500).send({status : 500 , message : "Internal Server Error"})
    }
}

export default uploadController;