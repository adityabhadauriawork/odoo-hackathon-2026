import mongoose from "mongoose";


const transferSchema = new mongoose.Schema(
{

    asset:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Asset",
        required:true
    },


    fromUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },


    toUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    requestedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },


    reason:{
        type:String
    },


    status:{
        type:String,
        enum:[
            "Pending",
            "Approved",
            "Rejected",
            "Completed"
        ],
        default:"Pending"
    },


    approvedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    timestamps:true
}
);


export default mongoose.model(
    "Transfer",
    transferSchema
);