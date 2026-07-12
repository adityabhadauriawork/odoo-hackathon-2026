import mongoose from "mongoose";


const auditItemSchema = new mongoose.Schema(
{

    audit:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Audit",
        required:true
    },


    asset:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Asset",
        required:true
    },


    verifiedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },


    status:{
        type:String,
        enum:[
            "Verified",
            "Missing",
            "Damaged"
        ],
        default:"Verified"
    },


    remarks:{
        type:String
    },


    verifiedAt:{
        type:Date,
        default:Date.now
    }

},
{
    timestamps:true
}
);



export default mongoose.model(
    "AuditItem",
    auditItemSchema
);