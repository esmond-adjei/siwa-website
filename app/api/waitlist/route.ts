import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import type { FormData } from '@/types';

export async function POST(request: Request) {
  try {
    const body: FormData = await request.json();
    const { firstName, lastName, email, phone, institution, message } = body;

    console.log('Form data:', body);

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !institution) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Configure Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append row to spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          firstName,
          lastName,
          email,
          phone,
          institution,
          message,
          new Date().toISOString()
        ]],
      },
    });

    return NextResponse.json({ 
      message: 'Successfully added to waitlist',
      data: response.data 
    });

  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { 
        message: 'Failed to submit form',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}