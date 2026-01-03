
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTutor = async (question: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Contexto del curso: ${context}\n\nPregunta del alumno: ${question}`,
      config: {
        systemInstruction: "Eres un tutor experto en la plataforma METODOS VIP. Responde de forma clara, profesional y motivadora. Tu objetivo es ayudar al alumno a entender conceptos complejos.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, tuve un problema conectando con el tutor de IA. Por favor, intenta de nuevo más tarde.";
  }
};
