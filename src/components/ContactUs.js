import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-[#1C3345] px-6 sm:px-10 py-24 lg:py-32 text-white relative">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#2D5676]/60 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z" />
            </svg>
            OPEN AN ACCOUNT
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold leading-[1.15] tracking-tight mb-6 text-white">
            Fully digital, regulated in India, your money custodied in India.
          </h2>

          <p className="text-[#9CB3C9] text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-lg">
            Leave your details and a Jhaveri × Valura specialist takes it from there. The entire process — KYC, account funding, and first trade — takes under 30 minutes.
          </p>

          <div className="space-y-5">
            {[
              "Paperless KYC in minutes",
              "Start from $3,000 — invest in fractions",
              "No foreign bank account needed",
              "Tax & LRS reporting handled for you"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#00D09C] flex-shrink-0">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white font-medium text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:ml-auto w-full max-w-[460px]">
          <div className="bg-[#0b0c10] rounded-[24px] p-8 md:p-10 shadow-2xl relative overflow-hidden">

            {/* Top-Left Blue Glow */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#0274F5]/65 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Top-Right Light Blue Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#70A5F5]/45 blur-[80px] rounded-full pointer-events-none"></div>

            <h3 className="text-[28px] font-bold mb-8 leading-tight text-white relative z-10">Open your global account</h3>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-white mb-2">Full name</label>
                <input
                  type="text"
                  placeholder="As per Govt. ID"
                  className="w-full bg-white text-gray-900 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-2">Mobile</label>
                <input
                  type="tel"
                  placeholder="+91 Phone number"
                  className="w-full bg-white text-gray-900 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-white text-gray-900 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-2">I am a</label>
                <select className="w-full bg-white text-gray-900 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010L12%2015L17%2010%22%20stroke%3D%22%23111111%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:24px] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>Individual Investor</option>
                  <option>Corporate Entity</option>
                  <option>HNI / Family Office</option>
                </select>
              </div>

              <button className="w-full bg-[#2E68FF] hover:bg-[#2554E6] transition-colors text-white font-bold text-[15px] py-4 rounded-lg mt-4 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(46,104,255,0.39)]">
                Contact us <span>→</span>
              </button>

              <p className="text-[10px] text-[#6B7A8A] text-center mt-6 leading-relaxed px-2">
                By submitting this form you agree to our Terms of Service and Privacy Policy. Jhaveri × Valura.AI is regulated through GIFT IFSC. Investments are subject to market risks. Please read all product documents carefully.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
