import mongoose from "mongoose";
import { Schema } from "mongoose";
const dataSchema = new Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required : true
       
    },
    email: {
        type: mongoose.Schema.Types.String,
        // unique: true,
        required : true
        
    },
    password: {
        type: mongoose.Schema.Types.String,
        required : true
    }
},{timestamps :{
    createdAt: "created_at",
    updatedAt: "updated_at"
}});



const Model = mongoose.model('user', dataSchema);
export default Model;