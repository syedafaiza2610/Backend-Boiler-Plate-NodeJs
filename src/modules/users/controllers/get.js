import getData from "../services/get.js" 
// controller ka kam h service se lena bus or server ko wapis dena

const getController = async (req , res) =>{
    try{
        const users = await getData()
        res.status(200).send({status : 200 , data : users })


    }catch(err){
        res.status(500).send({status : 500 , message : "Internal Server Error"})
    }
}
export default getController;