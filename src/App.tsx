import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  UtensilsCrossed,
  Sparkles,
  Dumbbell,
  Users2,
  CheckCircle2,
  Lock,
  ChevronRight,
  Building2,
  Calendar,
  Home,
  Check,
  Coins,
  Rocket,
  Zap,
  Clock,
  Bed,
  Bath,
  Wind,
  AlertCircle
} from 'lucide-react';
import { InvestorPage } from './components/InvestorPage';
import { SampleFlatShowcase } from './components/SampleFlatShowcase';
import { FaqSection } from './components/FaqSection';
import { EeatTrustSection } from './components/EeatTrustSection';
import { ApplySection, GOOGLE_FORM_URL } from './components/ApplySection';
import { MotionBackground } from './components/MotionBackground';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  // Main Tab State: 'members' (default landing page) vs 'investor' (exclusive deck)
  const [mainTab, setMainTab] = useState<'members' | 'investor'>('members');

  // Calculator room selection: 'standard' | 'luxury'
  const [roomType, setRoomType] = useState<'standard' | 'luxury'>('standard');
  const [simMonths, setSimMonths] = useState<number>(36);

  // Interactive Live calculations
  const monthlyRent = roomType === 'standard' ? 60000 : 120000;
  const livingCost = roomType === 'standard' ? 10000 : 20000;
  const monthlySavings = roomType === 'standard' ? 50000 : 100000;
  const currentAccumulated = monthlySavings * simMonths;
  const targetHomeValue = roomType === 'standard' ? 9000000 : 18000000;
  const targetDownpayment = roomType === 'standard' ? 1800000 : 3600000;
  const progressPercent = Math.min(100, Math.round((currentAccumulated / targetDownpayment) * 100));

  // 3-Year Commitment Policy calculations
  const isFullTerm = simMonths === 36;
  const earlyRentDeductionPerMonth = 35000;
  const totalPaid = monthlyRent * simMonths;
  const totalDeductedRent = earlyRentDeductionPerMonth * simMonths;
  const remainingRefundBack = Math.max(0, (monthlyRent - earlyRentDeductionPerMonth) * simMonths);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#F8FAFC] font-body selection:bg-cyan-500 selection:text-black antialiased overflow-x-hidden relative">
      
      {/* Dynamic Motion Graphics Background with Scroll Parallax */}
      <MotionBackground />

      {/* ----------------------------------------------------
          NAVBAR: Clean Luxury Bar with Tab Switcher & CTA
         ---------------------------------------------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo / Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => { setMainTab('members'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#0e1626] border border-cyan-400/30 flex items-center justify-center font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 text-xl shadow-inner group-hover:border-cyan-400/60 transition-colors">
              α
            </div>
            <div>
              <span className="font-heading font-bold text-lg tracking-wider uppercase text-white block leading-tight">
                ALPHA
              </span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono block">
                GURUGRAM CO-LIVING
              </span>
            </div>
          </div>

          {/* Dedicated Mode Switcher */}
          <div className="flex items-center bg-black/60 p-1 rounded-full border border-white/[0.1]">
            <button
              onClick={() => {
                setMainTab('members');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 sm:px-5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                mainTab === 'members'
                  ? 'bg-gradient-to-r from-cyan-500/25 to-emerald-500/25 text-cyan-300 border border-cyan-400/40 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${mainTab === 'members' ? 'bg-cyan-400' : 'bg-neutral-600'}`} />
              <span>For Residents</span>
            </button>

            <button
              onClick={() => {
                setMainTab('investor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 sm:px-5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                mainTab === 'investor'
                  ? 'bg-gradient-to-r from-amber-500/25 to-amber-950/40 text-amber-300 border border-amber-400/50 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-amber-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Investor Portal</span>
            </button>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            {mainTab === 'members' ? (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-heading font-extrabold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] cursor-pointer shadow-md shadow-cyan-500/20 inline-flex items-center gap-1.5"
              >
                <span>Apply Now</span>
              </a>
            ) : (
              <button
                onClick={() => {
                  setMainTab('members');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/[0.15] font-mono text-xs cursor-pointer"
              >
                ← Back to Residents
              </button>
            )}
          </div>

        </div>
      </nav>

      {mainTab === 'investor' ? (
        <InvestorPage onBackToMembers={() => { setMainTab('members'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      ) : (
        <main>

          {/* ----------------------------------------------------
              SECTION 1: HERO (Clear, Direct & Compelling)
             ---------------------------------------------------- */}
          <section className="relative min-h-[90vh] flex items-center justify-center pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            
            {/* Background image with soft overlay */}
            <div className="absolute inset-0 -z-20 overflow-hidden opacity-20">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
                alt="Luxury Penthouse Gurugram"
                className="w-full h-full object-cover object-center brightness-[0.5] contrast-[1.1]"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#07090e]/50 via-[#07090e]/30 to-[#07090e]/95" />

            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
              
              {/* Clean Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Gurugram · Admissions Open</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl">
                Live in Gurugram. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300">
                  Own Your Home in 3 Years.
                </span>
              </h1>

              {/* Plain-English Subhead */}
              <p className="mt-6 text-base sm:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
                A luxury co-living space where your rent doesn’t vanish. Out of your ₹60,000 monthly rent, <span className="text-white font-semibold">₹50,000 is automatically saved</span> to fund the down payment for your own ₹90 Lakh Gurugram apartment.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-heading font-extrabold text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:scale-[1.03] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Enroll in the Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => scrollToSection('math-section')}
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-medium border border-white/[0.15] transition-all cursor-pointer"
                >
                  See How The Math Works ↓
                </button>
              </div>

              {/* 3 Clear Proof Metrics */}
              <div className="mt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-neutral-900/80 border border-white/[0.1] backdrop-blur-xl">
                <div className="text-center sm:text-left px-3 py-2">
                  <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold block">
                    Monthly Wealth Saved
                  </span>
                  <span className="text-2xl font-heading font-bold text-white block mt-1">₹50,000 / mo</span>
                  <span className="text-xs text-neutral-400 font-light">Saved in your personal fund</span>
                </div>

                <div className="text-center sm:text-left px-3 py-2 sm:border-l border-white/[0.1]">
                  <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold block">
                    All-Inclusive Living
                  </span>
                  <span className="text-2xl font-heading font-bold text-emerald-300 block mt-1">₹10,000 / mo</span>
                  <span className="text-xs text-neutral-400 font-light">Chef meals, room cleaning &amp; gym</span>
                </div>

                <div className="text-center sm:text-left px-3 py-2 sm:border-l border-white/[0.1]">
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold block">
                    At 36 Months
                  </span>
                  <span className="text-2xl font-heading font-bold text-amber-300 block mt-1">₹18 Lakhs Ready</span>
                  <span className="text-xs text-neutral-400 font-light">20% down payment for ₹90L home</span>
                </div>
              </div>

            </div>
          </section>

          {/* ----------------------------------------------------
              SECTION 2: SUNK RENT VS BUILT EQUITY (Simple Comparison)
             ---------------------------------------------------- */}
          <ScrollReveal>
            <section id="math-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                  The Financial Difference
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                  Where Does Your Monthly Rent Go?
                </h2>
                <p className="mt-3 text-neutral-300 text-sm sm:text-base font-light">
                  At ₹30,000/month, traditional renting drains ₹3,60,000 every year with zero return. Compare how Alpha turns your payments into ₹6,00,000 in equity savings every single year:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* Option 1: Normal Renting */}
                <div className="rounded-3xl p-7 sm:p-9 bg-neutral-900/60 border border-red-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                      <span className="text-xs font-mono uppercase font-bold text-red-400 tracking-wider">
                        Option A: Traditional Renting
                      </span>
                      <span className="text-[11px] text-neutral-400 font-mono">Status Quo</span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-white mt-5">
                      Your Money Is Gone Forever.
                    </h3>
                    <p className="mt-2 text-sm text-neutral-300 font-light leading-relaxed">
                      You write a ₹30,000 cheque every single month to your landlord. You also cook your own food, hire domestic help, pay utility bills, and deal with annual rent hikes.
                    </p>

                    <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-white/[0.08] space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-neutral-400">Monthly Rent Paid:</span>
                        <span className="text-white font-bold">₹30,000 / mo</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-neutral-400">1-Year Loss (12 Months):</span>
                        <span className="text-red-400 font-bold">₹3,60,000 wasted</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-neutral-400">3-Year Cumulative Loss:</span>
                        <span className="text-red-400/80 font-bold">₹10,80,000 wasted</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-red-500/20">
                    <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                      Your Outcome:
                    </span>
                    <div className="text-xl font-heading font-bold text-red-400">
                      ₹3,60,000 Wasted / Year · ₹0 Equity
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 font-light">
                      You helped your landlord pay off their asset. You are back at square one.
                    </p>
                  </div>
                </div>

                {/* Option 2: Alpha Living */}
                <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#091524] to-[#060e19] border-2 border-cyan-400/50 shadow-xl shadow-cyan-500/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-cyan-400/30">
                      <span className="text-xs font-mono uppercase font-bold text-cyan-300 tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Option B: The Alpha Model</span>
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                        Rent-to-Own
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-white mt-5">
                      Your Rent Automatically Buys Your Home.
                    </h3>
                    <p className="mt-2 text-sm text-neutral-200 font-light leading-relaxed">
                      Instead of losing money, your payments directly build your personal home fund. ₹10,000 covers your all-inclusive lifestyle (chef meals, cleaning, gym), while <strong className="text-emerald-300 font-semibold">₹50,000 is saved directly into your locked home down payment fund.</strong>
                    </p>

                    <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-neutral-300">All-Inclusive Living Fee:</span>
                        <span className="text-neutral-300">₹10,000 (Meals + Cleaning + Gym)</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-cyan-300 font-bold">1-Year Wealth Built (12 Mo):</span>
                        <span className="text-emerald-300 font-bold">₹6,00,000 saved</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-cyan-300 font-bold">3-Year Accumulated (36 Mo):</span>
                        <span className="text-emerald-300 font-bold">₹18,00,000 saved</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-cyan-400/30">
                    <span className="text-xs font-mono uppercase text-cyan-300 block mb-1">
                      Your Outcome:
                    </span>
                    <div className="text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
                      ₹6,00,000 Saved / Year · ₹18L Down Payment
                    </div>
                    <p className="text-xs text-neutral-300 mt-1 font-light">
                      Covers the full 20% down payment. Alpha secures your 80% mortgage. You move into a home you own.
                    </p>
                  </div>
                </div>

              </div>
            </section>
          </ScrollReveal>

          {/* ----------------------------------------------------
              SECTION 3: THE LIVING EXPERIENCE (What You Get)
             ---------------------------------------------------- */}
          <ScrollReveal>
            <section id="lifestyle-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-2">
                  All-Inclusive Hospitality
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                  Zero Domestic Friction. 100% Focus.
                </h2>
                <p className="mt-3 text-neutral-300 text-sm sm:text-base font-light">
                  We handle every daily chore so you have complete freedom to excel at your career, fitness, and life.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1: Food */}
                <div className="rounded-3xl p-6 bg-neutral-900/80 border border-white/[0.1] hover:border-amber-400/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-5">
                      <UtensilsCrossed className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                      Daily Meals
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Chef-Cooked Food
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      Three wholesome, macro-balanced meals prepared fresh daily. Zero grocery trips, zero cooking, and zero dishwashing.
                    </p>
                  </div>
                </div>

                {/* Card 2: Cleaning */}
                <div className="rounded-3xl p-6 bg-neutral-900/80 border border-white/[0.1] hover:border-cyan-400/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-5">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                      Hotel Service
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Daily Housekeeping
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      Daily suite cleaning, regular linen changes, high-speed fiber Wi-Fi, and commercial laundry contracts included.
                    </p>
                  </div>
                </div>

                {/* Card 3: Gym */}
                <div className="rounded-3xl p-6 bg-neutral-900/80 border border-white/[0.1] hover:border-emerald-400/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-5">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                      Wellness
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Rooftop Gym
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      Fully equipped fitness center, open terrace, and peaceful meditation zones just an elevator ride away.
                    </p>
                  </div>
                </div>

                {/* Card 4: Community */}
                <div className="rounded-3xl p-6 bg-neutral-900/80 border border-white/[0.1] hover:border-purple-400/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-5">
                      <Users2 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block mb-1">
                      Network
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Curated Community
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      Live with 32 driven peers — founders, engineers, consultants, and creators building their careers in Gurugram.
                    </p>
                  </div>
                </div>

              </div>
            </section>
          </ScrollReveal>

          {/* ----------------------------------------------------
              SECTION 4: YOUR PRIVATE ROOM (Simple Showcase Component)
             ---------------------------------------------------- */}
          <ScrollReveal>
            <SampleFlatShowcase />
          </ScrollReveal>

          {/* ----------------------------------------------------
              SECTION 5: INTERACTIVE SAVINGS CALCULATOR
             ---------------------------------------------------- */}
          <ScrollReveal>
            <section id="calculator-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/[0.08]">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                  Transparent Numbers
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                  Calculate Your 3-Year Home Fund
                </h2>
                <p className="mt-3 text-neutral-300 text-sm sm:text-base font-light">
                  See exactly how much you will save toward your future home down payment.
                </p>
              </div>

              <div className="bg-gradient-to-b from-neutral-900 to-[#070d18] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
                
                {/* Room Choice Switcher */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-white/[0.1] gap-4">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase block">Select Suite Tier:</span>
                    <span className="text-lg font-heading font-bold text-white">
                      {roomType === 'standard' ? 'Standard En-Suite (Single Member)' : 'Luxury Penthouse (Couples)'}
                    </span>
                  </div>

                  <div className="flex p-1 rounded-xl bg-black/60 border border-white/[0.1]">
                    <button
                      onClick={() => setRoomType('standard')}
                      className={`px-4 py-2 rounded-lg text-xs font-mono uppercase cursor-pointer transition-colors ${
                        roomType === 'standard' ? 'bg-cyan-400 text-black font-bold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Standard (₹60K/mo)
                    </button>
                    <button
                      onClick={() => setRoomType('luxury')}
                      className={`px-4 py-2 rounded-lg text-xs font-mono uppercase cursor-pointer transition-colors ${
                        roomType === 'luxury' ? 'bg-cyan-400 text-black font-bold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Luxury (₹120K/mo)
                    </button>
                  </div>
                </div>

                {/* Slider for Duration */}
                <div>
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className="text-neutral-300 font-medium">Timeline Duration:</span>
                    <span className={`font-heading font-bold text-base flex items-center gap-1.5 ${
                      isFullTerm ? 'text-emerald-300' : 'text-amber-400'
                    }`}>
                      {!isFullTerm && <AlertCircle className="w-4 h-4 text-amber-400" />}
                      <span>{simMonths} Months {isFullTerm ? '(Full 3-Year Plan)' : '(Early Exit Simulation)'}</span>
                    </span>
                  </div>

                  <input
                    type="range"
                    min="6"
                    max="36"
                    step="6"
                    value={simMonths}
                    onChange={(e) => setSimMonths(Number(e.target.value))}
                    className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                      isFullTerm ? 'bg-neutral-800 accent-emerald-400' : 'bg-neutral-800 accent-amber-400'
                    }`}
                  />

                  <div className="flex justify-between text-[11px] font-mono mt-2">
                    <span className={simMonths === 6 ? 'text-amber-400 font-bold' : 'text-neutral-400'}>6 Mo</span>
                    <span className={simMonths === 12 ? 'text-amber-400 font-bold' : 'text-neutral-400'}>12 Mo</span>
                    <span className={simMonths === 18 ? 'text-amber-400 font-bold' : 'text-neutral-400'}>18 Mo</span>
                    <span className={simMonths === 24 ? 'text-amber-400 font-bold' : 'text-neutral-400'}>24 Mo</span>
                    <span className={simMonths === 30 ? 'text-amber-400 font-bold' : 'text-neutral-400'}>30 Mo</span>
                    <span className="text-emerald-400 font-bold">36 Months (3-Year Plan)</span>
                  </div>
                </div>

                {/* Early Exit Policy Notification if slider < 36 months */}
                {!isFullTerm ? (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-amber-200">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-amber-400">
                      <AlertCircle className="w-4 h-4" />
                      <span>No Option to Leave Before 3 Years — Early Exit Liquidation Rule</span>
                    </div>
                    <p className="mt-1.5 text-xs text-neutral-300 leading-relaxed font-light">
                      The Alpha wealth program requires a strict 3-year (36 months) commitment. There is no standard option to leave early. If someone exits before 3 years, <strong className="text-amber-300 font-semibold">we deduct ₹35,000/month as standard rent</strong> for the {simMonths} months lived, and give them the remaining amount back in cash.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-200">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-emerald-300">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Full 3-Year Plan (Homeownership Track)</span>
                    </div>
                    <p className="mt-1.5 text-xs text-neutral-300 leading-relaxed font-light">
                      Completing your 3-year plan protects your full <strong className="text-emerald-300 font-semibold">₹50,000/month</strong> savings. You avoid any rent penalties and graduate with ₹18 Lakhs down payment for your ₹90L Gurugram home.
                    </p>
                  </div>
                )}

                {/* Real-Time Result Cards */}
                {isFullTerm ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-black/60 border border-white/[0.08]">
                      <span className="text-xs font-mono text-neutral-400 uppercase block mb-1">
                        Monthly Wealth Breakdown (36 Mo)
                      </span>
                      <div className="text-xl font-heading font-bold text-white">
                        ₹{monthlyRent.toLocaleString('en-IN')} <span className="text-xs font-normal text-neutral-400 font-mono">/month</span>
                      </div>
                      <div className="mt-3 text-xs space-y-1 text-neutral-300">
                        <div className="flex justify-between">
                          <span className="text-neutral-400">All-Inclusive Living:</span>
                          <span>₹{livingCost.toLocaleString('en-IN')}/mo</span>
                        </div>
                        <div className="flex justify-between text-emerald-300 font-semibold">
                          <span>Saved into Home Fund:</span>
                          <span>₹{monthlySavings.toLocaleString('en-IN')}/mo</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-400/40">
                      <span className="text-xs font-mono text-cyan-300 uppercase block mb-1">
                        Down Payment Accumulated (36 Mo)
                      </span>
                      <div className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 font-mono">
                        ₹{currentAccumulated.toLocaleString('en-IN')}
                      </div>
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-neutral-300 mb-1 font-mono">
                          <span>Progress to Target (₹{targetDownpayment.toLocaleString('en-IN')}):</span>
                          <span className="font-bold text-emerald-300">100%</span>
                        </div>
                        <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-full transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-black/60 border border-red-500/30">
                      <span className="text-xs font-mono text-red-400 uppercase block mb-1 font-bold">
                        Deducted as Rent ({simMonths} Mo)
                      </span>
                      <div className="text-2xl font-heading font-bold text-red-400 font-mono">
                        ₹{totalDeductedRent.toLocaleString('en-IN')}
                      </div>
                      <div className="mt-3 text-xs space-y-1 text-neutral-300">
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Rate Deducted:</span>
                          <span className="text-red-300 font-mono">₹35,000 / month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Total Deposited ({simMonths} mo):</span>
                          <span className="text-white font-mono">₹{totalPaid.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-400/40">
                      <span className="text-xs font-mono text-amber-300 uppercase block mb-1 font-bold">
                        Remaining Amount Refunded Back
                      </span>
                      <div className="text-3xl font-heading font-bold text-amber-300 font-mono">
                        ₹{remainingRefundBack.toLocaleString('en-IN')}
                      </div>
                      <div className="mt-3 text-xs space-y-1 text-neutral-300">
                        <div className="flex justify-between font-mono">
                          <span className="text-neutral-400">Refund Rate:</span>
                          <span className="text-amber-300 font-bold">₹{(monthlyRent - earlyRentDeductionPerMonth).toLocaleString('en-IN')} / month</span>
                        </div>
                        <div className="flex justify-between font-mono text-neutral-400 text-[11px]">
                          <span>Home Equity Allocation:</span>
                          <span className="text-red-400 font-bold">Forfeited (Early Exit)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Clarification */}
                <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
                  isFullTerm ? 'bg-black/40 border-white/[0.08] text-neutral-300' : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                }`}>
                  <span className="flex items-center gap-2">
                    {isFullTerm ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                    <span>
                      {isFullTerm
                        ? 'At 36 months, your accumulated ₹18 Lakhs covers the 20% down payment for a brand new ₹90L Gurugram home.'
                        : `Early exit clause: ₹35,000/mo is deducted as rent (₹${totalDeductedRent.toLocaleString('en-IN')}) and the remaining ₹${remainingRefundBack.toLocaleString('en-IN')} is returned back to the member.`}
                    </span>
                  </span>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-block px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-heading font-bold text-xs uppercase cursor-pointer shrink-0 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>

              </div>
            </section>
          </ScrollReveal>

          {/* ----------------------------------------------------
              SECTION 6: 3-STEP TIMELINE (How It Works)
             ---------------------------------------------------- */}
          <ScrollReveal>
            <section id="timeline-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/[0.08]">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                  Simple 3-Year Path
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                  How You Go From Renting to Owning
                </h2>
                <p className="mt-3 text-neutral-300 text-sm sm:text-base font-light">
                  No complex paperwork. We manage both your living experience and your down payment accumulation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Step 1 */}
                <div className="p-6 rounded-3xl bg-neutral-900/80 border border-white/[0.1] relative flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-cyan-400 font-bold block mb-2">
                      Step 01 · Month 1
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Move In Hassle-Free
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      Unpack your clothes into your furnished private suite. Chef meals, daily housekeeping, and your personal down payment savings start on day one.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-neutral-400">
                    ✓ Private Room + Bath + Balcony
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-6 rounded-3xl bg-neutral-900/80 border border-white/[0.1] relative flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-blue-400 font-bold block mb-2">
                      Step 02 · Months 2–35
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Live &amp; Accumulate
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      Enjoy friction-free living while ₹50,000 every month is ring-fenced into your audited home purchase fund. Focus on your career and network with your community.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-neutral-400">
                    ✓ ₹50K/mo Saved Automatically
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0d1a29] to-[#070e17] border border-emerald-400/40 relative flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-300 font-bold block mb-2">
                      Step 03 · Month 36
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Own Your Home
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      Your accumulated ₹18 Lakhs pays the 20% down payment. Alpha pre-arranges the 80% retail bank mortgage. You receive the registered deed to your ₹90L home.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-emerald-400/20 text-[11px] font-mono text-emerald-300">
                    ★ Move Into Your Own Home
                  </div>
                </div>

              </div>
            </section>
          </ScrollReveal>

          {/* ----------------------------------------------------
              INVESTOR GATEWAY CARD (Quiet Link for Funds/Investors)
             ---------------------------------------------------- */}
          <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-neutral-900 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono uppercase text-amber-300 font-bold block">
                  Institutional Investors &amp; Family Offices
                </span>
                <p className="text-xs text-neutral-300 font-light mt-0.5">
                  Interested in the asset backing, 21.25% projected IRR, and construction model?
                </p>
              </div>
              <button
                onClick={() => {
                  setMainTab('investor');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-heading font-bold text-xs uppercase tracking-wider cursor-pointer shrink-0 transition-colors"
              >
                View Institutional Deck →
              </button>
            </div>
          </div>

          {/* ----------------------------------------------------
              SECTION 6.5: FAQS
             ---------------------------------------------------- */}
          <ScrollReveal>
            <FaqSection />
          </ScrollReveal>

          {/* ----------------------------------------------------
              SECTION 6.6: E-E-A-T & REGULATORY AUTHORITY
             ---------------------------------------------------- */}
          <ScrollReveal>
            <EeatTrustSection />
          </ScrollReveal>

          {/* ----------------------------------------------------
              SECTION 7: APPLY NOW / ENROLL IN WAITLIST
             ---------------------------------------------------- */}
          <ScrollReveal>
            <ApplySection />
          </ScrollReveal>

        </main>
      )}

      {/* ----------------------------------------------------
          CLEAN, QUIET FOOTER WITH CRAWLABLE NAVIGATION
         ---------------------------------------------------- */}
      <footer className="bg-black/95 border-t border-white/[0.08] py-12 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs font-mono">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-white font-heading font-bold tracking-wider text-sm">
              <span>ALPHA HOUSE GURUGRAM</span>
              <span className="text-neutral-500">·</span>
              <span className="text-cyan-400 font-normal font-mono text-xs">Rent-to-Own Community</span>
            </div>

            {/* Crawlable Internal Links */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-neutral-300">
              <a href="#math-section" className="hover:text-cyan-400 transition-colors">The Math</a>
              <a href="#calculator-section" className="hover:text-cyan-400 transition-colors">Savings Calculator</a>
              <a href="#timeline-section" className="hover:text-cyan-400 transition-colors">3-Year Timeline</a>
              <a href="#faq-section" className="hover:text-cyan-400 transition-colors">FAQs</a>
              <a href="#eeat-section" className="hover:text-emerald-400 transition-colors">Trust &amp; Security</a>
              <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 text-neutral-500">robots.txt</a>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 text-neutral-500">sitemap.xml</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
            <div>
              <span>Gurugram, Haryana</span>
            </div>
            <div>
              © {new Date().getFullYear()} Alpha Ecosystems SPV. RERA Aligned &amp; Escrow Backed.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
