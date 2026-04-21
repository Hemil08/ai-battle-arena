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

if (!process.env.GOOGLE_CLIENT_ID){
    throw new Error("GOOGLE_CLIENT_ID is not defined in environment variables")
}

if (!process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("GOOGLE_CLIENT_SECRET is not defined in environment variables")
}

if (!process.env.GOOGLE_REFRESH_TOKEN){
    throw new Error("GOOGLE_REFRESH_TOKEN is not defined in environment variables")
}

if (!process.env.GOOGLE_USER){
    throw new Error("GOOGLE_USER is not defined in environment variables")
}

type CONFIG = {
    readonly GOOGLE_API_KEY: string;
    readonly MISTRAL_API_KEY: string;
    readonly COHERE_API_KEY: string;
    readonly MONGO_URI: string;
    readonly JWT_SECRET: string;
    readonly GOOGLE_CLIENT_ID: string;
    readonly GOOGLE_CLIENT_SECRET: string;
    readonly GOOGLE_REFRESH_TOKEN: string;
    readonly GOOGLE_USER: string;
}

const  devConfig: CONFIG = {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
    COHERE_API_KEY: process.env.COHERE_API_KEY || "",
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_USER: process.env.GOOGLE_USER    
}

export default devConfig