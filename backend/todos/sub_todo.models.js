import mongoose from "mongoose"

const subtodoSchema = new mongoose.Schema({
    Content:{
        type:String,
        required:true,
    },
    Complete:{
        type:true,
        default:false,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    
},{timestamps:true})

export const Subtodo = mongoose.model("Subtodo",subtodoSchema)





