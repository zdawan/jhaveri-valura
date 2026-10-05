import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Portfolio Analysis & Ledger",
    desc: "Track funds movement, real-time P&L, time-weighted returns, and risk metrics with an integrated multi-currency ledger.",
    id: "portfolio",
  },
  {
    title: "KYC & LRS Compliance",
    desc: "Control and optimize authorizations with automated spend rules, instant paperless document verification, and velocity controls.",
    id: "kyc",
  },
  {
    title: "Multi-Currency Bank Accounts",
    desc: "Approve or decline each transaction based on your business logic with collaborative auth and direct GIFT City settlement.",
    id: "bank",
  },
];

const CoreExpertise = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % capabilities.length);
    }, 3000); // Auto move to next tab every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-6 py-24 lg:py-32 md:px-10 text-gray-900 border-b border-gray-100 relative overflow-hidden">
      <div className="mx-auto max-w-[1320px]">
        {/* Section Header (Matching Techlair layout) */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-12 max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0054A1]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#0054A1]"
            >
              <path
                d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z"
                fill="currentColor"
              />
            </svg>
            <span>Core Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#3C3C43] leading-[1.08]">
            End-to-End Wealth <br className="hidden sm:inline" />
            <span className="text-[#0054A1]">Capabilities</span>
          </h2>
        </motion.div>

        {/* ========================================================================= */}
        {/* TECHLAIR SPLIT SHOWCASE: ACCORDION LEFT + DYNAMIC FRAME RIGHT */}
        {/* ========================================================================= */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left Accordion List */}
          <div className="flex flex-col justify-center space-y-3">
            {capabilities.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={index}
                  className="border-b border-gray-200/90 pb-4 pt-1 transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className="w-full text-left focus:outline-none group"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                          isActive
                            ? "text-[#111111]"
                            : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`text-sm font-semibold transition-transform duration-300 ${
                          isActive ? "text-[#0054A1] rotate-90" : "text-gray-300"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[480px] text-sm md:text-base leading-relaxed text-gray-600 font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Frame Preview */}
          <div className="relative flex w-full h-[380px] sm:h-[460px] lg:h-[540px] items-center justify-center rounded-[28px] overflow-hidden shadow-xl border border-blue-200/60 transition-all duration-500 bg-[#E0EFFF]">
            {activeTab === 0 && (
              <img 
                src="/img01.png" 
                alt="Portfolio Analysis" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" 
              />
            )}
            {activeTab === 1 && (
              <img 
                src="/img02.png" 
                alt="Your KYC Documents" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" 
              />
            )}
            {activeTab === 2 && (
              <img 
                src="/img03.png" 
                alt="My Bank Accounts" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" 
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreExpertise;
