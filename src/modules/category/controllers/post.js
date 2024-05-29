import postData from "../services/post.js"
// controller ka kam h service se lena bus or server ko wapis dena

const postController = async (req , res) =>{
    try{
        const data = await postData(req.body)
      console.log("req==>" , req.body)
        console.log("data" ,  data)
        res.status(200).send({status : 200 , data})


    }catch(err){
        console.log("error" , err)
        res.status(500).send({status : 500 , message : "Internal Server Error"})
    }
}

export default postController;