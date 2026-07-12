import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema(
{
    asset:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Asset",
        required:true
    },


    bookedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    startTime:{
        type:Date,
        required:true
    },


    endTime:{
        type:Date,
        required:true
    },


    purpose:{
        type:String,
        trim:true
    },


    status:{
        type:String,
        enum:[
            "Upcoming",
            "Ongoing",
            "Completed",
            "Cancelled"
        ],
        default:"Upcoming"
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
    "Booking",
    bookingSchema
);