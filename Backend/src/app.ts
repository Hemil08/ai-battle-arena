import express from "express"
import morgan from 'morgan'
import {z} from "zod" 
import graphRouter from "./routes/graph.route.js"
import authRouter from "./routes/auth.route.js"

const app = express()



app.use(express.json())
app.use(morgan("dev"))


app.use("/api", graphRouter)
app.use("/api/auth",authRouter)

app.get('/health',(req,res)=>{
    res.status(200).json({ status: 'ok' })
})

export default app