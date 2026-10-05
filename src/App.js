import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import CoreExpertise from "./components/CoreExpertise";
import Metrics from "./components/Metrics";
import BuildWealth from "./components/BuildWealth";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothTouch: true }}>
      <div className="min-h-screen bg-white text-[#111111] font-sans antialiased">
        <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <CoreExpertise />
        <Metrics />
        <BuildWealth />
        <ContactUs />
        <FAQ />
        <Footer />
      </main>
    </div>
    </ReactLenis>
  );
}

export default App;

