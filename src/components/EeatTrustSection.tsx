import React from 'react';
import { ShieldCheck, Award, Landmark, Building2, CheckCircle2, FileText, UserCheck } from 'lucide-react';

export const EeatTrustSection: React.FC = () => {
  return (
    <section id="eeat-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Trust &amp; Security</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          How Your Money &amp; Property Are Protected
        </h2>
        <p className="mt-3 text-neutral-300 text-sm sm:text-base font-light">
          Your capital is backed by registered real estate equity and safeguarded through regulated Indian institutional frameworks.
        </p>
      </div>

      {/* 4 Pillars of E-E-A-T */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Pillar 1: Escrow Banking */}
        <div className="p-6 rounded-3xl bg-neutral-900/80 border border-white/[0.1] hover:border-cyan-400/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-5">
              <Landmark className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
              Custody
            </span>
            <h3 className="text-lg font-heading font-bold text-white">
              ICICI Escrow Account
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Every ₹50,000 monthly contribution is deposited directly into a designated ICICI Escrow custody account. Funds cannot be commingled or diverted.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Scheduled Bank Custody</span>
          </div>
        </div>

        {/* Pillar 2: RERA Compliance */}
        <div className="p-6 rounded-3xl bg-neutral-900/80 border border-white/[0.1] hover:border-emerald-400/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-5">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
              Compliance
            </span>
            <h3 className="text-lg font-heading font-bold text-white">
              Haryana RERA Aligned
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Property developments adhere to HRERA real estate norms with clear encumbrance certificates, transparent construction milestones, and title insurance.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Title Checked &amp; Insured</span>
          </div>
        </div>

        {/* Pillar 3: SEBI Trustee Structure */}
        <div className="p-6 rounded-3xl bg-neutral-900/80 border border-white/[0.1] hover:border-purple-400/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-5">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold block mb-1">
              Governance
            </span>
            <h3 className="text-lg font-heading font-bold text-white">
              SEBI Trustee Oversight
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              The property Special Purpose Vehicle (SPV) operates under an independent trustee regulated by SEBI, ensuring strict fiduciary protection for all 32 residents.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Fiduciary SPV Trust</span>
          </div>
        </div>

        {/* Pillar 4: Big-4 Audits */}
        <div className="p-6 rounded-3xl bg-neutral-900/80 border border-white/[0.1] hover:border-amber-400/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-5">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
              Auditing
            </span>
            <h3 className="text-lg font-heading font-bold text-white">
              Quarterly Audit Reports
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Transparent balance sheets and construction valuation updates compiled by independent Chartered Accountants and distributed directly to every member.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Published Quarterly</span>
          </div>
        </div>

      </div>

      {/* Advisory & Leadership Credibility Card */}
      <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-neutral-900/90 via-[#0a1420] to-neutral-900/90 border border-white/[0.12] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider">
              Expertise &amp; Underwriting Experience
            </span>
          </div>
          <h4 className="text-xl font-heading font-bold text-white">
            Led by Real Estate Conveyancing &amp; Tier-1 Fintech Veterans
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-2xl leading-relaxed">
            Our advisory council brings 35+ years of combined experience across Gurugram prime residential development, structured debt underwriting with HDFC &amp; SBI, and corporate lease management.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-center px-4 py-3 rounded-2xl bg-black/50 border border-white/[0.08]">
            <span className="block font-heading font-bold text-xl text-emerald-400">100%</span>
            <span className="text-[10px] font-mono uppercase text-neutral-400">Title Verification</span>
          </div>
          <div className="text-center px-4 py-3 rounded-2xl bg-black/50 border border-white/[0.08]">
            <span className="block font-heading font-bold text-xl text-cyan-400">₹0</span>
            <span className="text-[10px] font-mono uppercase text-neutral-400">Developer Debt</span>
          </div>
        </div>
      </div>
    </section>
  );
};
