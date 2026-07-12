import mongoose from "mongoose";


const assetSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },


    assetTag:{
        type:String,
        required:true,
        unique:true
    },


    serialNumber:{
        type:String,
        unique:true,
        sparse:true
    },


    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },


    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department"
    },


    location:{
        type:String,
        trim:true
    },


    condition:{
        type:String,
        enum:[
            "Excellent",
            "Good",
            "Fair",
            "Damaged"
        ],
        default:"Good"
    },


    status:{
        type:String,
        enum:[
            "Available",
            "Allocated",
            "Reserved",
            "Under Maintenance",
            "Lost",
            "Retired",
            "Disposed"
        ],
        default:"Available"
    },


    sharedBookable:{
        type:Boolean,
        default:false
    },


    purchaseDate:{
        type:Date
    },


    purchaseCost:{
        type:Number
    },


    warranty:{
        type:String
    },


    images:[
        {
            type:String
        }
    ],


    documents:[
        {
            type:String
        }
    ]

},
{
    timestamps:true
}
);


export default mongoose.model(
    "Asset",
    assetSchema
);