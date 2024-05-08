import uploadFile from "../services/upload.js"

const uploadController = async (req , res) =>{
    try{
    console.log("req" , req.body)

    }catch(err){
        // console.log("error" , err)
        res.status(500).send({status : 500 , message : "Internal Server Error"})
    }
}

export default uploadController;