import { updateById } from "../db/index.js";

// const updateData = async (id, data) => {
//     return await updateById(id, data);
// }

// export default updateData;

// import { updatedById} from "../db/index.js";

const updateData = async(id , data) =>{
    return await updateById(id , data)

  
}

export default updateData;