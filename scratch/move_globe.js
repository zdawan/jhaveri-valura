const fs = require('fs');
const p = 'src/components/Metrics.js';
const content = fs.readFileSync(p, 'utf8');
const lines = content.split('\n');

// The globe SVG is lines 36 to 70 (0-indexed array)
const globeSVG = lines.slice(36, 71).join('\n');

// Remove the globe from the 2nd metric by finding its index
let newLines = [...lines];
newLines.splice(36, 35); // Remove 35 lines starting at index 36

let newContent = newLines.join('\n');

// Replace team.svg with globeSVG
const targetStr = '<img src="/team.svg" alt="30+" className="h-[68px] w-[68px] sm:h-[76px] sm:w-[76px] object-contain" />';
newContent = newContent.replace(targetStr, globeSVG);

fs.writeFileSync(p, newContent);
console.log('Successfully moved globe');
