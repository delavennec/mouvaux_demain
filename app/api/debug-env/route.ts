import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY || '';
  const privateKey = privateKeyRaw.replace(/^["']|["']$/g, '').replace(/\\n/g, '\n');

  const keyInfo = {
    length: privateKeyRaw.length,
    startsWithBegin: privateKeyRaw.startsWith('-----BEGIN'),
    startsWithQuote: privateKeyRaw.startsWith('"'),
    containsLiteralBackslashN: privateKeyRaw.includes('\\n'),
    containsRealNewline: privateKeyRaw.includes('\n'),
    firstLine: privateKeyRaw.split('\n')[0],
    lastLine: privateKeyRaw.split('\n').slice(-1)[0],
  };

  let authResult: string;
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    await auth.getClient();
    authResult = 'OK';
  } catch (e) {
    authResult = e instanceof Error ? e.message : String(e);
  }

  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    hasSheetId: !!process.env.GOOGLE_SHEET_ID,
    hasTableName: !!process.env.GOOGLE_TABLE_NAME,
    keyInfo,
    authResult,
  });
}