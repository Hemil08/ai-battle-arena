import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "user is required"]
    },
    refreshTokenHash: {
        type:String,
        required:[true, "Refresh Token hash is required"]
    },
    ip: {
        type:String,
        required: [true, "Ip address is required"]
    },
    userAgent:{
        type: String,
        required: [true, "userAgent is required"]
    },
    revoke: {
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const sessionModel = mongoose.model("sessions",sessionSchema)

export default sessionModel