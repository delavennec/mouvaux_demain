import { NextResponse } from 'next/server';

export async function GET() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY || '';
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    google: {
      hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasPrivateKey: !!privateKey,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID,
      hasTableName: !!process.env.GOOGLE_TABLE_NAME,
      privateKeyLength: privateKey.length,
      privateKeyStart: privateKey.slice(0, 20),
      startsWithBegin: privateKey.startsWith('-----BEGIN'),
      startsWithQuote: privateKey.startsWith('"'),
      containsLiteralBackslashN: privateKey.includes('\\n'),
      containsRealNewline: privateKey.includes('\n'),
    }
  });
} 