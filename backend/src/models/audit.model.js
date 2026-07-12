import mongoose from "mongoose";


const auditSchema = new mongoose.Schema(
{

    title:{
        type:String,
        required:true
    },


    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department"
    },


    location:{
        type:String
    },


    auditors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],


    startDate:{
        type:Date,
        required:true
    },


    endDate:{
        type:Date
    },


    status:{
        type:String,
        enum:[
            "Scheduled",
            "Running",
            "Completed",
            "Closed"
        ],
        default:"Scheduled"
    },


    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


},
{
    timestamps:true
}
);



export default mongoose.model(
    "Audit",
    auditSchema
);