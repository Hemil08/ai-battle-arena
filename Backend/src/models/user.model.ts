import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"email is required"],
        unique: [true,"Email must be unique"]
    },
    username:{
        type:String,
        required:[true,"username is required"],
        unique: [true, "Username must be unique"]
    },
    password:{
        type: String,
        required : [true, "password is required"]
    }
})

const userModel = mongoose.model("users",userSchema)

export default userModel