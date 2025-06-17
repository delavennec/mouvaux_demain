/**
 * Mailchimp API service
 * Handles subscription to Mailchimp mailing lists
 */

type MailchimpResponse = {
  success: boolean;
  message: string;
};

/**
 * Adds a new subscriber to the Mailchimp audience list
 * @param email - The email address to subscribe
 * @param name - The subscriber's name (optional)
 * @returns Promise with success status and message
 */
export async function subscribeToNewsletter(email: string, name?: string): Promise<MailchimpResponse> {
  if (!process.env.MAILCHIMP_API_KEY || 
      !process.env.MAILCHIMP_AUDIENCE_ID || 
      !process.env.MAILCHIMP_SERVER_PREFIX) {
    throw new Error('Mailchimp configuration is missing');
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  
  // API endpoint for adding members to a list
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;
  
  try {
    // Prepare data for Mailchimp API
    const data: any = {
      email_address: email,
      status: 'subscribed', // Use 'pending' if you want double opt-in
    };

    // Add merge fields if name is provided
    if (name) {
      // Split name into first name and last name
      const nameParts = name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      
      data.merge_fields = {
        FNAME: firstName,
        LNAME: lastName
      };
    }

    // Make API request
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `apikey ${apiKey}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    // Handle existing subscriber case (status 400 with specific message)
    if (!response.ok) {
      if (response.status === 400 && result.title === 'Member Exists') {
        return {
          success: true,
          message: 'Cette adresse email est déjà inscrite à notre newsletter.',
        };
      }
      
      throw new Error(result.detail || 'Une erreur est survenue');
    }

    return {
      success: true,
      message: 'Vous êtes maintenant inscrit à notre newsletter!',
    };
  } catch (error) {
    console.error('Mailchimp API error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Une erreur est survenue',
    };
  }
} 