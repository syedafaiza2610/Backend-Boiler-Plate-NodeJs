import updateData from "../services/update.js" 
import {UPDATE_DATA_MESSAGE ,  INTERNAL_SERVER_ERROR_MESSAGE} from "../../../constants/index.js"
// controller ka kam h service se lena bus or server ko wapis dena

const UpdateController = async (req , res) =>{
    try{
        const {id} = req.params;
        updateData(id, req.body)
        res.status(200).send({status : 200 , message: UPDATE_DATA_MESSAGE})


    }catch(err){
        res.status(500).send({status : 500 , message : INTERNAL_SERVER_ERROR_MESSAGE})
    }
}
export default  UpdateController;