import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CAPABILITIES_CONTENT } from '../data/content';
import { CapabilityItem } from '../types';

interface CapabilitiesSectionProps {
  onSelectCapability: (capability: CapabilityItem) => void;
  onViewAll: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  onSelectCapability,
  onViewAll,
}) => {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2.5 block">
              CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk',sans-serif]">
              Engineering &amp; Manufacturing Capabilities
            </h2>
          </div>

          <button
            id="view-all-capabilities-btn"
            onClick={onViewAll}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors shrink-0"
          >
            <span>View All Capabilities</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES_CONTENT.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCapability(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-slate-700/50">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-['Space_Grotesk',sans-serif] text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Arrow Action */}
              <div className="p-6 pt-0 flex justify-end">
                <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200">
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
