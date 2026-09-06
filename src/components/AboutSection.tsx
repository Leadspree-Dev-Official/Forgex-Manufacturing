import React from 'react';
import { Target, Bot, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/content';
import { FeatureCardItem } from '../types';

interface AboutSectionProps {
  onSelectFeature: (feature: FeatureCardItem) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectFeature }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'crosshair':
        return <Target className="w-5 h-5 text-blue-400" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'shield':
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & 2-Column Header */}
        <div className="mb-14 lg:mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">
            {ABOUT_CONTENT.tagline}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-slate-900 leading-[1.18] font-['Space_Grotesk',sans-serif]">
                {ABOUT_CONTENT.headline}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-2">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {ABOUT_CONTENT.description}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Dark Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ABOUT_CONTENT.cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectFeature(card)}
              className="group relative bg-[#0a0f1d] text-white rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between min-h-[380px]"
            >
              {/* Background Image with Dark Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.2] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/85 to-transparent"></div>
              </div>

              {/* Card Header Content */}
              <div className="relative z-10 p-7">
                {/* Top Icon in rounded square */}
                <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center mb-6 shadow-inner backdrop-blur-md group-hover:border-blue-400 group-hover:bg-blue-900/60 transition-colors">
                  {getIcon(card.iconName)}
                </div>

                <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-3 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>

              {/* Card Footer Action */}
              <div className="relative z-10 p-7 pt-0 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-400/90 tracking-wide uppercase">
                  {card.metrics}
                </span>

                <div className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
