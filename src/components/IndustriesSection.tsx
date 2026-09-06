import React, { useState } from 'react';
import { Car, Plane, Wind, Building, Cog, Cpu, ArrowRight, ShieldCheck, Layers, FileCheck } from 'lucide-react';
import { INDUSTRIES_CONTENT } from '../data/content';
import { IndustryItem } from '../types';

interface IndustriesSectionProps {
  onQuoteForIndustry: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onQuoteForIndustry }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_CONTENT[0]);

  const getIndustryIcon = (iconName: string, active: boolean) => {
    const iconClass = `w-7 h-7 transition-colors ${active ? 'text-blue-600' : 'text-slate-600'}`;
    switch (iconName) {
      case 'car':
        return <Car className={iconClass} />;
      case 'plane':
        return <Plane className={iconClass} />;
      case 'wind':
        return <Wind className={iconClass} />;
      case 'crane':
        return <Building className={iconClass} />;
      case 'gear':
        return <Cog className={iconClass} />;
      case 'cpu':
      default:
        return <Cpu className={iconClass} />;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk',sans-serif]">
            Engineered for Critical Sectors
          </h2>
        </div>

        {/* 6 Icons Horizontal Grid matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {INDUSTRIES_CONTENT.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-6 rounded-2xl text-center border transition-all duration-200 flex flex-col items-center justify-center gap-3 cursor-pointer group ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-600 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-blue-100' : 'bg-slate-100 group-hover:bg-slate-200/80'
                  }`}
                >
                  {getIndustryIcon(ind.iconName, isSelected)}
                </div>
                <span
                  className={`text-sm font-bold tracking-tight font-['Space_Grotesk',sans-serif] ${
                    isSelected ? 'text-blue-700' : 'text-slate-800'
                  }`}
                >
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Industry Deep-Dive Panel */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                {selectedIndustry.standards}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk',sans-serif] tracking-tight">
                Forgex for {selectedIndustry.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    Specialized Materials
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedIndustry.materials.map((mat, i) => (
                      <span key={i} className="text-xs bg-slate-900/80 text-slate-200 px-2.5 py-1 rounded-md border border-slate-700">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    <FileCheck className="w-3.5 h-3.5 text-blue-400" />
                    Key Tolerances
                  </div>
                  <div className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
                    {selectedIndustry.tolerance}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">100% CMM &amp; optical traceability</p>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Sample Engineered Components:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.sampleParts.map((part, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      • {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-left lg:text-right mb-6">
                <div className="text-sm text-slate-400 mb-1">Looking to manufacture for {selectedIndustry.name}?</div>
                <div className="text-lg font-semibold text-white">Rapid DFM &amp; Quote in 24 Hours</div>
              </div>

              <button
                id="industry-request-quote-btn"
                onClick={() => onQuoteForIndustry(selectedIndustry.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all duration-200 active:scale-95"
              >
                <span>Request {selectedIndustry.name} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
