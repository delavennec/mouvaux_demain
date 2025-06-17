import { NextResponse } from 'next/server';

export async function GET() {
  // For security, we'll only return if the variables exist, not their values
  return NextResponse.json({
    hasApiKey: !!process.env.SENDGRID_API_KEY,
    hasEmailFrom: !!process.env.EMAIL_FROM,
    hasEmailTo: !!process.env.EMAIL_TO,
    nodeEnv: process.env.NODE_ENV
  });
} 