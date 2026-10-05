const fs = require('fs');

function animateCoreExpertise() {
  const p = 'src/components/CoreExpertise.js';
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace('import React, { useState, useEffect } from "react";', 'import React, { useState, useEffect } from "react";\nimport { motion } from "framer-motion";');
  
  content = content.replace(
    '<div className="mb-12 max-w-3xl mx-auto flex flex-col items-center text-center">',
    '<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-12 max-w-3xl mx-auto flex flex-col items-center text-center">'
  );
  content = content.replace(
    '</h2>\n        </div>',
    '</h2>\n        </motion.div>'
  );

  content = content.replace(
    '<div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">',
    '<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">'
  );
  content = content.replace(
    '</div>\n        </div>\n      </div>\n    </section>',
    '</div>\n        </motion.div>\n      </div>\n    </section>'
  );

  fs.writeFileSync(p, content);
}

function animateMetrics() {
  const p = 'src/components/Metrics.js';
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace('import React from "react";', 'import React from "react";\nimport { motion } from "framer-motion";');
  
  content = content.replace(
    '<div className="mb-12 max-w-3xl mx-auto flex flex-col items-center text-center">',
    '<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-12 max-w-3xl mx-auto flex flex-col items-center text-center">'
  );
  content = content.replace(
    '</h2>\n                </div>',
    '</h2>\n                </motion.div>'
  );
  
  content = content.replace(
    '<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">',
    '<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">'
  );
  content = content.replace(
    '</div>\n\n            </div>\n        </section>',
    '</motion.div>\n\n            </div>\n        </section>'
  );
  fs.writeFileSync(p, content);
}

animateCoreExpertise();
animateMetrics();
console.log('done');
