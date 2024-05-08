import deleteData from "../services/delete.js" 
import {DELETE_DATA_MESSAGE ,  INTERNAL_SERVER_ERROR_MESSAGE} from "../constants/index.js"
// controller ka kam h service se lena bus or server ko wapis dena

const deleteController = async (req , res) =>{
    try{
        const {id} = req.params;
        await deleteData(id)
        res.status(200).send({status : 200 , message: DELETE_DATA_MESSAGE  })


    }catch(err){
        res.status(500).send({status : 500 , message :  INTERNAL_SERVER_ERROR_MESSAGE})
    }
}
export default  deleteController;