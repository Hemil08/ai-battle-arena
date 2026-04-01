import { ChatGoogle } from "@langchain/google";
import {ChatMistralAI} from "@langchain/mistralai";
import config from "../src/config/config.js"

export const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: config.GOOGLE_API_KEY
})

