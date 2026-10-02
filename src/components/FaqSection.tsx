import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle, ShieldCheck } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  directAnswer: string;
  wordCount: number;
  bullets: string[];
}

const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does Rent2Wealth convert monthly rent into homeownership?',
    directAnswer: 'Each month, ₹50,000 of your ₹60,000 rent is directed into an independent ICICI Escrow account in your name. At month 36, your ₹18,00,000 balance covers the mandatory 20% down payment for a ₹90 Lakh apartment, while partner retail banks pre-approve the remaining 80% mortgage.',
    wordCount: 48,
    bullets: [
      '₹50,000/month saved automatically without separate mutual funds or SIPs.',
      '₹18,00,000 down payment accumulated after 36 consecutive monthly cycles.',
      'Pre-negotiated 80% home loan sanctioned through Tier-1 partner banks.'
    ]
  },
  {
    id: 'faq-2',
    question: 'Is there an option to leave before 3 years, and what happens to my money?',
    directAnswer: 'There is no option to leave before 3 years under the wealth program. If someone exits before completing 3 years, Alpha deducts ₹35,000 per month as standard rent for the time stayed, and refunds the entire remaining balance back to you in cash.',
    wordCount: 46,
    bullets: [
      '3-Year Commitment: Designed around a fixed 36-month homeownership timeline.',
      '₹35,000/Month Rent Deduction: Deducted for every month stayed if leaving before 3 years.',
      'Remaining Balance Refunded: Balance of ₹25,000/month (for standard ₹60k suite) returned to you in full.'
    ]
  },
  {
    id: 'faq-3',
    question: 'What services and amenities are included in the ₹10,000 living fee?',
    directAnswer: 'The ₹10,000 living fee covers daily chef-cooked meals (breakfast, lunch, dinner), professional housekeeping, high-speed Wi-Fi, air conditioning, 24/7 power backup, security, and full access to the rooftop gym and work lounges.',
    wordCount: 44,
    bullets: [
      '3 fresh daily meals prepared fresh by our in-house culinary staff.',
      'Daily room cleaning and regular linen laundry service.',
      'High-speed internet, power backup, and rooftop fitness gym access.'
    ]
  },
  {
    id: 'faq-4',
    question: 'How does Alpha ensure legal compliance and fund safety under Indian regulations?',
    directAnswer: 'Resident funds are kept in a separate trust account managed by SEBI-registered trustees and deposited in RERA-compliant scheduled commercial bank escrow accounts. All property projects follow Haryana RERA guidelines with regular audits.',
    wordCount: 50,
    bullets: [
      'RERA-compliant property development and clean legal titles.',
      'ICICI Bank escrow custody: founders cannot touch savings.',
      'Regular financial audit reports shared with all 32 residents.'
    ]
  },
  {
    id: 'faq-5',
    question: 'Who qualifies for living at Alpha Gurugram?',
    directAnswer: 'Applicants must earn a minimum annual income of ₹25 Lakhs, have a clean credit record (CIBIL 750+), and work in tech, consulting, finance, or business. Selection ensures a driven, respectful community of young professionals in Gurugram.',
    wordCount: 43,
    bullets: [
      'CIBIL credit score of 750+ for smooth 80% retail home loan approval.',
      'Full-time corporate employment or verified business earning ₹25L+/year.',
      'Brief 15-minute introductory conversation with our admissions team.'
    ]
  }
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Clear Answers &amp; FAQs</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-neutral-300 text-sm sm:text-base font-light">
          Simple, honest answers explaining how home savings, living costs, and exit rules work at Alpha Gurugram.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? 'bg-neutral-900/90 border-cyan-400/40 shadow-lg shadow-cyan-500/10'
                  : 'bg-neutral-900/40 border-white/[0.08] hover:border-white/[0.18]'
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <h3 className="text-base sm:text-lg font-heading font-semibold text-white tracking-tight leading-snug">
                  {faq.question}
                </h3>
                <div className="shrink-0 text-cyan-400">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-neutral-300 font-light border-t border-white/[0.06] mt-1 space-y-4">
                  <div className="p-4 rounded-xl bg-black/50 border border-cyan-500/20 text-white font-normal leading-relaxed">
                    <p>{faq.directAnswer}</p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    {faq.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
