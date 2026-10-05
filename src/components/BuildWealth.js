import React from "react";

const BuildWealth = () => {
  const availableLogos = [
    { name: 'Logo 1', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDynGPaCgkV4l3lASev0jMLr7K3H0cBUARFw_EJHELqw&s=10' },
    { name: 'Logo 2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2maequzI82hUSoPRUxSXEbzvxsF1HxewtRK4Kg9VSg&s=10' },
    { name: 'Logo 3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Fntf96lQ62HcDwXxnwgpwl8NnY43hqzLYneFZVh0Qw&s=10' },
    { name: 'Logo 4', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS343miPPSiLtgRvyaHhdpvZ9erCjMjOsxaT2XZ1lVU9g&s=10' },
    { name: 'Logo 5', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWxCmtsGndQQll-fjsfBVa7BX4QhzItFBgDj9nVNiTA&s=10' },
    { name: 'Logo 6', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0LqqItjj6kjPy2bhfx_Cs3kIqIEesiN8aMbEXoL-zw&s' },
    { name: 'Logo 7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHX_9JpuNVYmwV13Ee8xHaVEGpJRFk167FuY4DmxMUA&s=10' },
    { name: 'Logo 8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpX6LLQ-9ZQ1Cr8B42xUu30zZS3jD_W_qP6m3qHTPWQ&s=10' },
    { name: 'Logo 9', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pnrvYmOf6Kh2y1Rx6DCkvQerFwAyiv5kPIw2JbNQjA&s=10' }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Header Content */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3C3C43] tracking-tight">
          Build your global allocation, your way.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-medium">
          US equities, USD income notes, and Pre-IPO deals — all unified in one global dashboard.
        </p>
        <button className="mt-8 rounded-full border-2 border-[#EE396A] bg-transparent px-8 py-3.5 text-[#EE396A] font-bold hover:bg-[#EE396A] hover:text-white transition-all text-sm md:text-base shadow-sm">
          See all features
        </button>

        {/* Grid Animation Container */}
        <div className="relative mt-16 md:mt-24 w-full h-[450px] md:h-[550px] group">

          {/* 16x9 Cell Grid Background */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1024px] h-[576px] grid z-0"
            style={{
              gridTemplateColumns: 'repeat(16, 64px)',
              gridTemplateRows: 'repeat(9, 64px)',
              maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)'
            }}
          >
            {Array.from({ length: 144 }).map((_, i) => {
              const hov = availableLogos[i % availableLogos.length];

              return (
                <div key={i} className="border-r border-b border-gray-200 relative group/cell">
                  {/* Hover Reveal Logo */}
                  {hov && (
                    <div className="absolute inset-[2px] flex items-center justify-center bg-white shadow-sm rounded-md opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 cursor-default overflow-hidden border border-gray-100">
                      <img
                        src={hov.img}
                        alt={hov.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <span className="hidden text-[9px] font-bold text-gray-800 text-center leading-tight">{hov.name}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Central Card Mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] md:w-[340px] bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 text-left hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-[#0054A1]/10 rounded-xl flex items-center justify-center relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0054A1]">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 leading-tight">India Hybrid Fund</h4>
                <p className="text-[11px] text-gray-500 font-medium mt-1">Medium risk • Hybrid • Large Cap</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-2xl font-bold text-[#0054A1]">16.32% <span className="text-[11px] text-gray-400 font-normal">3Y annualised</span></div>
              <div className="text-sm font-semibold text-[#0054A1]">+0.55% <span className="text-gray-400 font-normal text-[11px]">1D</span></div>
            </div>

            {/* SVG Chart Line */}
            <svg className="w-full h-32 md:h-40" viewBox="0 0 200 100" preserveAspectRatio="none">
              <polyline
                points="0,80 20,85 40,70 60,75 80,50 100,55 120,40 140,25 150,30 160,10 180,25 200,5"
                fill="none"
                stroke="#0054A1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="0,100 0,80 20,85 40,70 60,75 80,50 100,55 120,40 140,25 150,30 160,10 180,25 200,5 200,100"
                fill="url(#chartGradient)"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0054A1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex justify-between text-[11px] text-gray-400 font-semibold mt-4 mb-6 px-1">
              <span>1M</span><span>6M</span><span>1Y</span><span className="text-gray-800 border border-gray-300 rounded-full px-2.5 py-0.5">3Y</span><span>5Y</span><span>All</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <button className="py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-[#3C3C43] hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm">Compare</button>
              <button className="py-2.5 rounded-full bg-[#EE396A] text-white text-sm font-semibold hover:bg-[#D62955] transition-all shadow-sm">Invest Now</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BuildWealth;
