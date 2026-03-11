import sgMail from '@sendgrid/mail';

// Hard-coded fallback values for email sending - replace in production with actual env vars
// These are here as a last resort if environment variables completely fail
const FALLBACK_CONFIG = {
  apiKey: '', // You must set this in Vercel dashboard or deployment will fail
  emailFrom: 'noreply@example.com', // Must be verified in SendGrid
  emailTo: 'RenouveauMouvaux@gmail.com'
};

// Get environment variables with fallback values
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || FALLBACK_CONFIG.apiKey;
const EMAIL_FROM = process.env.EMAIL_FROM || FALLBACK_CONFIG.emailFrom;
const EMAIL_TO = process.env.EMAIL_TO || FALLBACK_CONFIG.emailTo;
const EMAIL_TO_LIST = EMAIL_TO
  .split(',')
  .map((email) => email.trim())
  .filter(Boolean);

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
  engage?: boolean;
  contactTeam?: boolean;
  hostEvent?: boolean;
  financialSupport?: boolean;
  membershipForm?: boolean;
};

type EmailAttachment = {
  content: string;
  filename: string;
  type: string;
  disposition: string;
};

export async function sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; error?: string; messageId?: string }> {
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

    if (!EMAIL_TO_LIST.length) {
      console.error('Recipient email not found in environment variables or config');
      throw new Error('Configuration d\'envoi d\'email manquante (EMAIL_TO)');
    }

    const emailSubject = formData.subject 
      ? `Contact - ${formData.subject}`
      : 'Nouveau message de contact - Renouveau pour Mouvaux';

    // Debug log for environment variables
    console.log('Email configuration:', { 
      hasApiKey: !!SENDGRID_API_KEY, 
      emailFrom: EMAIL_FROM,
      emailTo: EMAIL_TO_LIST,
      envVars: {
        SENDGRID_API_KEY: !!process.env.SENDGRID_API_KEY,
        EMAIL_FROM: !!process.env.EMAIL_FROM,
        EMAIL_TO: !!process.env.EMAIL_TO,
        NODE_ENV: process.env.NODE_ENV
      }
    });

    const msg = {
      to: EMAIL_TO_LIST.length === 1 ? EMAIL_TO_LIST[0] : EMAIL_TO_LIST,
      from: EMAIL_FROM,
      replyTo: formData.email,
      subject: emailSubject,
      text: `
Nom: ${formData.name}
Email: ${formData.email}
${formData.subject ? `Sujet: ${formData.subject}` : ''}
Message: ${formData.message}
Inscription newsletter: ${formData.newsletter ? 'Oui' : 'Non'}
${formData.engage ? 'Engagement dans la campagne: Oui' : ''}
${formData.contactTeam ? 'Contact avec un membre de l\'équipe: Oui' : ''}
${formData.hostEvent ? 'Accueil d\'un apéro Mouvaux 2026: Oui' : ''}
${formData.financialSupport ? 'Soutien financier de la campagne: Oui' : ''}
      `,
      html: `
<h3>Nouveau message de contact - Renouveau pour Mouvaux</h3>
<p><strong>Nom:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
${formData.subject ? `<p><strong>Sujet:</strong> ${formData.subject}</p>` : ''}
<p><strong>Message:</strong></p>
<p>${formData.message.replace(/\n/g, '<br>')}</p>
<p><strong>Inscription newsletter:</strong> ${formData.newsletter ? 'Oui' : 'Non'}</p>

${formData.engage || formData.contactTeam || formData.hostEvent || formData.financialSupport ? 
`<h4>Engagement souhaité:</h4>
<ul>
  ${formData.engage ? '<li><strong>Je souhaite m\'engager et participer à la campagne</strong></li>' : ''}
  ${formData.contactTeam ? '<li><strong>je souhaite avoir un contact direct avec un membre de l\'équipe</strong></li>' : ''}
  ${formData.hostEvent ? '<li><strong>Je souhaite accueillir un apéro « Mouvaux 2026 » à mon domicile</strong></li>' : ''}
  ${formData.financialSupport ? '<li><strong>Je souhaite soutenir financièrement la campagne</strong></li>' : ''}
</ul>` : ''}
      `,
    };

    const [sendgridResponse] = await sgMail.send(msg);
    const messageId = sendgridResponse?.headers?.['x-message-id'] as string | undefined;

    console.log('SendGrid accepted contact email', {
      statusCode: sendgridResponse?.statusCode,
      messageId,
      to: EMAIL_TO_LIST,
      from: EMAIL_FROM,
      replyTo: formData.email,
    });

    return { success: true, messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi du message' 
    };
  }
}

export async function sendMembershipFormEmail(
  toEmail: string,
  name: string,
  pdfBuffer: Buffer
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if we have the necessary configuration
    if (!SENDGRID_API_KEY || !EMAIL_FROM) {
      console.error('Email configuration missing');
      throw new Error('Configuration d\'envoi d\'email manquante');
    }

    const msg = {
      to: toEmail,
      from: EMAIL_FROM,
      subject: 'Votre formulaire d\'adhésion - Renouveau pour Mouvaux',
      text: `
Bonjour ${name},

Merci de votre intérêt pour notre mouvement "Renouveau pour Mouvaux" !

Vous trouverez en pièce jointe votre formulaire d'adhésion pré-rempli avec vos informations.

Pour finaliser votre adhésion :
1. Téléchargez le document PDF ci-joint
2. Imprimez-le
3. Signez-le dans l'espace prévu à cet effet
4. Renvoyez-le nous par email à RenouveauMouvaux@gmail.com ou remettez-le lors d'un de nos événements

Nous sommes impatients de vous compter parmi nous !

Cordialement,
L'équipe de Renouveau pour Mouvaux

Charles Delavenne et son équipe
RenouveauMouvaux@gmail.com
06 89 31 65 48
www.renouveaumouvaux.fr
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Renouveau pour Mouvaux</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
    <h2 style="color: #1e40af; margin-top: 0;">Bonjour ${name},</h2>
    
    <p style="color: #374151; line-height: 1.6;">
      Merci de votre intérêt pour notre mouvement <strong>"Renouveau pour Mouvaux"</strong> !
    </p>
    
    <p style="color: #374151; line-height: 1.6;">
      Vous trouverez en pièce jointe votre <strong>formulaire d'adhésion pré-rempli</strong> avec vos informations.
    </p>
    
    <div style="background: white; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
      <h3 style="color: #1e40af; margin-top: 0;">Pour finaliser votre adhésion :</h3>
      <ol style="color: #374151; line-height: 1.8;">
        <li>📥 Téléchargez le document PDF ci-joint</li>
        <li>🖨️ Imprimez-le</li>
        <li>✍️ Signez-le dans l'espace prévu à cet effet</li>
        <li>📧 Renvoyez-le nous par email à <a href="mailto:RenouveauMouvaux@gmail.com" style="color: #3b82f6;">RenouveauMouvaux@gmail.com</a><br>
            ou remettez-le lors d'un de nos événements</li>
      </ol>
    </div>
    
    <p style="color: #374151; line-height: 1.6;">
      Nous sommes <strong>impatients de vous compter parmi nous</strong> !
    </p>
    
    <p style="color: #374151; line-height: 1.6; margin-bottom: 0;">
      Cordialement,<br>
      L'équipe de Renouveau pour Mouvaux
    </p>
  </div>
  
  <div style="background: #1f2937; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
    <p style="color: #9ca3af; margin: 5px 0; font-size: 14px;">
      <strong style="color: white;">Charles Delavenne et son équipe</strong>
    </p>
    <p style="color: #9ca3af; margin: 5px 0; font-size: 14px;">
      📧 <a href="mailto:RenouveauMouvaux@gmail.com" style="color: #60a5fa;">RenouveauMouvaux@gmail.com</a><br>
      📞 <a href="tel:+33689316548" style="color: #60a5fa;">06 89 31 65 48</a><br>
      🌐 <a href="http://www.renouveaumouvaux.fr" style="color: #60a5fa;">www.renouveaumouvaux.fr</a>
    </p>
  </div>
</div>
      `,
      attachments: [
        {
          content: pdfBuffer.toString('base64'),
          filename: `Formulaire_Adhesion_${name.replace(/\s+/g, '_')}.pdf`,
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ],
    };

    await sgMail.send(msg);
    console.log('Membership form email sent successfully to:', toEmail);
    return { success: true };
  } catch (error) {
    console.error('Error sending membership form email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi du formulaire',
    };
  }
} 