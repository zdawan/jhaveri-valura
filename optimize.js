const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  try {
    console.log('Optimizing dashboard...');
    await sharp(path.join(publicDir, 'dashboard.jpg'))
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(publicDir, 'dashboard.webp'));
      
    for (let i = 1; i <= 3; i++) {
      console.log(`Optimizing img0${i}...`);
      await sharp(path.join(publicDir, `img0${i}.png`))
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(publicDir, `img0${i}.webp`));
    }
    
    console.log('Optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
