import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CTA_CONTENT } from '../data/content';

interface CtaBannerProps {
  onStartProject: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartProject }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#0a1122] border border-blue-950/80 shadow-2xl p-8 sm:p-12 lg:p-14 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 left-1/3 w-60 h-60 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Headline */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15] font-['Space_Grotesk',sans-serif]">
                {CTA_CONTENT.headline}
                <br />
                {CTA_CONTENT.sublinePrefix}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                  {CTA_CONTENT.sublineHighlight}
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="lg:col-span-4">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {CTA_CONTENT.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="lg:col-span-3 flex justify-start lg:justify-end">
              <button
                id="cta-start-project-btn"
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>{CTA_CONTENT.buttonText}</span>
                <ArrowUpRight className="w-5 h-5 text-white/90" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
