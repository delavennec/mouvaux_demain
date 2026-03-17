const fs = require('fs')
const { google } = require('googleapis')

function loadEnvFile(filePath) {
  const envText = fs.readFileSync(filePath, 'utf8')
  const env = {}

  for (const line of envText.split(/\r?\n/)) {
    if (!line || line.trim().startsWith('#')) {
      continue
    }

    const separatorIndex = line.indexOf('=')
    if (separatorIndex === -1) {
      continue
    }

    const key = line.slice(0, separatorIndex).trim()
    let value = line.slice(separatorIndex + 1)

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1)
    }

    env[key] = value
  }

  return env
}

async function main() {
  const env = loadEnvFile('.env.local')

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  const response = await sheets.spreadsheets.get({
    spreadsheetId: env.GOOGLE_SHEET_ID,
  })

  console.log(`TITLE=${response.data.properties?.title || ''}`)
  console.log(
    `SHEETS=${(response.data.sheets || []).map((sheet) => sheet.properties?.title || '').join(',')}`,
  )
}

main().catch((error) => {
  console.error(`GSHEETS_ERROR=${error.message || error}`)
  process.exit(1)
})