import userModel from "../models/user.model.js"
import type { Request, Response } from 'express';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import devConfig from "../config/config.js";
import { config } from "dotenv";
import sessionModel from "../models/session.model.js";
import crypto from "crypto";
import { sendEmail } from "../../services/email.service.js";
import { generateOtp, getOtpHtml } from "../../utils/utils.js";
import otpModel from "../models/otp.model.js"; 

export async function register(req:Request,res:Response){

    const {username, email, password} = req.body

    const isUserAlreadyRegistered = await userModel.findOne({
        $or:[
            { username },
            { email }
        ]
    })

    if (!!isUserAlreadyRegistered){
        return res.status(409).json({
            message: "Username or email already exist"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const otp = generateOtp()
    const html = getOtpHtml(otp)

    const otpHash = crypto.createHash("sha256").update(otp).digest("hex")

    await sendEmail (email, "OTP Verification", `Your OTP code is ${otp}`, html)

    res.status(201).json({
        message: "User registered successfully",
        user:{
            username: user.username,
            email: user.email,
            verified: user.verified
        }
    })
}

export async function login(req:Request,res:Response){

    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if (!user){
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    if (!user.verified){
        return res.status(401).json({
            message: "Email not verified"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid credetials"
        })
    }

    const refreshToken = jwt.sign({
        id: user._id
    },  devConfig.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    )

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")

    // creating sessions

    const ip = req.ip
    const userAgent = req.headers["user-agent"];

    const session = await sessionModel.create({
        userId: user._id,
        refreshTokenHash,
        ...(ip !== undefined && { ip }),
        ...(userAgent !== undefined && { userAgent }),
    })

    const accessToken = jwt.sign({
        id: user._id,
        sessionId: session._id
    }, devConfig.JWT_SECRET,
        {
        expiresIn: "15m"
        }
    )

    res.cookie("refreshToken",refreshToken,{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({
        message: "Logged in successfully",
        user: {
            username: user.username,
            email: user.email,
        },
        accessToken,
    })

}


export async function logout (req:Request, res:Response){

    const refreshToken = req.cookies.refreshToken

    if (!refreshToken){
        return res.status(400).json({
            message: "token is not valid"
        })
    }
    
    const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

    const session = await sessionModel.findOne({
        refreshTokenHash,
        revoke: false
    })
        
    if(!session){
        return res.status(400).json({
            message: "Invalid refresh Token"
        })
    }

    session.revoke = true

    await session.save()

    res.clearCookie("refreshToken")

    res.status(200).json({
        message: "Logged out successfully."
    })
}

export async function logoutAll (req:Request, res:Response){
    
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken){
        return res.status(400).json({
            message: "Refresh token not found"
        })
    }

    const decoded = jwt.verify(refreshToken, devConfig.JWT_SECRET)

    await sessionModel.updateMany({
        userId:decoded.id,
        revoke:false
    },{
        revoke: true
    })

    res.clearCookie("refreshToken")

    res.status(200).json({
        message: "Logged out from all devices successfully"
    })

}

export async function getMe(req:Request,res:Response){
    const token = req.headers.authorization?.split(" ")[1]

    if (!token){
        return res.status(401).json({
            message:"token not found"
        })
    }

    const decoded = jwt.verify(token, devConfig.JWT_SECRET )

    console.log(decoded)

    const user = await userModel.findById(decoded.id)

    res.status(200).json({
        message:"user fetched successfully",
        user:{
            username: user.username,
            email: user.email
        }
    })

}

export async function refreshToken(req:Request, res:Response){
    
    const refreshToken = req.cookies.refreshToken

    if(!refreshToken){
        return res.status(401).json({
            message: "Refresh token not found"
        })
    }

    const decoded = jwt.verify(refreshToken, devConfig.JWT_SECRET )

    const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

    const session = await sessionModel.findOne({
        refreshTokenHash,
        revoke: false
    })

    if(!session){
        res.status(401).json({
            message: "Invalid refresh Token."
        })
    }

    const accessToken = jwt.sign({
        id:decoded._id
    }, devConfig.JWT_SECRET,{
        expiresIn:"15m"
    })

    const newRefreshToken = jwt.sign({
        id:decoded._id
        }, devConfig.JWT_SECRET,{
        expiresIn:"7d"
    })

    const newRefreshTokenHash = crypto.createHash('sha256').update(newRefreshToken).digest('hex')

    session.refreshTokenHash = newRefreshTokenHash
    await session.save()

    res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    })

    res.status(200).json({
        message:"access Token refreshed successfully.",
        accessToken
    })
}

export async function verifyEmail(req:Request, res:Response){
    const {otp,email} = req.body

    const otpHash = crypto.createHash('sha256').update(otp).digest('hex')

    const otpDoc = await otpModel.findOne({
        email,
        otpHash
    })

    if(!otpDoc){
        return res.status(400).json({
            message: "Invalid OTP"
        })
    }

    const user = await userModel.findByIdAndUpdate(otpDoc.user,{
        verified:true
    })

    if (!user) {
        return;
    }

    await otpModel.deleteMany({
        user:otpDoc.user
    })
    
    return res.status(200).json({
        message: "Email verified successfully.",
        user:{
            username: user.username,
            email: user.email,
            verified: user.verified
        }
    })
}