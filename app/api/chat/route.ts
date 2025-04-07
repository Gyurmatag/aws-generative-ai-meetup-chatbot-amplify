import { Message } from 'ai';
import { streamText } from 'ai';
import { groq } from '@ai-sdk/groq';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('meta-llama/llama-4-scout-17b-16e-instruct'),
    messages: messages as Message[],
  });

  return result.toDataStreamResponse()
} 