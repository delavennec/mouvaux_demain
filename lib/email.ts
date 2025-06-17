import sgMail from '@sendgrid/mail';

// Hard-coded fallback values for email sending - replace in production with actual env vars
// These are here as a last resort if environment variables completely fail
const FALLBACK_CONFIG = {
  apiKey: '', // You must set this in Vercel dashboard or deployment will fail
  emailFrom: 'noreply@example.com', // Must be verified in SendGrid
  emailTo: 'cdelavenne@dlga.fr'
};

// Get environment variables with fallback values
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || FALLBACK_CONFIG.apiKey;
const EMAIL_FROM = process.env.EMAIL_FROM || FALLBACK_CONFIG.emailFrom;
const EMAIL_TO = process.env.EMAIL_TO || FALLBACK_CONFIG.emailTo;

// Initialize SendGrid with the API key
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  newsletter: boolean;
};

export async function sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if we have the API key
    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not found in environment variables or config');
      throw new Error('Configuration d\'envoi d\'email manquante (SENDGRID_API_KEY)');
    }

    // Check if we have sender and recipient emails
    if (!EMAIL_FROM) {
      console.error('Sender email not found in environment variables or config');
      throw new Error('Configuration d\'envoi d\'email manquante (EMAIL_FROM)');
    }

    if (!EMAIL_TO) {
      console.error('Recipient email not found in environment variables or config');
      throw new Error('Configuration d\'envoi d\'email manquante (EMAIL_TO)');
    }

    const emailSubject = formData.subject 
      ? `Contact - ${formData.subject}`
      : 'Nouveau message de contact - Mouvaux Demain';

    // Debug log for environment variables
    console.log('Email configuration:', { 
      hasApiKey: !!SENDGRID_API_KEY, 
      emailFrom: EMAIL_FROM,
      emailTo: EMAIL_TO,
      envVars: {
        SENDGRID_API_KEY: !!process.env.SENDGRID_API_KEY,
        EMAIL_FROM: !!process.env.EMAIL_FROM,
        EMAIL_TO: !!process.env.EMAIL_TO,
        NODE_ENV: process.env.NODE_ENV
      }
    });

    const msg = {
      to: EMAIL_TO,
      from: EMAIL_FROM,
      subject: emailSubject,
      text: `
Nom: ${formData.name}
Email: ${formData.email}
${formData.subject ? `Sujet: ${formData.subject}` : ''}
Message: ${formData.message}
Inscription newsletter: ${formData.newsletter ? 'Oui' : 'Non'}
      `,
      html: `
<h3>Nouveau message de contact - Mouvaux Demain</h3>
<p><strong>Nom:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
${formData.subject ? `<p><strong>Sujet:</strong> ${formData.subject}</p>` : ''}
<p><strong>Message:</strong></p>
<p>${formData.message.replace(/\n/g, '<br>')}</p>
<p><strong>Inscription newsletter:</strong> ${formData.newsletter ? 'Oui' : 'Non'}</p>
      `,
    };

    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi du message' 
    };
  }
} 