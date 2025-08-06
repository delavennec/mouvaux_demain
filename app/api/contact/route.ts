import { NextResponse } from 'next/server';
import { sendContactEmail } from '../../../lib/email';
import { subscribeToNewsletter } from '@/lib/mailchimp';

export async function POST(request: Request) {
  try {
    console.log('Contact form submission received');
    console.log('Environment variables available:', {
      SENDGRID_API_KEY: !!process.env.SENDGRID_API_KEY,
      EMAIL_FROM: !!process.env.EMAIL_FROM,
      EMAIL_TO: !!process.env.EMAIL_TO,
      NODE_ENV: process.env.NODE_ENV
    });
    
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      console.log('Missing required fields in contact form');
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

    console.log('Sending email with data:', {
      name: formData.name,
      email: formData.email,
      hasSubject: !!formData.subject,
      messageLength: formData.message.length,
      newsletter: formData.newsletter || false,
      engage: formData.engage || false,
      contactTeam: formData.contactTeam || false,
      hostEvent: formData.hostEvent || false,
      financialSupport: formData.financialSupport || false
    });

    // Send email
    const result = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      subject: formData.subject || '',
      message: formData.message,
      newsletter: formData.newsletter || false,
      engage: formData.engage || false,
      contactTeam: formData.contactTeam || false,
      hostEvent: formData.hostEvent || false,
      financialSupport: formData.financialSupport || false,
    });

    // Subscribe to newsletter if option is checked
    if (formData.newsletter) {
      try {
        console.log('Subscribing to newsletter with name and email:', {
          name: formData.name,
          email: formData.email
        });
        await subscribeToNewsletter(formData.email, formData.name);
        console.log('Newsletter subscription successful');
      } catch (newsletterError) {
        console.error('Newsletter subscription failed:', newsletterError);
        // We don't fail the entire request if newsletter subscription fails
      }
    }

    if (result.success) {
      console.log('Email sent successfully');
      return NextResponse.json({ success: true });
    } else {
      console.error('Email sending failed:', result.error);
      return NextResponse.json(
        { error: result.error || 'Une erreur est survenue lors de l\'envoi du message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors du traitement de votre demande' },
      { status: 500 }
    );
  }
} 