const fs = require('fs');
const p = 'src/components/Hero.js';
let content = fs.readFileSync(p, 'utf8');

// Replace import
content = content.replace('import React from "react";', 'import React from "react";\nimport { motion } from "framer-motion";');

// Replace Badge
content = content.replace(
  '<div className="inline-flex items-center gap-2 rounded-full border border-[#0054A1]/15 bg-blue-50/60 px-4 py-1.5 text-xs font-semibold text-[#0054A1] sm:text-sm">',
  '<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="inline-flex items-center gap-2 rounded-full border border-[#0054A1]/15 bg-blue-50/60 px-4 py-1.5 text-xs font-semibold text-[#0054A1] sm:text-sm">'
);
content = content.replace(
  '<span>Jhaveri Securities × Valura.Ai</span>\n          </div>',
  '<span>Jhaveri Securities × Valura.Ai</span>\n          </motion.div>'
);

// Replace Title
content = content.replace(
  '<h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#3C3C43] leading-[1.15] sm:leading-[1.15]">',
  '<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#3C3C43] leading-[1.15] sm:leading-[1.15]">'
);
content = content.replace(
  '<span className="text-[#0054A1]">for Indian Investors</span>\n          </h1>',
  '<span className="text-[#0054A1]">for Indian Investors</span>\n          </motion.h1>'
);

// Replace Subtitle
content = content.replace(
  '<p className="mx-auto mt-5 max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">',
  '<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="mx-auto mt-5 max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">'
);
content = content.replace(
  'manage by the same team you trust.\n          </p>',
  'manage by the same team you trust.\n          </motion.p>'
);
// Wait, the text is: 'deals — from India, regulated through GIFT IFSC, managed by the same team you trust.'
content = content.replace(
  'managed by the same team you trust.\n          </p>',
  'managed by the same team you trust.\n          </motion.p>'
);

// Replace CTAs container
content = content.replace(
  '<div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">',
  '<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">'
);
content = content.replace(
  '</svg>\n            </a>\n          </div>',
  '</svg>\n            </a>\n          </motion.div>'
);

// Replace Dashboard Image
content = content.replace(
  '<div className="relative mt-8 sm:mt-10 mx-auto w-full max-w-6xl">',
  '<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="relative mt-8 sm:mt-10 mx-auto w-full max-w-6xl">'
);
content = content.replace(
  '<div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 sm:h-48 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/85 via-60% to-transparent" />\n            </div>\n          </div>\n        </div>',
  '<div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 sm:h-48 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/85 via-60% to-transparent" />\n            </div>\n          </div>\n        </motion.div>'
);

fs.writeFileSync(p, content);
console.log('Hero animations added');
