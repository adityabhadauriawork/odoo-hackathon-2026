import mongoose from "mongoose";


const maintenanceSchema = new mongoose.Schema(
{

    asset:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Asset",
        required:true
    },


    raisedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    issue:{
        type:String,
        required:true
    },


    priority:{
        type:String,
        enum:[
            "Low",
            "Medium",
            "High",
            "Critical"
        ],
        default:"Medium"
    },


    status:{
        type:String,
        enum:[
            "Pending",
            "Approved",
            "Rejected",
            "Technician Assigned",
            "In Progress",
            "Resolved"
        ],
        default:"Pending"
    },


    technician:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },


    images:[
        {
            type:String
        }
    ],


    resolution:{
        type:String
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
    "Maintenance",
    maintenanceSchema
);