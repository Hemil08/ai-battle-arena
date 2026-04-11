import express from "express"
import useGraph from "../services/graph.ai.service.js"
import {z} from "zod" 

const app = express()

app.get('/health',(req,res)=>{
    res.status(200).json({ status: 'ok' })
})

app.get("/use-graph", async (req,res)=>{
    const result = await useGraph("Write an code for Factorial function in js")

    res.json(result)  
})

export default app