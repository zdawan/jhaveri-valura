import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        {/* Brand / Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/wordmark.png"
            alt="Jhaveri Securities - Powered By Valura.Ai"
            className="h-11 sm:h-14 md:h-16 w-auto object-contain transition-all duration-200"
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <a
            href="#features"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            Features
          </a>
          <a
            href="#allocation"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            Allocation
          </a>
          <a
            href="#open-account"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            Open Account
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            FAQ
          </a>
        </div>

        {/* Right Actions: Sign in & Get Started */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#signin"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            Sign in
          </a>
          <a
            href="#start"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-md"
          >
            <span>Get Started</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              Features
            </a>
            <a
              href="#allocation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              Allocation
            </a>
            <a
              href="#open-account"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              Open Account
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              FAQ
            </a>
            <div className="mt-2 flex flex-col gap-3 border-t border-gray-100 pt-3">
              <a
                href="#signin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-black"
              >
                Sign in
              </a>
              <a
                href="#start"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
              >
                <span>Get Started</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
