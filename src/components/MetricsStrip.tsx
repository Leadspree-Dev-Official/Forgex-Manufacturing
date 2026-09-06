import React from 'react';
import { Calendar, Building2, Wrench, ShieldCheck } from 'lucide-react';
import { STATS_CONTENT } from '../data/content';

export const MetricsStrip: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar':
        return <Calendar className="w-6 h-6 text-slate-700" />;
      case 'building':
        return <Building2 className="w-6 h-6 text-slate-700" />;
      case 'machine':
        return <Wrench className="w-6 h-6 text-slate-700" />;
      case 'shield-check':
      default:
        return <ShieldCheck className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-slate-200">
          {STATS_CONTENT.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex items-center gap-4 ${
                index !== 0 ? 'lg:pl-8' : ''
              } ${index !== STATS_CONTENT.length - 1 ? 'lg:pr-8' : ''}`}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/80">
                {getStatIcon(stat.iconName)}
              </div>

              {/* Number and Label */}
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk',sans-serif] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
