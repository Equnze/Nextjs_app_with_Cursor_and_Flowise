import { NextResponse } from 'next/server';
import { ChatResponse, ApiRequest } from '@/types/chat';

export async function POST(request: Request) {
  try {
    const body: ApiRequest = await request.json();
    
    const response = await fetch(
      process.env.FLOWISE_API_URL!,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.FLOWISE_API_KEY}`
        },
        body: JSON.stringify({ question: body.question })
      }
    );

    const result = await response.json();
    
    return NextResponse.json({
      answer: result.answer,
      success: true
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 