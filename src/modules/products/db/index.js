import Model from "../models/index.js";
const getAll = async() => await Model.find();

const getAllPopulated = async (key) => await Model.find().populate({
   path : 'category',
   select:'name'
}); //population key mangta hai

const getAggregate = async(query) => await Model.aggregate(query);

 const addData = (data) => 
    new Model(data).save().then((user) => user.toObject());
 const deleteById = async  (id) => await Model.findByIdAndDelete(id);
 const updatedById = async  (id , data) => await Model.findByIdAndUpdate(id , data);
export{
 getAll, 
 addData,
 deleteById,
 updatedById,
 getAllPopulated
 

}
