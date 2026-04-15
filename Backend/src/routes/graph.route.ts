import { Router } from "express";
import useGraph from "../../services/graph.ai.service.js"

const graphRouter = Router()

graphRouter.get("/use-graph", async (req,res)=>{
    const result = await useGraph("Write an code for Factorial function in js")

    res.json(result)
})

export default graphRouter