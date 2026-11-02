import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { chromium } from '@playwright/test';

const sourceUrl = process.env.CV_SOURCE_URL ?? 'http://127.0.0.1:4321/cv/';
const outputPath = resolve(process.env.CV_OUTPUT_PATH ?? 'public/documents/mm-golam-hafiz-academic-cv.pdf');

await mkdir(dirname(outputPath), { recursive: true });

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.goto(sourceUrl, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
    margin: { top: '9mm', right: '11mm', bottom: '9mm', left: '11mm' },
  });
  console.log(`Generated public CV: ${outputPath}`);
} finally {
  await browser.close();
}
