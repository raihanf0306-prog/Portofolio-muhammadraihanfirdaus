const fs = require('fs');

const width = 800;
const height = 1130;

// High precision Code 128 barcode matching the photo
const barcodeData = [
  4, 2, 2, 4, 1, 2, 3, 1, 4, 1, 2, 2, 1, 4, 3, 1, 2, 3, 4, 1, 2, 2, 1, 3,
  4, 2, 1, 2, 3, 4, 1, 2, 2, 1, 4, 3, 1, 2, 3, 4, 1, 2, 2, 1, 3, 4, 2, 1,
  2, 3, 4, 1, 2, 2, 1, 4, 3, 1, 2, 3, 4, 1, 2, 2, 1, 3, 4, 2, 1, 2, 3, 4
];
let barcodeSvg = '';
let bx = 558;
for (let i = 0; i < barcodeData.length; i++) {
  const barWidth = barcodeData[i] * 1.35;
  if (i % 2 === 0) {
    barcodeSvg += `<rect x="${bx.toFixed(1)}" y="25" width="${barWidth.toFixed(1)}" height="42" fill="#0A0F1D" />`;
  }
  bx += barWidth;
}

// Side Guilloche Security Borders (Left & Right)
let borderLeft = '';
let borderRight = '';
for (let y = 6; y < height - 6; y += 12) {
  borderLeft += `
    <path d="M 6 ${y} C 18 ${y - 7}, 32 ${y + 12}, 42 ${y} C 32 ${y + 7}, 18 ${y - 12}, 6 ${y}" fill="none" stroke="#785028" stroke-width="0.75" opacity="0.65" />
    <path d="M 2 ${y + 6} C 16 ${y + 14}, 28 ${y - 4}, 44 ${y + 6}" fill="none" stroke="#4A2E12" stroke-width="0.5" opacity="0.55" />
    <text x="24" y="${y + 7}" font-family="Arial, Helvetica, sans-serif" font-size="4.5" font-weight="900" fill="#6B4423" opacity="0.45" text-anchor="middle" transform="rotate(-90 24 ${y + 7})">BNSP</text>
  `;
  borderRight += `
    <path d="M ${width - 6} ${y} C ${width - 18} ${y - 7}, ${width - 32} ${y + 12}, ${width - 42} ${y} C ${width - 32} ${y + 7}, ${width - 18} ${y - 12}, ${width - 6} ${y}" fill="none" stroke="#785028" stroke-width="0.75" opacity="0.65" />
    <path d="M ${width - 2} ${y + 6} C ${width - 16} ${y + 14}, ${width - 28} ${y - 4}, ${width - 44} ${y + 6}" fill="none" stroke="#4A2E12" stroke-width="0.5" opacity="0.55" />
    <text x="${width - 24}" y="${y + 7}" font-family="Arial, Helvetica, sans-serif" font-size="4.5" font-weight="900" fill="#6B4423" opacity="0.45" text-anchor="middle" transform="rotate(90 ${width - 24} ${y + 7})">BNSP</text>
  `;
}

// Center security guilloche rosette watermark behind title and name
let centerWatermark = '';
for (let i = 0; i < 18; i++) {
  const angle = (i * 20) * (Math.PI / 180);
  const rx = Math.cos(angle) * 160;
  const ry = Math.sin(angle) * 160;
  centerWatermark += `<ellipse cx="${400 + rx * 0.15}" cy="${470 + ry * 0.15}" rx="140" ry="60" transform="rotate(${i * 10} 400 470)" fill="none" stroke="#C5A880" stroke-width="0.3" opacity="0.14" />`;
}

// Background safety micro-lines
let bgFineWaves = '';
for (let y = 80; y < height - 50; y += 22) {
  bgFineWaves += `<path d="M 50 ${y} Q 220 ${y - 12} 400 ${y} T 750 ${y}" fill="none" stroke="#CBB494" stroke-width="0.25" opacity="0.15" />`;
}

const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Paper Texture Gradient -->
    <linearGradient id="paperBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBFBF8" />
      <stop offset="50%" stop-color="#F7F5EE" />
      <stop offset="100%" stop-color="#F3EFE6" />
    </linearGradient>

    <!-- Golden Metallic Gradient -->
    <linearGradient id="garudaGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9A6B1F" />
      <stop offset="30%" stop-color="#D99B26" />
      <stop offset="50%" stop-color="#FEE180" />
      <stop offset="70%" stop-color="#D99B26" />
      <stop offset="100%" stop-color="#7E5312" />
    </linearGradient>

    <!-- Border Ribbon Gradient -->
    <linearGradient id="borderWood" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#462A14" />
      <stop offset="25%" stop-color="#8F6235" />
      <stop offset="50%" stop-color="#5C381A" />
      <stop offset="75%" stop-color="#8F6235" />
      <stop offset="100%" stop-color="#3D2410" />
    </linearGradient>

    <!-- Hologram Multicolored Metallic Reflection -->
    <linearGradient id="holoShine" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#D1D5DB" />
      <stop offset="15%" stop-color="#FEF08A" />
      <stop offset="30%" stop-color="#86EFAC" />
      <stop offset="45%" stop-color="#67E8F9" />
      <stop offset="60%" stop-color="#93C5FD" />
      <stop offset="75%" stop-color="#F472B6" />
      <stop offset="90%" stop-color="#FDE047" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>

    <!-- Detailed Official Garuda Pancasila Def -->
    <g id="garudaOfficial">
      <!-- 17 Golden Wing Feathers Left -->
      <path d="M 0 -18 C -14 -32, -36 -28, -50 -10 C -42 -8, -32 -8, -26 4 C -38 0, -48 14, -38 28 C -26 22, -18 24, -14 30 C -22 36, -20 48, -4 44 C -2 40, -2 36, 0 34" fill="url(#garudaGold)" stroke="#6B4413" stroke-width="0.8" />
      <!-- 17 Golden Wing Feathers Right -->
      <path d="M 0 -18 C 14 -32, 36 -28, 50 -10 C 42 -8, 32 -8, 26 4 C 38 0, 48 14, 38 28 C 26 22, 18 24, 14 30 C 22 36, 20 48, 4 44 C 2 40, 2 36, 0 34" fill="url(#garudaGold)" stroke="#6B4413" stroke-width="0.8" />
      
      <!-- Tail Feathers (8) -->
      <path d="M -12 36 C -18 52, -10 66, 0 68 C 10 66, 18 52, 12 36 Z" fill="url(#garudaGold)" stroke="#6B4413" stroke-width="0.7" />

      <!-- Head with Golden Crown turning right -->
      <circle cx="0" cy="-24" r="8" fill="url(#garudaGold)" stroke="#6B4413" stroke-width="0.7" />
      <path d="M 0 -32 C 6 -32, 8 -24, 6 -20" fill="url(#garudaGold)" stroke="#6B4413" stroke-width="0.7" />
      <!-- Golden Beak facing right -->
      <polygon points="4,-26 14,-23 4,-20" fill="#B45309" stroke="#78350F" stroke-width="0.4" />
      <circle cx="2" cy="-25" r="1" fill="#111827" />

      <!-- Golden Talons holding ribbon -->
      <ellipse cx="-16" cy="46" rx="4" ry="2.5" fill="#B45309" />
      <ellipse cx="16" cy="46" rx="4" ry="2.5" fill="#B45309" />

      <!-- White Ribbon with "BHINNEKA TUNGGAL IKA" -->
      <path d="M -30 46 Q 0 52 30 46 L 28 53 Q 0 57 -28 53 Z" fill="#FFFFFF" stroke="#334155" stroke-width="0.8" />
      <text x="0" y="52" font-family="'Times New Roman', serif" font-size="4" font-weight="bold" fill="#0F172A" text-anchor="middle" letter-spacing="0.4">BHINNEKA TUNGGAL IKA</text>

      <!-- Center Heraldic Shield (Perisai Pancasila) -->
      <path d="M -18 -12 L 18 -12 L 18 10 C 18 24, 0 32, 0 32 C 0 32, -18 24, -18 10 Z" fill="#B91C1C" stroke="#0F172A" stroke-width="1.4" />
      <!-- White quadrants (top-right & bottom-left) -->
      <path d="M 0 -12 L 18 -12 L 18 10 C 18 13.5, 17 17, 15.5 20 L 0 20 Z" fill="#F8FAFC" />
      <path d="M -18 10 L 0 10 L 0 32 C 0 32, -18 24, -18 10 Z" fill="#F8FAFC" />
      <!-- Dividing crossbar -->
      <line x1="-18" y1="10" x2="18" y2="10" stroke="#0F172A" stroke-width="1.6" />
      <line x1="0" y1="-12" x2="0" y2="32" stroke="#0F172A" stroke-width="1.6" />

      <!-- Five Pancasila Emblems inside shield -->
      <!-- Top Left: Banteng Head -->
      <circle cx="-9" cy="-1" r="3.2" fill="#0F172A" />
      <!-- Top Right: Beringin Tree -->
      <circle cx="9" cy="-1" r="3.2" fill="#15803D" />
      <!-- Bottom Left: Padi & Kapas -->
      <ellipse cx="-9" cy="20" rx="3.5" ry="2" fill="#EAB308" />
      <!-- Bottom Right: Rantai Emas -->
      <circle cx="9" cy="20" r="3" fill="none" stroke="#CA8A04" stroke-width="1" />
      <!-- Center: Golden Star on Black Shield -->
      <rect x="-4.5" y="4.5" width="9" height="11" fill="#0F172A" rx="1" />
      <polygon points="0,5.5 1.5,9 5,9 2.2,11 3.2,14 0,12 -3.2,14 -2.2,11 -5,9 -1.5,9" fill="#FBBF24" />
    </g>
  </defs>

  <!-- Base Paper Texture -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#paperBg)" />

  <!-- Security Guilloche Rosettes & Fine Lines -->
  <g>${centerWatermark}</g>
  <g>${bgFineWaves}</g>

  <!-- Left Ornamental Border -->
  <rect x="0" y="0" width="46" height="${height}" fill="#F4EDE0" />
  <rect x="44" y="0" width="3" height="${height}" fill="url(#borderWood)" />
  <g>${borderLeft}</g>

  <!-- Right Ornamental Border -->
  <rect x="${width - 46}" y="0" width="46" height="${height}" fill="#F4EDE0" />
  <rect x="${width - 47}" y="0" width="3" height="${height}" fill="url(#borderWood)" />
  <g>${borderRight}</g>

  <!-- ==================== TOP CORNERS ==================== -->
  <!-- Top Left: Serial Stamp (Exact 13562747) -->
  <text x="56" y="46" font-family="'Courier New', Courier, monospace" font-size="28" font-weight="900" fill="#1E293B" letter-spacing="1.2">13562747</text>

  <!-- Top Right: Barcode (Exact barcode block) -->
  <g id="barcodeBlock">
    ${barcodeSvg}
  </g>

  <!-- ==================== HEADER: GARUDA & AUTHORITY ==================== -->
  <g transform="translate(400, 102)">
    <use href="#garudaOfficial" transform="scale(1.2)" />
  </g>

  <!-- Authority Header Typography -->
  <text x="400" y="174" font-family="'Arial Black', Arial, Helvetica, sans-serif" font-size="12" font-weight="900" fill="#0F172A" text-anchor="middle" letter-spacing="2.2">BADAN NASIONAL</text>
  <text x="400" y="190" font-family="'Arial Black', Arial, Helvetica, sans-serif" font-size="12" font-weight="900" fill="#0F172A" text-anchor="middle" letter-spacing="2.2">SERTIFIKASI PROFESI</text>
  <text x="400" y="204" font-family="'Times New Roman', Times, serif" font-size="9.5" font-style="italic" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="0.6">INDONESIAN PROFESSIONAL</text>
  <text x="400" y="216" font-family="'Times New Roman', Times, serif" font-size="9.5" font-style="italic" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="0.6">CERTIFICATION AUTHORITY</text>

  <!-- ==================== CERTIFICATE TITLE ==================== -->
  <text x="400" y="254" font-family="Georgia, 'Times New Roman', serif" font-size="27" font-weight="bold" fill="#1E3A8A" text-anchor="middle" letter-spacing="1.2">SERTIFIKAT KOMPETENSI</text>
  <text x="400" y="278" font-family="Georgia, 'Times New Roman', serif" font-size="19.5" font-style="italic" font-weight="bold" fill="#1E3A8A" text-anchor="middle" letter-spacing="0.8">CERTIFICATE OF COMPETENCE</text>

  <!-- Certificate Number -->
  <text x="400" y="312" font-family="Arial, Helvetica, sans-serif" font-size="14.5" font-weight="bold" fill="#0F172A" text-anchor="middle">No. 61929 2166 3 0169986 2026</text>

  <!-- ==================== DECLARATIVE STATEMENT ==================== -->
  <text x="400" y="352" font-family="'Times New Roman', Times, serif" font-size="15.5" fill="#1E293B" text-anchor="middle">Dengan ini menyatakan bahwa,</text>
  <text x="400" y="370" font-family="'Times New Roman', Times, serif" font-size="13.5" font-style="italic" fill="#475569" text-anchor="middle">This is to certify that,</text>

  <!-- ==================== NAME OF HOLDER ==================== -->
  <text x="400" y="420" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="900" fill="#0F172A" text-anchor="middle" letter-spacing="0.4">Muhammad Raihan Firdaus</text>

  <!-- Registration Number -->
  <text x="400" y="458" font-family="Arial, Helvetica, sans-serif" font-size="14.5" font-weight="bold" fill="#0F172A" text-anchor="middle">No. Reg. TIK 1565 54675 2026</text>

  <!-- ==================== COMPETENCY FIELD ==================== -->
  <text x="400" y="496" font-family="'Times New Roman', Times, serif" font-size="15.5" fill="#1E293B" text-anchor="middle">Telah kompeten pada bidang:</text>
  <text x="400" y="514" font-family="'Times New Roman', Times, serif" font-size="13.5" font-style="italic" fill="#475569" text-anchor="middle">Is competent in the area of:</text>

  <text x="400" y="556" font-family="Arial, Helvetica, sans-serif" font-size="19.5" font-weight="900" fill="#0F172A" text-anchor="middle">Pemasaran Digital</text>
  <text x="400" y="578" font-family="Arial, Helvetica, sans-serif" font-size="17" font-style="italic" font-weight="bold" fill="#1E293B" text-anchor="middle">Digital Marketing</text>

  <!-- ==================== QUALIFICATION ==================== -->
  <text x="400" y="622" font-family="'Times New Roman', Times, serif" font-size="15.5" fill="#1E293B" text-anchor="middle">Dengan Kualifikasi / Kompetensi:</text>
  <text x="400" y="640" font-family="'Times New Roman', Times, serif" font-size="13.5" font-style="italic" fill="#475569" text-anchor="middle">With Qualification / Competency:</text>

  <text x="400" y="684" font-family="Arial, Helvetica, sans-serif" font-size="21.5" font-weight="900" fill="#0F172A" text-anchor="middle">Pembuat Konten</text>
  <text x="400" y="708" font-family="Arial, Helvetica, sans-serif" font-size="18.5" font-style="italic" font-weight="bold" fill="#1E293B" text-anchor="middle">Content Creator</text>

  <!-- ==================== VALIDITY ==================== -->
  <text x="400" y="758" font-family="'Times New Roman', Times, serif" font-size="15" fill="#1E293B" text-anchor="middle">Sertifikat ini berlaku untuk: 3 (tiga) tahun</text>
  <text x="400" y="776" font-family="'Times New Roman', Times, serif" font-size="13.5" font-style="italic" fill="#475569" text-anchor="middle">This certificate is valid for: 3 (three) years</text>

  <!-- ==================== DATE & CERTIFICATION BODY ==================== -->
  <text x="480" y="820" font-family="'Times New Roman', Times, serif" font-size="15.5" fill="#0F172A" text-anchor="middle">Yogyakarta, 11 April 2026</text>

  <text x="480" y="844" font-family="'Times New Roman', Times, serif" font-size="15" fill="#1E293B" text-anchor="middle">Atas Nama Badan Nasional Sertifikasi Profesi</text>
  <text x="480" y="860" font-family="'Times New Roman', Times, serif" font-size="13" font-style="italic" fill="#475569" text-anchor="middle">On Behalf of Indonesian Professional Certification Authority</text>

  <text x="480" y="890" font-family="'Times New Roman', Times, serif" font-size="16" font-weight="bold" fill="#0F172A" text-anchor="middle">Lembaga Sertifikasi Profesi Teknologi Digital</text>
  <text x="480" y="908" font-family="'Times New Roman', Times, serif" font-size="13.5" font-style="italic" fill="#334155" text-anchor="middle">Professional Certification Body of Digital Technology</text>

  <!-- ==================== BOTTOM SIGNATURE, LSP LOGO, HOLOGRAM ==================== -->
  <!-- LSP Logo & Signature of Gunawan Ramli, M.Kom. -->
  <g id="signatureArea" transform="translate(305, 960)">
    <!-- LSP TEKNOLOGI DIGITAL Circular Gear Emblem -->
    <g transform="translate(0, -12)">
      <!-- Outer teal circular dashes -->
      <circle cx="0" cy="0" r="32" fill="none" stroke="#0D9488" stroke-width="2.6" stroke-dasharray="7 3.5" />
      <path d="M -16 -6 Q -4 -26 14 -14 Q 24 2 8 16" fill="none" stroke="#0D9488" stroke-width="3" />
      <path d="M -10 6 Q 0 22 18 12" fill="none" stroke="#10B981" stroke-width="2.5" />
      <text x="0" y="-4" font-family="Arial, sans-serif" font-size="7" font-weight="bold" fill="#0F766E" text-anchor="middle">LSP</text>
      <text x="0" y="3" font-family="Arial, sans-serif" font-size="4" font-weight="bold" fill="#0F766E" text-anchor="middle">TEKNOLOGI</text>
      <text x="0" y="8" font-family="Arial, sans-serif" font-size="4" font-weight="bold" fill="#0F766E" text-anchor="middle">DIGITAL</text>
    </g>

    <!-- Blue Wet Ink Authentic Signature -->
    <g transform="translate(20, -5)">
      <path d="M 0 -22 C 12 -42, 28 -8, 38 -26 C 46 -36, 52 -10, 64 -22 C 78 -10, 92 -34, 102 -16 Q 112 4 82 2 T 48 -2 C 68 12, 88 4, 112 8" fill="none" stroke="#1D4ED8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.92" />
      <path d="M 18 -8 Q 62 -12 118 -4" fill="none" stroke="#1E40AF" stroke-width="2" stroke-linecap="round" opacity="0.88" />
    </g>

    <!-- Signatory Name and Title -->
    <text x="80" y="14" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="bold" fill="#0F172A" text-anchor="middle">Gunawan Ramli, M.Kom.</text>
    <text x="80" y="32" font-family="'Times New Roman', Times, serif" font-size="13.5" font-style="italic" fill="#334155" text-anchor="middle">(Direktur / Director)</text>
  </g>

  <!-- BNSP Official Holographic Security Sticker (Exact 3D Gold/Rainbow Foil) -->
  <g id="bnspFoilHologram" transform="translate(635, 955)">
    <!-- Base Foil -->
    <rect x="-70" y="-36" width="140" height="72" rx="4" fill="url(#holoShine)" stroke="#475569" stroke-width="1.2" opacity="0.95" />
    <rect x="-66" y="-32" width="132" height="64" rx="3" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.8" />

    <!-- Holographic Micro-Pattern Lines -->
    <text x="0" y="-22" font-family="Arial, sans-serif" font-size="5" font-weight="bold" fill="#1E293B" opacity="0.45" text-anchor="middle" letter-spacing="0.5">BADAN NASIONAL SERTIFIKASI PROFESI</text>
    <text x="0" y="26" font-family="Arial, sans-serif" font-size="4.8" font-weight="bold" fill="#1E293B" opacity="0.45" text-anchor="middle" letter-spacing="0.4">INDONESIAN PROFESSIONAL CERTIFICATION</text>

    <!-- Mini Central Garuda Foil Watermark -->
    <use href="#garudaOfficial" transform="translate(0, -6) scale(0.38)" opacity="0.4" />

    <!-- 3D Hologram BNSP Text with Prismatic Depth -->
    <text x="-1" y="8" font-family="'Arial Black', Impact, sans-serif" font-size="31" font-weight="900" fill="#0F172A" opacity="0.3" text-anchor="middle" letter-spacing="2">BNSP</text>
    <text x="1" y="6" font-family="'Arial Black', Impact, sans-serif" font-size="31" font-weight="900" fill="#FFFFFF" opacity="0.75" text-anchor="middle" letter-spacing="2">BNSP</text>
    <text x="0" y="7" font-family="'Arial Black', Impact, sans-serif" font-size="31" font-weight="900" fill="#1E293B" opacity="0.85" text-anchor="middle" letter-spacing="2">BNSP</text>
  </g>

</svg>`;

fs.writeFileSync('public/bnsp_certificate.svg', svgContent);
fs.writeFileSync('public/bnsp_certificate.jpg', svgContent); // in case referenced as jpg or svg
console.log('SVG certificate successfully updated to public/bnsp_certificate.svg');
