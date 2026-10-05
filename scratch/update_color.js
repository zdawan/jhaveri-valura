const fs = require('fs');
const files = [
  'src/components/Hero.js',
  'src/components/Navbar.js',
  'src/components/BuildWealth.js',
  'src/components/ContactUs.js'
];

files.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/#ED1651/gi, '#EE396A');
  content = content.replace(/#D61348/gi, '#D62955'); // Hover color
  content = content.replace(/237,22,81/gi, '238,57,106'); // RGB for shadow in ContactUs
  fs.writeFileSync(p, content);
});
console.log('Colors updated');
