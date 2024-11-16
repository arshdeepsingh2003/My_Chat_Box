import { Configuration } from "openai";

export const configureOpenAI=()=>{
    const config=new Configuration({
        apiKey:process.env.OPEN_AI_SECRET,
        organization:process.env.OPENAI_ORANISATION_ID
    });
    return config;
}