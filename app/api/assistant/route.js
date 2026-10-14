import { omogiwaKnowledge } from “../../../data/assistant”;
import { assistantPrompt } from “../../../data/assistantPrompt”;

export async function POST(request) {
try {
const { message } = await request.json();

if (!message || typeof message !== "string" || !message.trim()) {
  return Response.json(
    { error: "Please enter a message." },
    { status: 400 }
  );
}
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("Missing OPENAI_API_KEY environment variable.");
  return Response.json(
    { error: "The assistant is temporarily unavailable." },
    { status: 500 }
  );
}
const response = await fetch(
  "https://api.openai.com/v1/chat/completions",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: `${assistantPrompt}

Information about Omogbolahan Giwa:

${JSON.stringify(omogiwaKnowledge, null, 2)}`,
},
{
role: “user”,
content: message.trim(),
},
],
temperature: 0.7,
max_tokens: 700,
}),
}
);

const data = await response.json();
if (!response.ok) {
  console.error("OpenAI request failed:", data.error?.message);
  return Response.json(
    { error: "I couldn't generate a response. Please try again." },
    { status: 502 }
  );
}
const reply = data.choices?.[0]?.message?.content;
if (!reply) {
  return Response.json(
    { error: "I couldn't generate a response. Please try again." },
    { status: 502 }
  );
}
return Response.json({ reply });

} catch (error) {
console.error(“Giwa AI error:”, error);

return Response.json(
  { error: "Something went wrong. Please try again." },
  { status: 500 }
);

}
}