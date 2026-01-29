import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasMailchimpApiKey: !!process.env.MAILCHIMP_API_KEY,
    hasMailchimpAudienceId: !!process.env.MAILCHIMP_AUDIENCE_ID,
    hasMailchimpServerPrefix: !!process.env.MAILCHIMP_SERVER_PREFIX,
    apiKeyLength: process.env.MAILCHIMP_API_KEY?.length || 0,
    audienceIdLength: process.env.MAILCHIMP_AUDIENCE_ID?.length || 0,
    serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX || 'NOT SET',
  });
}
