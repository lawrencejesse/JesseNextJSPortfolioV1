import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize auth - use service account or OAuth2
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, comment } = req.body;
    
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Append data to the spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:D', // Updated to include comment column
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, comment, new Date().toISOString()]],
      },
    });

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ message: 'Error submitting form' });
  }
} 