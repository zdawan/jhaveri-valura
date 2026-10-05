const fs = require('fs');
const css = fs.readFileSync('C:\\Users\\H O ME - J D K\\.gemini\\antigravity-ide\\brain\\21c722de-4da9-49ff-9e88-fcf8a52fdc23\\.system_generated\\steps\\1163\\content.md', 'utf8');

const regex = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\b/g;
const matches = css.match(regex);
const counts = {};
if (matches) {
  matches.forEach(m => {
    const color = m.toLowerCase();
    counts[color] = (counts[color] || 0) + 1;
  });
}
const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
console.log(sorted.slice(0, 20));
