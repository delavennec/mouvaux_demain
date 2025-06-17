import sgMail from '@sendgrid/mail';

// Get environment variables with fallback values for local development
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@example.com';
const EMAIL_TO = process.env.EMAIL_TO || 'cdelavenne@dlga.fr';

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
      console.error('SendGrid API key not found');
      throw new Error('Configuration d\'envoi d\'email manquante');
    }

    const emailSubject = formData.subject 
      ? `Contact - ${formData.subject}`
      : 'Nouveau message de contact - Mouvaux Demain';

    // Debug log (remove in production)
    console.log('Email configuration:', { 
      hasApiKey: !!SENDGRID_API_KEY, 
      emailFrom: EMAIL_FROM,
      emailTo: EMAIL_TO 
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