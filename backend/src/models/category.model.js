import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },

    description:{
        type:String
    },

    customFields:{
        type:Object,
        default:{}
    },

    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    }


},
{
    timestamps:true
});


export default mongoose.model(
    "Category",
    categorySchema
);