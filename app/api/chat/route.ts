import { Message } from 'ai';
import { streamText } from 'ai';
import { bedrock } from '@ai-sdk/amazon-bedrock';


export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: bedrock('meta.llama3-2-3b-instruct-v1:0'),
    messages: messages as Message[],
  });

  return result.toDataStreamResponse()
} 