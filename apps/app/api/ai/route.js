import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { text } = await req.json();

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Explique de forma simples e neutra: " + text,
      },
    ],
  });

  return Response.json({
    result: response.choices[0].message.content,
  });
}