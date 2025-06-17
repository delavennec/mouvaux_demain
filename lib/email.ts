import sgMail from '@sendgrid/mail';

// Initialize SendGrid with the API key from environment variables
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
    if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM || !process.env.EMAIL_TO) {
      throw new Error('Missing email configuration');
    }

    const emailSubject = formData.subject 
      ? `Contact - ${formData.subject}`
      : 'Nouveau message de contact - Mouvaux Demain';

    const msg = {
      to: process.env.EMAIL_TO, // Default receiver email (cdelavenne@dlga.fr in env var)
      from: process.env.EMAIL_FROM, // Verified sender email
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