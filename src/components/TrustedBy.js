import React from "react";

const partners = [
  {
    src: "/sebi.svg",
    alt: "SEBI",
    label: "SEBI Registered",
    heightClass: "h-16 sm:h-22 lg:h-28",
  },
  {
    src: "/amfi.svg",
    alt: "AMFI",
    label: "AMFI Registered",
    heightClass: "h-16 sm:h-22 lg:h-28",
  },
  {
    src: "/cdsl.svg",
    alt: "CDSL",
    label: "CDSL Depository",
    heightClass: "h-15 sm:h-20 lg:h-26",
  },
  {
    textIcon: "418+",
    label: "Authorised Persons",
    heightClass: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#0054A1]",
  },
  {
    textIcon: "IN",
    label: "PAN-India presence",
    heightClass: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#0054A1]",
  },
  {
    src: "/aam.png",
    alt: "Asia Asset Mgmt.",
    label: "Asia Asset Mgmt.",
    heightClass: "h-14 sm:h-18 lg:h-24",
  },
  {
    src: "/morningstar.svg",
    alt: "Morningstar",
    label: "Morningstar 5★ History",
    heightClass: "h-12 sm:h-16 lg:h-20",
  },
  {
    src: "/nse.svg",
    alt: "NSE",
    label: "NSE Member",
    heightClass: "h-14 sm:h-18 lg:h-24",
  },
  {
    src: "/bse.png",
    alt: "BSE",
    label: "BSE Member",
    heightClass: "h-14 sm:h-18 lg:h-24",
  },
];

const TrustedBy = () => {
  // Dual duplication for seamless infinite loop (0% to -50%)
  const marqueeList = [...partners, ...partners];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-y border-gray-200/90 shadow-sm relative overflow-hidden">
      {/* Title INSIDE the Full-width White Container */}
      <p className="text-center text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-8 sm:mb-12">
        Trusted By Investors Across India
      </p>

      {/* Content Row: Fixed Left Lineage Badge + Infinite Scrolling Track */}
      <div className="relative flex items-center w-full">
        {/* Left Fixed Lineage Text Block */}
        <div className="hidden md:flex shrink-0 items-center pl-8 sm:pl-12 pr-8 border-r border-gray-200 z-20 bg-white shadow-[4px_0_12px_rgba(0,0,0,0.03)]">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-900 leading-snug max-w-[240px]">
            A 30-year lineage, twin-regulated
          </h3>
        </div>

        {/* Marquee Track Container (Spans 100% remaining width with no edge gaps) */}
        <div className="relative flex-1 overflow-hidden w-full">
          {/* Left & Right Subtle Fade Shadows */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent" />

          {/* Moving Track */}
          <div className="animate-marquee flex items-center gap-10 sm:gap-14 lg:gap-18">
            {marqueeList.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex shrink-0 flex-col items-center justify-center gap-3 text-center min-w-[160px] sm:min-w-[200px] lg:min-w-[240px] px-2">
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`${item.heightClass} w-auto object-contain max-w-[240px] sm:max-w-[300px] transition-transform duration-300 hover:scale-105`}
                    />
                  ) : (
                    <span className={item.heightClass}>
                      {item.textIcon}
                    </span>
                  )}
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>

                {/* Diamond Separator */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 text-gray-300 opacity-60"
                >
                  <path d="M12 2L15 7L12 12L9 7Z" fill="currentColor" />
                  <path d="M7 7L12 12L7 17L2 12Z" fill="currentColor" />
                  <path d="M17 7L22 12L17 17L12 12Z" fill="currentColor" />
                  <path d="M12 12L15 17L12 22L9 17Z" fill="currentColor" />
                </svg>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

