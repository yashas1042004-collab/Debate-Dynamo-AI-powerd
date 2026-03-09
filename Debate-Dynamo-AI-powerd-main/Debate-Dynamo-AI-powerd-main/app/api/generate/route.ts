import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { userInput } = await request.json();
    
    if (!userInput?.trim()) {
      return NextResponse.json(
        { error: 'Empty input' },
        { status: 400 }
      );
    }

    // Mock responses - replace with actual AI service
    const responses = [
      `While you make a valid point about "${userInput}", consider that...`,
      `An alternative perspective is that ${userInput} might not account for...`,
      `Research suggests ${userInput} may be oversimplified because...`
    ];
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return NextResponse.json({
      argument: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}