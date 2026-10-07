const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const srcDir = path.join(__dirname, '..', 'src');

// All files to check in public
const allPublicFiles = fs.readdirSync(publicDir);

// Allowed exceptions (these might not be explicitly referenced in js but are used by browser/build)
const keepFiles = ['index.html', 'manifest.json', 'robots.txt', 'favicon.ico', 'wordmark.png', 'logo192.png', 'logo512.png'];

// We need all content to check if a string is present
function getAllFilesContext(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFilesContext(filePath, filesList);
    } else {
      filesList.push(filePath);
    }
  }
  return filesList;
}

const allCodeFiles = [
  ...getAllFilesContext(srcDir),
  path.join(publicDir, 'index.html')
];

let fullContext = '';
allCodeFiles.forEach(f => {
  fullContext += fs.readFileSync(f, 'utf8') + '\n';
});

const unusedFiles = [];

for (const file of allPublicFiles) {
  if (keepFiles.includes(file)) continue; // We know we need these
  
  if (!fullContext.includes(file)) {
    unusedFiles.push(file);
  }
}

console.log('Unused files to be removed:', unusedFiles);

// Remove them
unusedFiles.forEach(f => {
  fs.unlinkSync(path.join(publicDir, f));
});

console.log('Done removing unused files.');
