import { updatedById} from "../db/index.js";

const updateData = async(id , data) =>{
    return await updatedById(id , data)

  
}

export default updateData;