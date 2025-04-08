import { Message } from 'ai';
import { streamText } from 'ai';
import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';

const bedrock = createAmazonBedrock({
  region: 'eu-central-1',
  accessKeyId: process.env.APP_ACCESS_KEY_ID!,
  secretAccessKey: process.env.APP_SECRET_ACCESS_KEY!,
});

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
      model: bedrock('anthropic.claude-3-5-sonnet-20240620-v1:0'),
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