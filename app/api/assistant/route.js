import { GoogleGenAI } from "@google/genai";
import { omogiwaKnowledge } from "../../../data/assistant";
import { assistantPrompt } from "../../../data/assistantPrompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${assistantPrompt}

Here is the information you know about OmoGiwa:

${JSON.stringify(omogiwaKnowledge, null, 2)}

Visitor's message:
${message}`,
            },
          ],
        },
      ],
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Assistant API error:", error);

    return Response.json(
      { error: "Something went wrong while talking to the assistant." },
      { status: 500 }
    );
  }
}