import { NextResponse } from 'next/server';
import { appendMembershipRow } from '@/lib/google-sheets';

function getGoogleSheetsErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);

  if (message.includes("Variable d'environnement manquante")) {
    return "La configuration Google Sheets est incomplète sur le serveur.";
  }

  if (message.includes('The caller does not have permission') || message.includes('permission')) {
    return "Le compte Google de synchronisation n'a pas accès au Google Sheet.";
  }

  if (message.includes('Requested entity was not found')) {
    return "Le Google Sheet configuré est introuvable.";
  }

  if (message.includes('Unable to parse range')) {
    return "Le nom de l'onglet Google Sheets est incorrect.";
  }

  if (message.includes('Invalid JWT') || message.includes('DECODER routines') || message.includes('private_key')) {
    return "La clé privée Google configurée sur le serveur est invalide.";
  }

  return "L'enregistrement dans Google Sheets a échoué";
}

export async function POST(request: Request) {
  try {
    console.log('Membership form submission received');
    console.log('Environment variables available:', {
      GOOGLE_SERVICE_ACCOUNT_EMAIL: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
      GOOGLE_SHEET_ID: !!process.env.GOOGLE_SHEET_ID,
      GOOGLE_TABLE_NAME: !!process.env.GOOGLE_TABLE_NAME,
      NODE_ENV: process.env.NODE_ENV
    });
    
    const formData = await request.json();
    
    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.birthDate ||
      !formData.birthPlace ||
      !formData.nationality ||
      !formData.address ||
      !formData.phone ||
      !formData.date ||
      !formData.gdpr
    ) {
      console.log('Missing required fields in membership form');
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

    console.log('Appending Google Sheets row with data:', {
      name: formData.name,
      email: formData.email,
      financialSupport: formData.financialSupport || false,
      birthDate: formData.birthDate,
      birthPlace: formData.birthPlace,
      nationality: formData.nationality,
      address: formData.address,
      phone: formData.phone,
      date: formData.date
    });

    await appendMembershipRow({
      name: formData.name,
      birthDate: formData.birthDate,
      birthPlace: formData.birthPlace,
      nationality: formData.nationality,
      address: formData.address,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      financialSupport: formData.financialSupport || false,
      gdpr: formData.gdpr,
    });

    console.log('Google Sheets row added successfully');
    return NextResponse.json({ success: true });
  } catch (error) {
    const rawMessage = error instanceof Error ? error.message : String(error);
    const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY || '';
    console.error('Contact form error:', rawMessage);
    console.error('Private key diagnostics:', {
      length: privateKeyRaw.length,
      startsWithBegin: privateKeyRaw.startsWith('-----BEGIN'),
      startsWithQuote: privateKeyRaw.startsWith('"'),
      containsLiteralN: privateKeyRaw.includes('\\n'),
      containsRealNewline: privateKeyRaw.includes('\n'),
    });
    return NextResponse.json(
      { error: getGoogleSheetsErrorMessage(error) },
      { status: 500 }
    );
  }
} 