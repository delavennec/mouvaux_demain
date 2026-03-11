// Test script for contact API (Node 18+ native fetch)

async function testContactAPI() {
  try {
    console.log('Testing contact API...');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test',
        message: 'Test message from script',
        gdpr: true,
        newsletter: false,
      }),
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    const data = await response.json();
    console.log('Response data:', JSON.stringify(data, null, 2));
    
    if (!response.ok) {
      console.error('ERROR: Request failed with status', response.status);
    } else {
      console.log('SUCCESS: Email sent successfully');
    }
  } catch (error) {
    console.error('ERROR:', error.message);
    console.error('Stack:', error.stack);
  }
}

testContactAPI();
