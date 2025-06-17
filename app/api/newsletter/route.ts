import { NextRequest, NextResponse } from 'next/server';
import { subscribeToNewsletter } from '@/lib/mailchimp';

/**
 * Handler for POST requests to /api/newsletter
 * Validates email and subscribes to Mailchimp
 */
export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Call Mailchimp service
    const result = await subscribeToNewsletter(email);

    return NextResponse.json(result, { 
      status: result.success ? 200 : 500 
    });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Une erreur est survenue' 
      },
      { status: 500 }
    );
  }
}

/**
 * Simple email validation helper
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
} 