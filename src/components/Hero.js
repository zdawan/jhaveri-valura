import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] sm:min-h-screen flex-col justify-between overflow-hidden bg-[#FAF9F6] pt-6 sm:pt-10">
      {/* Background Soft Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0054A1]/10 via-blue-50/20 to-transparent blur-3xl" />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between px-5 sm:px-8 lg:px-10">
        {/* Top Text Content Area */}
        <div className="mx-auto max-w-4xl pt-2 text-center sm:pt-4">
          {/* Top Badge Tag */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="inline-flex items-center gap-2 rounded-full border border-[#0054A1]/15 bg-blue-50/60 px-4 py-1.5 text-xs font-semibold text-[#0054A1] sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0054A1] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0054A1]" />
            </span>
            <span>Jhaveri Securities × Valura.Ai</span>
          </motion.div>

          {/* Main Title (Centered) */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#3C3C43] leading-[1.15] sm:leading-[1.15]">
            The Global Investment Desk <br className="hidden sm:inline" />
            <span className="text-[#0054A1]">for Indian Investors</span>
          </motion.h1>

          {/* Supporting Subtitle (Centered) */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="mx-auto mt-5 max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Access 4,000+ US equities, 5–9% USD income notes, and curated pre-IPO deals — from India, regulated through GIFT IFSC, managed by the same team you trust.
          </motion.p>

          {/* Two CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA */}
            <a
              href="#open-account"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#EE396A] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#EE396A]/25 transition-all duration-200 hover:bg-[#D62955] hover:shadow-xl hover:shadow-[#EE396A]/35 hover:-translate-y-0.5 sm:w-auto"
            >
              <span>Open an Account</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {/* Secondary CTA */}
            <a
              href="#features"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-black hover:-translate-y-0.5 sm:w-auto"
            >
              <span>Explore Markets</span>
              <svg
                className="h-4 w-4 text-gray-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Dashboard Image Mockup Pinned & Clipped at 100% Height */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="relative mt-8 sm:mt-10 mx-auto w-full max-w-6xl">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#0054A1]/15 via-[#05A049]/15 to-[#0054A1]/15 opacity-60 blur-2xl" />

          {/* Image Container Card */}
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-t-2xl sm:rounded-t-3xl border border-b-0 border-gray-200/90 bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,84,161,0.14)] sm:p-3.5 max-h-[38vh] sm:max-h-[44vh] md:max-h-[48vh]">
            <div className="relative h-full overflow-hidden rounded-t-xl sm:rounded-t-2xl">
              {/* Top light fade so image emerges out */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-[#FAF9F6]/70 via-[#FAF9F6]/20 to-transparent" />

              <img
                src="/dashboard.jpg"
                alt="Jhaveri Securities × Valura.Ai Dashboard"
                className="h-auto w-full object-cover object-top"
              />

              {/* Bottom gradient fade overlay on image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 sm:h-48 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/85 via-60% to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL TO EXPLORE INDICATOR AT BOTTOM OF SCREEN */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 z-30 -translate-x-1/2">
        <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#111111]">
          <span className="h-[2px] w-5 rounded-full bg-[#111111] animate-pulse" />
          <span className="uppercase text-[#111111]">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
