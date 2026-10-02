import React from 'react';
import { ArrowUpRight, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

export const GOOGLE_FORM_URL = 'https://forms.gle/XEMebdEfc4zcya8p7';

export const ApplySection: React.FC = () => {
  return (
    <section id="waitlist-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-white/[0.08]">
      <div className="bg-gradient-to-b from-neutral-900/95 to-neutral-950/95 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-5">
          <Lock className="w-3.5 h-3.5 text-cyan-400" />
          <span>Cohort 01 Applications Open</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
          Enroll in the Waitlist
        </h2>

        <p className="mt-3 text-neutral-300 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
          Strictly capped at 32 curated members. Takes less than 60 seconds to complete your inquiry.
        </p>

        {/* Primary Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-black font-heading font-black text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Reassurance points */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Official Google Form</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Takes ~60 Seconds</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Zero Payment Today</span>
          </div>
        </div>

      </div>
    </section>
  );
};
