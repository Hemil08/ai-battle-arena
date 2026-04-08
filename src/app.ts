import express from "express"
import useGraph from "../services/graph.ai.service.js"
import {z} from "zod" 

const app = express()

app.get('/health',(req,res)=>{
    res.status(200).json({ status: 'ok' })
})

app.post("/use-graph", async (req,res)=>{
    await useGraph("Why we use Dokcer?")
})

export default app