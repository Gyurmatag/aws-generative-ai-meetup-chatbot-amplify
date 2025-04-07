import { Message } from 'ai';
import { streamText } from 'ai';
import { bedrock } from '@ai-sdk/amazon-bedrock';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages format' }),
        { status: 400 }
      );
    }

    const result = streamText({
      model: bedrock('meta.llama3-2-3b-instruct-v1:0'),
      messages: messages as Message[],
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred while processing your request',
        details: error instanceof Error ? error.message : String(error)
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 