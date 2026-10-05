const fs = require('fs');
const p = 'src/components/Metrics.js';
let content = fs.readFileSync(p, 'utf8');

const lines = content.split('\n');

const svg1Lines = lines.slice(47, 70).join('\n');
const svg2Lines = lines.slice(70, 118).join('\n');

const newObj = `    {
        title: "4,000+",
        description: "US stocks & ETFs, fractional",
        customRender: () => (
            <div className="flex h-[260px] sm:h-[280px] w-full flex-col items-center justify-between rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-7 group">
                <div className="text-center w-full">
                    <h3 className="text-4xl sm:text-[42px] md:text-5xl font-medium tracking-[-0.02em] text-[#111111]">
                        4,000+
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-normal leading-[1.5] text-[#8E9398]">
                        US stocks &amp; ETFs, fractional
                    </p>
                </div>
                
                <div className="flex gap-4 sm:gap-6 items-center justify-center w-full grow mt-4">
                    <div className="group/item flex flex-col items-center relative cursor-pointer">
${svg1Lines}
                        <span className="absolute -bottom-8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-xs font-medium text-[#0054A1] whitespace-nowrap bg-[#E9F5FA] px-3 py-1 rounded-full shadow-sm pointer-events-none z-10">
                            US Stocks
                        </span>
                    </div>
                    <div className="group/item flex flex-col items-center relative cursor-pointer">
${svg2Lines}
                        <span className="absolute -bottom-8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-xs font-medium text-[#0054A1] whitespace-nowrap bg-[#E9F5FA] px-3 py-1 rounded-full shadow-sm pointer-events-none z-10">
                            Global ETFs
                        </span>
                    </div>
                </div>
            </div>
        )
    },`;

// Replace from index 44 to 122 (inclusive)
lines.splice(44, 79, newObj);

// Update MetricCard
const metricCardStart = lines.findIndex(l => l.includes('function MetricCard({ metric }) {'));
if (metricCardStart !== -1) {
    if (!lines.join('\n').includes('if (metric.customRender)')) {
        lines.splice(metricCardStart + 1, 0, '    if (metric.customRender) {', '        return metric.customRender();', '    }');
    }
}

fs.writeFileSync(p, lines.join('\n'));
console.log('Successfully updated the 4000+ metric');
