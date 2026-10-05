import React, { useState } from 'react';

const faqs = [
  {
    question: "How safe is my money with Jhaveri Valura?",
    answer: "Your funds are securely held in regulated custodian banks in India. Jhaveri Valura is fully compliant with SEBI regulations, utilizing bank-grade encryption to ensure maximum security for your investments and personal data."
  },
  {
    question: "Are there any hidden charges for opening an account?",
    answer: "No, opening a trading account is completely free. We believe in 100% transparency. Any standard brokerage, AMC, or regulatory fees are explicitly shown to you before you execute a trade."
  },
  {
    question: "Can I invest in US stocks and global ETFs?",
    answer: "Yes, our global account feature allows you to invest seamlessly in US equities and ETFs. We handle all the complex Tax & LRS reporting for you, making international diversification effortless."
  },
  {
    question: "How long does the KYC and onboarding process take?",
    answer: "Our entirely digital, paperless KYC process is lightning-fast. For most users, it takes under 5 minutes to submit details, and less than 24 hours for full account verification and activation."
  },
  {
    question: "What are fractional shares and can I buy them?",
    answer: "Fractional shares allow you to buy a piece of a high-priced stock rather than a whole share. This means you can own a slice of premium global companies like Apple or Amazon starting from just a few dollars."
  },
  {
    question: "How do I withdraw my funds?",
    answer: "You can initiate a withdrawal at any time directly from the app. Funds are typically processed and credited back to your linked primary bank account within 1-2 business days."
  },
  {
    question: "Are there tax implications for US investments?",
    answer: "Yes, investing in US stocks involves capital gains tax in India and a dividend withholding tax in the US. Our platform provides automated, ready-to-file tax reports to drastically simplify your tax filing."
  },
  {
    question: "Do you offer personalized advisory services?",
    answer: "Jhaveri Valura is primarily an execution platform. However, we provide powerful AI-driven insights, curated baskets, and deep research tools to help you make your own informed investment decisions."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // No FAQ open by default for a clean grid

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3C3C43] tracking-tight mb-4">Frequently asked questions</h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium">Everything you need to know about managing your wealth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-[#2E68FF] shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full h-24 px-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-semibold text-lg pr-4 ${isOpen ? 'text-[#2E68FF]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#2E68FF]/10 text-[#2E68FF]' : 'bg-gray-100 text-gray-500'}`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
