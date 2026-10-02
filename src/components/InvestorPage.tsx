import React, { useState } from 'react';
import {
  Briefcase,
  Building2,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users2,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  Coins,
  Rocket,
  Award,
  Calendar,
  AlertCircle,
  FileText,
  LockKeyhole,
  Check,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

interface InvestorPageProps {
  onBackToMembers: () => void;
}

export const InvestorPage: React.FC<InvestorPageProps> = ({ onBackToMembers }) => {
  const [architectureStep, setArchitectureStep] = useState<number>(1);
  const [dataRoomPassword, setDataRoomPassword] = useState('');
  const [dataRoomUnlocked, setDataRoomUnlocked] = useState(false);
  const [dataRoomError, setDataRoomError] = useState(false);
  const [compoundingScale, setCompoundingScale] = useState<number>(32);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dataRoomPassword.trim().toUpperCase() === 'ALPHA2026') {
      setDataRoomUnlocked(true);
      setDataRoomError(false);
    } else {
      setDataRoomError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#06080e] text-[#F8FAFC] pb-24 font-body selection:bg-amber-400 selection:text-black">
      
      {/* ----------------------------------------------------
          INVESTOR SUB-HEADER / BREADCRUMB BAR
         ---------------------------------------------------- */}
      <div className="bg-[#0b101c]/95 border-b border-amber-500/25 sticky top-20 z-40 backdrop-blur-xl px-4 sm:px-8 py-3 flex items-center justify-between">
        <button
          onClick={onBackToMembers}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Member Experience</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Institutional Access
          </span>
          <span className="text-[11px] font-mono text-neutral-400">
            RERA Haryana Underwritten
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* ----------------------------------------------------
            INVESTOR HERO: Wireframe & Co-Living Lounge Atmosphere
           ---------------------------------------------------- */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#111827] via-[#0d131f] to-[#080d16] border border-amber-400/40 shadow-[0_20px_70px_rgba(0,0,0,0.85)] mb-14 overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
              alt="Alpha Executive Co-living Lounge"
              className="w-full h-full object-cover object-center brightness-[0.24] contrast-[1.25] saturate-[1.2]"
            />
            <div className="absolute inset-0 bg-blueprint-grid opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/80 to-transparent" />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 font-mono text-[11px] uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(245,158,11,0.25)] animate-float">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>TAB: INVESTOR RELATIONS · PRIVATE EQUITY MEMORANDUM</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.12]">
              Engineering Real Estate Arbitrage through Captive Demand.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
              Alpha is a fintech-enabled real estate platform engineered to capture a <span className="text-amber-300 font-semibold">20% arbitrage spread</span> in premium urban housing. By incubating a captive audience of high-net-worth buyers in our master-operated co-living ecosystem, we secure massive bulk acquisition discounts from RERA-approved developers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-3.5 py-1.5 rounded-lg bg-black/70 border border-amber-400/40 text-amber-300 flex items-center gap-2">
                <Coins className="w-3.5 h-3.5" />
                Seed Round: ₹8 Crore
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-black/70 border border-emerald-400/40 text-emerald-300 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5" />
                Target Gross Return: ₹19.58 Cr (2.45x MOIC)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-black/70 border border-cyan-400/40 text-cyan-300 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                21.25% Projected IRR
              </span>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            1. THE MACRO PROBLEM: A BROKEN WEALTH LADDER
           ---------------------------------------------------- */}
        <div className="mb-14 relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#140e10] to-[#090607] border border-red-500/35 shadow-xl overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              alt="Generic urban high-rises"
              className="w-full h-full object-cover grayscale opacity-15 mix-blend-luminosity contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090607] via-[#090607]/90 to-transparent" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-red-400 font-bold mb-3">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span>1. THE MACRO PROBLEM: A BROKEN WEALTH LADDER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            The traditional real estate ecosystem is fundamentally broken for both the modern consumer and the institutional operator.
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/60 border border-red-500/25 shadow-inner">
              <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-2">
                For the Consumer (The Wealth Trap)
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Millennials and Gen Z professionals in Tier-1 cities like Gurugram are locked into a permanent renter class. Skyrocketing property values outpace wage growth, turning rent into a 100% sunk cost. They burn <span className="text-red-300 font-semibold font-mono">₹18–₹24 Lakhs</span> over three years just to exist, walking away with zero equity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-red-500/25 shadow-inner">
              <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-2">
                For the Operator (The Churn &amp; CapEx Crisis)
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Traditional co-living and PG operators suffer from massive tenant churn, high customer acquisition costs (CAC), and extreme physical damage to assets because tenants have no vested interest in the property. Meanwhile, operators bleed corporate runway on fixed commercial leases.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            2. THE ALPHA SOLUTION: ALIGNED INCENTIVES
           ---------------------------------------------------- */}
        <div className="mb-14 relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0a1829] via-[#091524] to-[#060e18] border border-cyan-400/40 shadow-xl overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
              alt="Architectural Render"
              className="w-full h-full object-cover opacity-20 brightness-90 saturate-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060e18] via-[#060e18]/85 to-transparent" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-300 font-bold mb-3">
            <Lock className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>2. THE ALPHA SOLUTION: ALIGNED INCENTIVES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Alpha shifts real estate from a consumption model to an incubation model. We transform rent from a financial drain into a wealth-generation engine.
          </h2>

          <p className="mt-6 text-base text-neutral-200 font-light leading-relaxed max-w-3xl">
            Instead of burning cash, our residents pay a premium monthly fee (₹50,000 SPV Contribution + ₹10,000 Lifestyle Fee). They live in luxury, master-operated co-living spaces, while their core payments are funneled into a strictly governed Special Purpose Vehicle (SPV). After 36 months, this SPV serves as the liquid down payment for their own home.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-cyan-950/40 border border-cyan-400/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                The Result:
              </span>
              <p className="text-sm text-neutral-200 font-light mt-1">
                <strong className="text-white">Zero tenant churn</strong>, <strong className="text-white">zero marketing CAC</strong> (our waitlist is viral), and residents who treat the property like owners because they are actively building equity while living there.
              </p>
            </div>
            <div className="shrink-0 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-mono text-xs font-bold">
              Zero Tenant Churn
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            3. THE COMPLETE SYSTEM ARCHITECTURE & INTERACTIVE EXPLORER
           ---------------------------------------------------- */}
        <div className="mb-14 relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0b1322] to-[#070b13] border border-amber-400/40 shadow-2xl overflow-hidden bg-blueprint-grid">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-300 font-bold mb-3">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>3. THE COMPLETE SYSTEM ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            To understand Alpha is to understand the flow of capital.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light max-w-3xl">
            We are not just a housing brand; we are a closed-loop financial aggregator. Here is the exact architecture of how we convert a ₹8 Crore seed investment into a ₹19.5 Crore asset-backed return over two phases.
          </p>

          {/* Interactive Steps */}
          <div className="mt-8 pt-6 border-t border-white/[0.1]">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
              {[
                { step: 1, label: 'Capital Aggregation', sub: 'The Anchor Asset' },
                { step: 2, label: 'Demand Incubation', sub: 'The SPV Engine' },
                { step: 3, label: 'Arbitrage Trigger', sub: '1-to-4 Developer MoU' },
                { step: 4, label: 'Value Extraction', sub: 'Liquidity at Month 36' },
                { step: 5, label: 'SPV Compounding Loop', sub: 'Alpha Owned & Operated' }
              ].map((item) => (
                <button
                  key={item.step}
                  onClick={() => setArchitectureStep(item.step)}
                  className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                    architectureStep === item.step
                      ? 'bg-gradient-to-b from-amber-500/25 to-amber-950/40 border-amber-400 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-[1.02]'
                      : 'bg-black/60 border-white/[0.1] text-neutral-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-1">
                    <span>STEP 0{item.step}</span>
                    {architectureStep === item.step && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    )}
                  </div>
                  <div className="text-xs font-heading font-bold text-white truncate">{item.label}</div>
                  <div className="text-[10px] text-neutral-400 truncate">{item.sub}</div>
                </button>
              ))}
            </div>

            {/* Step Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-black/80 border border-amber-400/40 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {architectureStep === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-amber-300 font-mono text-xs uppercase tracking-wider font-bold">
                    <Building2 className="w-5 h-5 text-amber-400" />
                    <span>Step 1: Capital Aggregation (The Anchor Asset)</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Debt-Free Physical Proof of Concept
                  </h4>
                  <ul className="space-y-2.5 text-sm text-neutral-200 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>The ₹8 Crore seed capital builds our anchor, debt-free 28-room Phase 1 facility in Gurugram.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>This physical asset gives us total control over the living experience, completely shielding investor capital from commercial lease liabilities.</span>
                    </li>
                  </ul>
                  <div className="pt-2 text-xs font-mono text-amber-300 font-semibold">
                    Allocation: ₹7.0 Cr Construction (87.5%) + ₹1.0 Cr SPV Structuring &amp; Runway (12.5%)
                  </div>
                </div>
              )}

              {architectureStep === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-cyan-300 font-mono text-xs uppercase tracking-wider font-bold">
                    <Users2 className="w-5 h-5 text-cyan-400" />
                    <span>Step 2: Demand Incubation (The SPV Engine)</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Vetted Purchasing Entities &amp; Dual Cash Stream
                  </h4>
                  <ul className="space-y-2.5 text-sm text-neutral-200 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>We onboard 32 highly vetted purchasing entities (singles and couples).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>The ₹10,000/month lifestyle fee covers all property OPEX, generating a 15.6% margin to ensure corporate sustainability.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>The ₹50,000/month core fee flows directly into the regulatory-compliant SPV.</span>
                    </li>
                  </ul>
                  <div className="pt-2 text-xs font-mono text-emerald-400 font-semibold">
                    Result: 100% Escrow ring-fencing creates ₹18L per member over 36 months.
                  </div>
                </div>
              )}

              {architectureStep === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-300 font-mono text-xs uppercase tracking-wider font-bold">
                    <Zap className="w-5 h-5 text-emerald-400" />
                    <span>Step 3: The Arbitrage Trigger (1-to-4 Developer MoU)</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Bulk Institutional Acquisition without Retail Intermediaries
                  </h4>
                  <ul className="space-y-2.5 text-sm text-neutral-200 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Because we control the aggregated, liquid demand of 32 high-net-worth buyers, Alpha bypasses retail brokers and signs massive bulk MoUs with RERA-approved Tier-1 developers.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>The Math:</strong> For every 4 members who purchase homes at market rate (funded by their SPV and a retail bank mortgage), the developer grants Alpha a 20% bulk discount—manifesting as a 5th unit, entirely free and clear.</span>
                    </li>
                  </ul>
                  <div className="pt-2 text-xs font-mono text-amber-300 font-semibold">
                    Formula: 4 Buyers = 5 Units Contracted @ 20% Discount = 1 Free Unit to Alpha Balance Sheet.
                  </div>
                </div>
              )}

              {architectureStep === 4 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-purple-300 font-mono text-xs uppercase tracking-wider font-bold">
                    <Coins className="w-5 h-5 text-purple-400" />
                    <span>Step 4: Liquidity &amp; Value Extraction</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Month 36 Phase 1 Graduation &amp; Balance Sheet Expansion
                  </h4>
                  <ul className="space-y-2.5 text-sm text-neutral-200 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>Month 36: Phase 1 graduates. 32 members buy their homes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>The 8 additional units are held again by dedicated SPVs owned and operated by Alpha (The 20% Arbitrage).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>Alpha collects 1–2% DSA (Direct Selling Agent) commissions on the retail home loans issued to the graduating members.</span>
                    </li>
                  </ul>
                  <div className="pt-2 text-xs font-mono text-emerald-400 font-bold">
                    Phase 1 Liquidity Event: +₹7,45,92,000 gross equity capture held in Alpha-operated SPVs.
                  </div>
                </div>
              )}

              {architectureStep === 5 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-300 font-mono text-xs uppercase tracking-wider font-bold">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    <span>Step 5: The SPV Compounding Loop (Phase 2)</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Alpha Owned &amp; Operated SPVs with 52 Members
                  </h4>
                  <ul className="space-y-2.5 text-sm text-neutral-200 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>With a proven track record, Alpha scales to 52 members in Phase 2. Alpha directly owns and operates all SPVs, maintaining complete governance, asset ownership, and hospitality quality.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>The 8 additional Phase 1 units are held and managed by Alpha-operated SPVs, while incubating 52 more home-buyers through the proprietary SPV engine to capture 13 additional free units in Year 6.</span>
                    </li>
                  </ul>
                  <div className="pt-2 text-xs font-mono text-amber-300 font-bold">
                    Cumulative Year 6 Gross Return: ₹19,58,04,000 on initial ₹8 Cr seed.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            THE PARADIGM SHIFT: RENT VS. EQUITY (Wealth Meter)
           ---------------------------------------------------- */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
              The Paradigm Shift: Rent vs. Equity
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light">
              Underwriting comparison of tenant capital outcomes over 36 months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left: Traditional Rent Trap */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#140e10] border border-red-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-red-400 font-bold mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span>THE TRADITIONAL RENT TRAP</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase">The Cost:</span>
                    <div className="text-2xl font-heading font-bold text-red-400">₹50,000/month</div>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase">The Result:</span>
                    <p className="text-sm text-neutral-200 mt-1 leading-relaxed">
                      A 100% sunk cost. Over 3 years, a tenant burns ₹18 Lakhs to pay off a landlord&apos;s mortgage, walking away with zero equity and remaining permanently locked out of the property ladder.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-red-500/20">
                <div className="flex justify-between text-xs font-mono text-red-400 mb-2 font-bold">
                  <span>Wealth Meter</span>
                  <span>0% Equity</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-black/60 overflow-hidden border border-red-500/30">
                  <div className="h-full bg-red-500 w-[2%]" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 block mt-2">
                  ₹0 Asset Value after 36 months
                </span>
              </div>
            </div>

            {/* Right: Alpha Wealth Engine */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0a1829] to-[#06101c] border border-amber-400/45 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300 font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>THE ALPHA WEALTH ENGINE</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase">The Cost:</span>
                    <div className="text-2xl font-heading font-bold text-amber-300">
                      ₹50,000/month (SPV) + ₹10,000/month (Lifestyle Fee)
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase">The Result:</span>
                    <p className="text-sm text-neutral-200 mt-1 leading-relaxed">
                      The money spent to live today buys the home for tomorrow. Rent is converted into fractional ownership via a strictly governed SPV, unlocking a ₹90 Lakh asset in 36 months.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-amber-400/20">
                <div className="flex justify-between text-xs font-mono text-amber-300 mb-2 font-bold">
                  <span>Wealth Meter</span>
                  <span>100% Down Payment Realized</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-black/60 overflow-hidden border border-amber-400/30">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 w-full animate-pulse-slow" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold block mt-2">
                  ₹18,00,000 Liquid SPV Down Payment + ₹90L Asset Registered
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            USE OF FUNDS: THE ₹8 CRORE SEED ALLOCATION
           ---------------------------------------------------- */}
        <div className="mb-14 rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#101522] to-[#090d16] border border-amber-400/35 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-300 font-bold mb-3">
            <DollarSign className="w-4 h-4 text-amber-400" />
            <span>USE OF FUNDS: THE ₹8 CRORE SEED ALLOCATION</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
            Strict Two-Tranche Allocation
          </h3>

          <p className="mt-2 text-sm text-neutral-300 font-light max-w-3xl">
            To execute Phase 1 without relying on high-interest commercial debt, the ₹8 Crore seed capital is strictly allocated into two tranches, prioritizing tangible asset creation and regulatory compliance.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Donut Visualizer */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-black/50 rounded-2xl border border-white/[0.1]">
              <div className="relative w-52 h-52 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.08)" strokeWidth="14" fill="transparent" />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#f59e0b"
                    strokeWidth="14"
                    fill="transparent"
                    strokeDasharray="238.76"
                    strokeDashoffset="29.84"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#06b6d4"
                    strokeWidth="14"
                    fill="transparent"
                    strokeDasharray="238.76"
                    strokeDashoffset="208.91"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-mono text-neutral-400">Total Seed</span>
                  <span className="text-2xl font-heading font-bold text-white">₹8.0 Cr</span>
                  <span className="text-[10px] font-mono text-amber-400 font-bold">100% Tangible</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="text-white">87.5% Property (₹7.0 Cr)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400" />
                  <span className="text-white">12.5% Legal (₹1.0 Cr)</span>
                </div>
              </div>
            </div>

            {/* Tranches Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 rounded-2xl bg-black/60 border-l-4 border-amber-400 border-white/[0.1]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-300 font-bold uppercase">Tranche 01 · 87.5%</span>
                  <span className="text-base font-mono font-bold text-white">₹7,00,00,000</span>
                </div>
                <h4 className="text-lg font-heading font-bold text-white mt-1">
                  Property Construction &amp; Asset Development
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Direct capital expenditure to construct, finish, and fit-out the Phase 1 premium co-living facility (28 rooms) on our 200 sq yard Gurugram plot. Creates a tangible, debt-free physical asset that eliminates commercial lease liabilities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border-l-4 border-cyan-400 border-white/[0.1]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300 font-bold uppercase">Tranche 02 · 12.5%</span>
                  <span className="text-base font-mono font-bold text-white">₹1,00,00,000</span>
                </div>
                <h4 className="text-lg font-heading font-bold text-white mt-1">
                  Runway, Legal &amp; SPV Structuring
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Funding the corporate operational runway, core management salaries, complex legal structuring of the real estate SPV, regulatory compliance, and commercial PG licensing for audit readiness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            THE 1-TO-4 ARBITRAGE ENGINE
           ---------------------------------------------------- */}
        <div className="mb-14 rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0b1424] to-[#080d19] border border-cyan-400/40 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-300 font-bold mb-3">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>THE 1-TO-4 ARBITRAGE ENGINE</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
            The Fixed Formula: 4 Buyers = 1 Free Unit
          </h3>

          <p className="mt-2 text-sm text-neutral-300 font-light max-w-3xl">
            The core mathematics of Alpha are built on a highly predictable, fixed ratio. For every 4 purchasing entities we incubate, Alpha underwrites a block of 5 units with the developer at a 20% discount.
          </p>

          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-black/75 border border-white/[0.1]">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-900 border border-cyan-400/30 text-center">
                    <Users2 className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">Member 0{idx}</span>
                    <span className="text-xs font-mono font-bold text-white block mt-0.5">₹18L SPV</span>
                    <span className="text-[9px] text-emerald-400 font-mono">+ Bank Loan</span>
                  </div>
                ))}
              </div>

              <div className="text-center font-mono font-bold text-neutral-400 text-sm flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 text-cyan-400 hidden md:block" />
                <span className="text-xs text-amber-300">20% Bulk MoU</span>
              </div>

              <div className="md:col-span-1 p-5 rounded-2xl bg-gradient-to-b from-amber-500/25 to-amber-950/40 border-2 border-amber-400 text-center shadow-[0_0_25px_rgba(245,158,11,0.35)] animate-pulse-slow">
                <Building2 className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                <span className="text-[10px] font-mono text-amber-300 font-bold uppercase block">5th Unit (FREE)</span>
                <span className="text-xs sm:text-sm font-heading font-extrabold text-white block mt-0.5">Alpha Equity</span>
                <span className="text-[9px] text-amber-200 font-mono block mt-1">₹90L Debt-Free</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-200 font-light">
              <div>
                <strong className="text-cyan-300 block font-mono text-xs uppercase mb-1">The Members</strong>
                4 members secure 4 homes at market rate, funded entirely by their 36-month SPV contributions and retail home loans.
              </div>
              <div>
                <strong className="text-amber-300 block font-mono text-xs uppercase mb-1">The Yield</strong>
                The 5th unit is retained by Alpha—entirely free and clear of debt—representing pure equity capture on the arbitrage spread.
              </div>
              <div>
                <strong className="text-emerald-300 block font-mono text-xs uppercase mb-1">The Scale</strong>
                We incubate 32 members in Phase 1 (yielding 8 free units) and 52 members in Phase 2 (yielding 13 free units).
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            VENTURE-SCALE METRICS
           ---------------------------------------------------- */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
              Venture-Scale Metrics
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light">
              Tier-1 Private Equity returns backed by tangible real estate assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-black/70 border border-amber-400/40 shadow-xl group hover:border-amber-300 transition-all">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                Internal Rate of Return (IRR)
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-amber-300 mt-2 font-mono tracking-tight group-hover:scale-105 transition-transform">
                21.25%
              </div>
              <span className="text-[11px] font-mono text-neutral-400 block mt-2">
                Net to seed investors
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-black/70 border border-emerald-400/40 shadow-xl group hover:border-emerald-300 transition-all">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                Multiple on Invested Capital (MOIC)
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-emerald-300 mt-2 font-mono tracking-tight group-hover:scale-105 transition-transform">
                2.45x
              </div>
              <span className="text-[11px] font-mono text-neutral-400 block mt-2">
                On ₹8.0 Cr Seed Equity
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-black/70 border border-cyan-400/40 shadow-xl group hover:border-cyan-300 transition-all">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                Corporate Debt-to-Equity
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-cyan-300 mt-2 font-mono tracking-tight group-hover:scale-105 transition-transform">
                0.0x
              </div>
              <span className="text-[11px] font-mono text-neutral-400 block mt-2">
                Zero commercial debt held
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-black/70 border border-purple-400/40 shadow-xl group hover:border-purple-300 transition-all">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                Phase 1 Operating Margin
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-purple-300 mt-2 font-mono tracking-tight group-hover:scale-105 transition-transform">
                15.6%
              </div>
              <span className="text-[11px] font-mono text-neutral-400 block mt-2">
                Day 1 positive cash-flow
              </span>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            THE 72-MONTH ENTERPRISE CASH FLOW
           ---------------------------------------------------- */}
        <div className="mb-14 rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#10141f] to-[#080b12] border border-white/[0.12] shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300 font-bold mb-3">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>THE 72-MONTH ENTERPRISE CASH FLOW</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
            Organic 2-Phase Liquidity Horizon
          </h3>

          <p className="mt-2 text-sm text-neutral-300 font-light max-w-3xl">
            Our initial seed capital strictly funds the Phase 1 Proof of Concept. Upon Phase 1 graduation in Year 3, Alpha leverages its track record to scale into Phase 2 through Alpha-owned and operated SPVs, holding all retained units in-house and maximizing returns without requiring further dilution.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-white/[0.15] text-xs uppercase tracking-wider text-neutral-400">
                  <th className="py-3 px-4">Timeline</th>
                  <th className="py-3 px-4">Operational Milestone</th>
                  <th className="py-3 px-4 text-right">Projected Cash Flow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.07]">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-red-400">Year 0</td>
                  <td className="py-3.5 px-4 text-neutral-200">Seed Investment / Phase 1 Construction &amp; Launch</td>
                  <td className="py-3.5 px-4 text-right font-bold text-red-400">-₹8,00,00,000</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-neutral-300">Year 1-2</td>
                  <td className="py-3.5 px-4 text-neutral-300">Phase 1 Incubation (Ops sustained by lifestyle fees)</td>
                  <td className="py-3.5 px-4 text-right text-neutral-400">₹0</td>
                </tr>
                <tr className="bg-emerald-950/20">
                  <td className="py-3.5 px-4 font-bold text-emerald-300">Year 3</td>
                  <td className="py-3.5 px-4 text-white font-semibold">Phase 1 Liquidity: 32 Members Graduate. 8 Units Held in Alpha-Operated SPVs.</td>
                  <td className="py-3.5 px-4 text-right font-bold text-emerald-300">+₹7,45,92,000</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-neutral-300">Year 4-5</td>
                  <td className="py-3.5 px-4 text-neutral-300">Phase 2 Launched (52 Members). Scaled via Alpha Owned &amp; Operated SPVs.</td>
                  <td className="py-3.5 px-4 text-right text-neutral-400">₹0</td>
                </tr>
                <tr className="bg-amber-950/20">
                  <td className="py-3.5 px-4 font-bold text-amber-300">Year 6</td>
                  <td className="py-3.5 px-4 text-white font-semibold">Phase 2 Liquidity: 52 Members Graduate. 13 Units Retained &amp; Held in SPVs.</td>
                  <td className="py-3.5 px-4 text-right font-bold text-amber-300">+₹12,12,12,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-black/60 border border-emerald-400/40 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              Total Gross Return (Year 6)
            </span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-300">
              ₹19,58,04,000
            </span>
          </div>
        </div>

        {/* ----------------------------------------------------
            SCALING & DOWNSIDE PROTECTION
           ---------------------------------------------------- */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
              Scaling &amp; Downside Protection
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light">
              Structural risk mitigation and capital insulation strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#0c121e] border border-white/[0.12] hover:border-amber-400/50 transition-all">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">01 / DOWNSIDE FLOOR</span>
              <h4 className="text-lg font-heading font-bold text-white">The Anchor Asset (Phase 1 Protection)</h4>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Because 87.5% of the initial seed capital is deployed directly into constructing a premium residential building on our own 200 sq yard plot, the investor downside is heavily insulated. We are not burning cash on customer acquisition; we are building a hard asset.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0c121e] border border-white/[0.12] hover:border-cyan-400/50 transition-all">
              <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">02 / INSTITUTIONAL CONTROL</span>
              <h4 className="text-lg font-heading font-bold text-white">Owned &amp; Operated SPVs (Phase 2 Scaling)</h4>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                We directly own and operate all SPVs. The 8 additional units captured from Phase 1 arbitrage are held again by dedicated SPVs operated by Alpha, creating an institutional asset foundation that yields compounding rental income and maintains 100% operational excellence.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0c121e] border border-white/[0.12] hover:border-emerald-400/50 transition-all">
              <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">03 / PURCHASING POWER</span>
              <h4 className="text-lg font-heading font-bold text-white">Couples &amp; High-Density Yield</h4>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                By targeting double-income couples—who share a single premium suite but function as a unified financial purchasing entity—we maximize SPV capital generation per square foot while maintaining luxury spatial standards.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            DATA ROOM PASSWORD GATE
           ---------------------------------------------------- */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#131b2c] to-[#090d16] border border-amber-400/40 shadow-2xl">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/35 text-amber-300 font-mono text-xs uppercase tracking-wider mb-4">
              <LockKeyhole className="w-3.5 h-3.5" />
              <span>THE PRE-SEED ROUND</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
              Access Institutional Data Room
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Alpha is currently raising ₹8 Crore to execute Phase 1, build the anchor facility, and finalize the SPV regulatory framework. Enter credentials below for audited models and developer MoUs.
            </p>

            {!dataRoomUnlocked ? (
              <form onSubmit={handlePasswordSubmit} className="mt-8 space-y-4">
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter Data Room Password (Hint: ALPHA2026)"
                    value={dataRoomPassword}
                    onChange={(e) => setDataRoomPassword(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-black/80 border border-white/[0.2] focus:border-amber-400 text-white font-mono text-sm tracking-widest placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400 shadow-inner"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-heading font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-amber-500/30"
                  >
                    ENTER DATA ROOM
                  </button>
                </div>
                {dataRoomError && (
                  <p className="text-xs font-mono text-red-400">
                    Invalid passcode. Contact partner@alphacompany.in for access credentials or use ALPHA2026.
                  </p>
                )}
              </form>
            ) : (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-950/30 border border-emerald-400/50 text-left animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold mb-3">
                  <Check className="w-4 h-4" />
                  <span>Institutional Clearance Granted · Room Active</span>
                </div>
                <div className="space-y-3 text-xs font-mono text-neutral-200">
                  <div className="p-3 rounded-lg bg-black/50 border border-white/[0.1] flex items-center justify-between">
                    <span>1. Financial Model v3.4 (72-Month Projections)</span>
                    <span className="text-emerald-400 font-bold">PDF / XLS</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50 border border-white/[0.1] flex items-center justify-between">
                    <span>2. Tier-1 Developer Master MoU Framework</span>
                    <span className="text-emerald-400 font-bold">RERA Haryana</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50 border border-white/[0.1] flex items-center justify-between">
                    <span>3. Gurugram Prime 200 sq yd Land Deed &amp; Permits</span>
                    <span className="text-emerald-400 font-bold">Clear Title</span>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-emerald-500/20 text-center">
                  <span className="text-xs text-neutral-300">Direct Partner Line: </span>
                  <a href="mailto:partner@alphacompany.in" className="text-amber-300 font-mono font-bold hover:underline">
                    partner@alphacompany.in
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
