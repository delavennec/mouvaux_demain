import { google } from 'googleapis';

type MembershipRowData = {
  name: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  address: string;
  phone: string;
  email: string;
  date: string;
  financialSupport: boolean;
  gdpr: boolean;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Variable d'environnement manquante: ${name}`);
  }

  return value;
}

export async function appendMembershipRow(data: MembershipRowData): Promise<void> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
      private_key: getRequiredEnv('GOOGLE_PRIVATE_KEY').replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = getRequiredEnv('GOOGLE_SHEET_ID');
  const tableName = getRequiredEnv('GOOGLE_TABLE_NAME');
  const dataRange = `${tableName}!A2:K`;

  const values = [[
    data.name,
    data.birthDate,
    data.birthPlace,
    data.nationality,
    data.address,
    data.phone,
    data.email,
    data.date,
    data.financialSupport ? 'Oui' : 'Non',
    data.gdpr ? 'Oui' : 'Non',
    new Date().toISOString(),
  ]];

  const existingRowsResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: dataRange,
  });

  const existingRows = existingRowsResponse.data.values || [];

  const firstEmptyRowOffset = existingRows.findIndex((row) =>
    row.every((cell) => !String(cell || '').trim()),
  );

  const targetRow = firstEmptyRowOffset >= 0 ? firstEmptyRowOffset + 2 : existingRows.length + 2;

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${tableName}!A${targetRow}:K${targetRow}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values,
    },
  });
}