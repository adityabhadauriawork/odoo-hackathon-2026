import mongoose from "mongoose";


const allocationSchema = new mongoose.Schema(
{

    asset:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Asset",
        required:true
    },


    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    allocatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    allocatedDate:{
        type:Date,
        default:Date.now
    },


    expectedReturnDate:{
        type:Date
    },


    actualReturnDate:{
        type:Date
    },


    status:{
        type:String,
        enum:[
            "Allocated",
            "Returned",
            "Overdue"
        ],
        default:"Allocated"
    },


    conditionAtReturn:{
        type:String
    }


},
{
    timestamps:true
}
);


export default mongoose.model(
    "Allocation",
    allocationSchema
);