import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

export const GET: APIRoute = async () => {
  const fontPath = join(process.cwd(), 'node_modules', '@fontsource-variable', 'literata', 'files', 'literata-latin-wght-normal.woff2');
  const font = await readFile(fontPath);
  const fontData = font.toString('base64');
  const svg = `
    <svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
      <style>
        @font-face { font-family: Literata; src: url(data:font/woff2;base64,${fontData}) format('woff2'); font-weight: 300 900; }
        .display { font-family: Literata, Georgia, serif; }
        .meta { font-family: Arial, sans-serif; }
      </style>
      <rect width="1200" height="675" fill="#F5F7F5"/>
      <path d="M80 92H1120M80 584H1120" stroke="#8D9C97" stroke-width="1"/>
      <rect x="875" y="130" width="245" height="380" fill="#0E4A4A"/>
      <rect x="875" y="130" width="8" height="380" fill="#A84124"/>
      <text x="80" y="155" class="meta" fill="#0E4A4A" font-size="24" font-weight="700">AI/ML RESEARCH</text>
      <text x="80" y="250" class="display" fill="#121918" font-size="74" font-weight="580">M. M. Golam</text>
      <text x="80" y="335" class="display" fill="#121918" font-size="74" font-weight="580">Hafiz</text>
      <text x="80" y="405" class="display" fill="#3F4D49" font-size="28">Medical imaging · Federated learning · Trustworthy AI</text>
      <text x="915" y="210" class="meta" fill="#BFD3CE" font-size="18" font-weight="700">ACADEMIC</text>
      <text x="915" y="275" class="display" fill="#FFFFFF" font-size="36">Research</text>
      <text x="915" y="322" class="display" fill="#FFFFFF" font-size="36">Portfolio</text>
      <path d="M915 370H1080" stroke="#BFD3CE" stroke-width="1"/>
      <text x="915" y="418" class="meta" fill="#FFFFFF" font-size="18">PUBLICATIONS</text>
      <text x="915" y="454" class="meta" fill="#FFFFFF" font-size="18">SYSTEMS</text>
      <text x="915" y="490" class="meta" fill="#FFFFFF" font-size="18">EXPERIENCE</text>
      <text x="80" y="630" class="meta" fill="#687873" font-size="20">rafa404.github.io</text>
    </svg>`;
  const jpg = await sharp(Buffer.from(svg)).jpeg({ quality: 90, chromaSubsampling: '4:4:4' }).toBuffer();
  return new Response(jpg, { headers: { 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=31536000, immutable' } });
};
