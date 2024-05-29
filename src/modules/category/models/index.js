import mongoose from "mongoose";
import { Schema } from "mongoose";
const dataSchema = new Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required : true
       
    },
    status:{
        type: String,
        required: false,
        enum:['active' , 'inactive'],
        default:"active"

    }
},{timestamps :{
    createdAt: "created_at",
    updatedAt: "updated_at"
}});



const Model = mongoose.model('Category', dataSchema);
export default Model;