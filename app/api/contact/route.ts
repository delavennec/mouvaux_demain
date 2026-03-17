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
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: getGoogleSheetsErrorMessage(error) },
      { status: 500 }
    );
  }
} 