import {config} from "dotenv"

config()

// GEMINI_API_KEY
// MISTRAL_API_KEY
// COHERE_API_KEY

if (!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in environment variables")
}

if (!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET is not defined in environment variables")
}

type CONFIG = {
    readonly GOOGLE_API_KEY: string;
    readonly MISTRAL_API_KEY: string;
    readonly COHERE_API_KEY: string;
    readonly MONGO_URI: string;
    readonly JWT_SECRET: string
}

const  devConfig: CONFIG = {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
    COHERE_API_KEY: process.env.COHERE_API_KEY || "",
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

export default devConfig