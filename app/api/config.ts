// Runtime configuration for server components and API routes
export const serverConfig = {
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY || '',
  },
  email: {
    from: process.env.EMAIL_FROM || 'noreply@example.com',
    to: process.env.EMAIL_TO || 'RenouveauMouvaux@gmail.com',
  },
  env: process.env.NODE_ENV || 'development',
}; 