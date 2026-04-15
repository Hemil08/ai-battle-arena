import userModel from "../models/user.model.js"
import type { Request, Response } from 'express';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import devConfig from "../config/config.js";


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

    const token = jwt.sign({
        id: user._id
    }, devConfig.JWT_SECRET,
        {
        expiresIn: "1d"
        }
    )

    res.status(201).json({
        message: "User registered successfully",
        user:{
            username: user.username,
            email: user.email
        },
        token
    })
}

