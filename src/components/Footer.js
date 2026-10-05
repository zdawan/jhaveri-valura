import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#A1A1AA] overflow-hidden relative font-sans">
      
      {/* Top Marquee Strip */}
      <div className="w-full bg-[#0054A1] overflow-hidden py-6 border-y border-[#0054A1]/80">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* We repeat the content to create a seamless scroll */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-white font-bold tracking-widest text-lg md:text-2xl uppercase">Paperless KYC</span>
              <span className="text-white/70 text-base md:text-xl">✦</span>
              <span className="text-white font-bold tracking-widest text-lg md:text-2xl uppercase">Global Investing</span>
              <span className="text-white/70 text-base md:text-xl">✦</span>
              <span className="text-white font-bold tracking-widest text-lg md:text-2xl uppercase">AI Powered</span>
              <span className="text-white/70 text-base md:text-xl">✦</span>
              <span className="text-white font-bold tracking-widest text-lg md:text-2xl uppercase">India Regulated</span>
              <span className="text-white/70 text-base md:text-xl">✦</span>
              <span className="text-white font-bold tracking-widest text-lg md:text-2xl uppercase">GIFT IFSC</span>
              <span className="text-white/70 text-base md:text-xl">✦</span>
              <span className="text-white font-bold tracking-widest text-lg md:text-2xl uppercase">SEBI Regulated</span>
              <span className="text-white/70 text-base md:text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-8 relative z-10">
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6">Platform</h4>
            <ul className="space-y-4 text-sm md:text-base font-medium">
              <li><a href="/" className="hover:text-white transition-colors">Markets</a></li>
              <li><a href="/" className="hover:text-white transition-colors">AlphaNest</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Income Notes</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Pre-IPO</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm md:text-base font-medium">
              <li><a href="/" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6">Legal & Compliance</h4>
            <ul className="space-y-4 text-sm md:text-base font-medium">
              <li><a href="/" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Risk Disclosure</a></li>
              <li><a href="/" className="hover:text-white transition-colors">GIFT IFSC Licence</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Grievance Redressal</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6">Resources</h4>
            <ul className="space-y-4 text-sm md:text-base font-medium">
              <li><a href="/" className="hover:text-white transition-colors">Help Centre</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Onboarding Guide</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Fee Schedule</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Research Reports</a></li>
              <li><a href="/" className="hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:ml-auto w-full max-w-[380px]">
            <h4 className="text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6">Stay Updated</h4>
            <div className="flex bg-[#111113] rounded-full p-1.5 mb-5 border border-gray-800">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent text-white px-5 py-3 text-sm md:text-base w-full focus:outline-none placeholder:text-gray-600"
              />
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors whitespace-nowrap min-w-[140px]">
                Subscribe <span className="text-lg leading-none">→</span>
              </button>
            </div>
            <p className="text-xs text-[#52525B] leading-relaxed">
              You'll receive occasional emails from Jhaveri. You always have the choice to unsubscribe within every email.
            </p>
          </div>
        </div>

        <hr className="border-[#1e1e24] mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm text-[#A1A1AA] mb-2 font-medium">
              © 2025 Jhaveri Financial Advisors × Valura.AI Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-[11px] md:text-xs text-[#52525B] leading-relaxed">
              Investments through this platform are subject to market risk. GIFT IFSC regulated. Read all product-related documents carefully before investing.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-medium text-[#A1A1AA]">
            <a href="/" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/" className="hover:text-white transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </div>

      {/* Massive Background Text and Subtle Wave Glow */}
      <div className="relative mt-8 overflow-hidden h-[180px] md:h-[220px] flex items-end justify-center pointer-events-none select-none">
        
        {/* Subtle Blue Glow / Wave equivalent */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[120px] md:h-[150px] bg-[#0274F5]/10 blur-[100px] rounded-[100%] z-0"></div>
        <div className="absolute bottom-[20%] left-1/4 w-[50%] h-[80px] bg-[#0274F5]/5 blur-[80px] rounded-[100%] z-0 transform rotate-12"></div>
        
        {/* Massive Text */}
        <div className="absolute bottom-[-10%] md:bottom-[-20%] font-black text-[#15151a] text-[130px] sm:text-[180px] md:text-[240px] lg:text-[280px] tracking-tighter leading-none whitespace-nowrap z-10">
          JHAVERI
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
