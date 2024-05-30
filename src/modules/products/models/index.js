import mongoose from "mongoose";
import { Schema } from "mongoose";
const dataSchema = new Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required : true
       
    },
    description: {
        type: mongoose.Schema.Types.String,
        // unique: true,
        required : true
        
    },
    price: {
        type: mongoose.Schema.Types.String,
        required : true
    },
    image: {
        type: mongoose.Schema.Types.String,
        required : true
    },
    category:{
        required:true,
        type:mongoose.Schema.ObjectId,
        ref:"Category"
    }
},{timestamps :{
    createdAt: "created_at",
    updatedAt: "updated_at"
}});



const Model = mongoose.model('products', dataSchema);
export default Model;