import React from 'react';
import { ArrowUpRight, Play, CheckCircle2 } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

interface HeroProps {
  onRequestQuote: () => void;
  onOpenTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onOpenTour }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden bg-[#070b12]">
      {/* Background Image with Dark Vignette & Industrial Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={HERO_CONTENT.heroBgImage}
          alt="Precision 5-Axis CNC Milling Machining Metal"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-[0.75] contrast-[1.15]"
          loading="eager"
        />
        {/* Dark gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b12] via-[#070b12]/85 to-[#070b12]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-[#070b12]/70" />
        {/* Subtle technical grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow / Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            {HERO_CONTENT.tagline}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-['Space_Grotesk',sans-serif] mb-6">
            {HERO_CONTENT.headlinePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-sky-300">
              {HERO_CONTENT.headlineHighlight}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-9 max-w-2xl">
            {HERO_CONTENT.subhead}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              id="hero-explore-capabilities-btn"
              href="#capabilities"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              {HERO_CONTENT.ctaPrimary}
            </a>

            <button
              id="hero-request-quote-btn"
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 backdrop-blur-sm group"
            >
              <span>{HERO_CONTENT.ctaSecondary}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Social Proof & Video Tour Bar */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Trusted by avatars */}
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-2 overflow-hidden">
                {HERO_CONTENT.avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#070b12] object-cover"
                    src={avatar}
                    alt={`Client partner ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="text-sm font-medium text-slate-300">
                <span className="text-white font-semibold">{HERO_CONTENT.trustText}</span>
              </div>
            </div>

            {/* Video Play Trigger */}
            <button
              id="hero-see-production-btn"
              onClick={onOpenTour}
              className="group flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <div className="relative w-10 h-10 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600/20 transition-all">
                <Play className="w-4 h-4 text-blue-400 fill-blue-400 ml-0.5 group-hover:scale-110 transition-transform" />
                <span className="absolute inset-0 rounded-full border border-blue-400/30 animate-ping opacity-75"></span>
              </div>
              <span className="group-hover:text-blue-400 transition-colors">{HERO_CONTENT.videoText}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
