const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src', '1.jpg');
const BAK = SRC + '.bak55';

const svg = Buffer.from(
  `<svg width="240" height="180" xmlns="http://www.w3.org/2000/svg">` +
  `<rect width="240" height="180" fill="white"/>` +
  `<text x="5" y="150" font-family="Roboto, Arial, sans-serif" font-size="160" font-weight="900" fill="#22A852" letter-spacing="-5">56</text>` +
  `</svg>`
);

(async () => {
  const exists = fs.existsSync(BAK);
  console.log('bak exists:', exists, BAK);
  const source = exists ? BAK : SRC;
  await sharp(source)
    .composite([{ input: svg, left: 580, top: 60 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(SRC + '.new.jpg');
  fs.renameSync(SRC + '.new.jpg', SRC);
  console.log('1.jpg updated');

  await sharp(SRC).webp({ quality: 80, effort: 5 }).toFile(path.join(path.dirname(SRC), '1.webp'));
  await sharp(SRC).avif({ quality: 55, effort: 5 }).toFile(path.join(path.dirname(SRC), '1.avif'));
  console.log('webp + avif regenerated');
})().catch((e) => { console.error(e); process.exit(1); });
