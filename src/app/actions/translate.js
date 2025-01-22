"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

async function translateText(text, targetLanguage, languageFrom = "") {
  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = languageFrom
    ? `Translate the following text from ${languageFrom} to ${targetLanguage}: ${text}`
    : `Detect the language of the text and translate it into ${targetLanguage}: ${text}`;
  const additional_prompt =
    "Just return the translated text. Do not add additional descriptions such as `Here are the translations`";

  try {
    const result = await model.generateContent(prompt + additional_prompt);
    console.log(result.response.text());
    return result.response.text();
  } 
  catch (error) {
    console.log(error);
  }
  return "Could not reload Translations";
}

export async function translate(formData) {
  const text = formData.get("text");
  const targetLanguage = formData.get("targetLanguage");
  const languageFrom = formData.get("languageFrom");

  const translation = await translateText(text, targetLanguage, languageFrom);

  return  {translation} ;
}
