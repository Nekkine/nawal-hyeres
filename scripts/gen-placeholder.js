const sharp = require('sharp')

const svg = Buffer.from(
  `<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F8F4EC"/>
      <stop offset="1" stop-color="#EDE4D3"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#g)"/>
  <circle cx="400" cy="350" r="150" fill="none" stroke="#C4633A" stroke-width="10" opacity="0.35"/>
  <circle cx="400" cy="350" r="110" fill="#C4633A"/>
  <text x="400" y="372" font-family="Georgia, serif" font-style="italic" font-size="76" fill="#FFFFFF" text-anchor="middle">ÉH</text>
  <text x="400" y="600" font-family="Verdana, sans-serif" font-size="30" letter-spacing="8" fill="#7C8450" text-anchor="middle">PHOTO A VENIR</text>
</svg>`
)

sharp(svg)
  .webp({ quality: 80 })
  .toFile('public/images/placeholder.webp')
  .then((info) => console.log('OK', info.size, 'octets'))
  .catch((error) => {
    console.error(error.message)
    process.exit(1)
  })
