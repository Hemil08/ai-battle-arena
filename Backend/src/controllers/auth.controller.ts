import userModel from "../models/user.model.js"
import type { Request, Response } from 'express';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import devConfig from "../config/config.js";
import { config } from "dotenv";


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

    const refreshToken = jwt.sign({
        id: user._id
    },  devConfig.JWT_SECRET,
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

    const accessToken = jwt.sign({
        id: user._id
    }, devConfig.JWT_SECRET,
        {
        expiresIn: "15d"
        }
    )


    res.status(201).json({
        message: "User registered successfully",
        user:{
            username: user.username,
            email: user.email
        },
        accessToken
    })
}

export async function getMe(req:Request,res:Response){
    const token = req.headers.authorization?.split(" ")[1]

    if (!token){
        res.status(401).json({
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

    const accessToken = jwt.sign({
        id:decoded._id
    }, devConfig.JWT_SECRET,{
        expiresIn:"15m"
    })

    res.status(200).json({
        message:"access Token refreshed successfully.",
        accessToken
    })

}

