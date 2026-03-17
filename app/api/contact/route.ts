import { NextResponse } from 'next/server';
import { appendMembershipRow } from '@/lib/google-sheets';

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
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: "L'enregistrement dans Google Sheets a échoué" },
      { status: 500 }
    );
  }
} 