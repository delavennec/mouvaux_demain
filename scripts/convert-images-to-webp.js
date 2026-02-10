#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const publicDir = path.join(process.cwd(), 'public')
const exts = ['.jpg', '.jpeg', '.png']

async function convertFile(filePath) {
  try {
    const dir = path.dirname(filePath)
    const base = path.basename(filePath, path.extname(filePath))
    const outPath = path.join(dir, base + '.webp')

    // skip if output already exists
    if (fs.existsSync(outPath)) {
      console.log('Skipping (exists):', outPath)
      return
    }

    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outPath)

    console.log('Converted:', filePath, '->', outPath)
  } catch (err) {
    console.error('Error converting', filePath, err.message)
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (exts.includes(ext)) {
        convertFile(full)
      }
    }
  }
}

if (!fs.existsSync(publicDir)) {
  console.error('public folder not found at', publicDir)
  process.exit(1)
}

console.log('Starting conversion in', publicDir)
walk(publicDir)
