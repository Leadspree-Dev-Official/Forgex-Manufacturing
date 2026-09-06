import React from 'react';
import { X, ArrowRight, CheckCircle, ShieldCheck, Wrench, Layers } from 'lucide-react';
import { CapabilityItem, ProjectItem, FeatureCardItem } from '../types';

type DetailItem = CapabilityItem | ProjectItem | FeatureCardItem;

interface DetailModalProps {
  item: DetailItem | null;
  type: 'capability' | 'project' | 'feature' | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  item,
  type,
  onClose,
  onRequestQuote,
}) => {
  if (!item) return null;

  const isCapability = type === 'capability' || type === 'feature';
  const cap = item as CapabilityItem;
  const proj = item as ProjectItem;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Box */}
      <div className="relative bg-[#0b101d] border border-slate-800 text-slate-100 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Cover Image */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-900">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-[#0b101d]/60 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1 block">
              {type === 'project' ? 'Case Study / Engineering Milestone' : 'Manufacturing Discipline'}
            </span>
            <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-5">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {item.description}
          </p>

          {/* If Capability */}
          {cap.fullDetails && (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed">
              {cap.fullDetails}
            </div>
          )}

          {/* Project Details */}
          {type === 'project' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-400">Target Industry</div>
                <div className="font-semibold text-white mt-0.5">{proj.clientIndustry}</div>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-400">Lead Time</div>
                <div className="font-semibold text-white mt-0.5">{proj.leadTime}</div>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-400">Production Volume</div>
                <div className="font-semibold text-white mt-0.5">{proj.volume}</div>
              </div>
            </div>
          )}

          {proj.fullSpecs && (
            <div className="text-xs text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="font-semibold text-blue-400 uppercase tracking-wider">Engineering Highlights:</div>
              <p className="leading-relaxed">{proj.fullSpecs}</p>
            </div>
          )}

          {/* Capability Equipment & Materials */}
          {cap.equipment && cap.equipment.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5 text-blue-400" />
                Key Equipment &amp; Machinery
              </div>
              <div className="flex flex-wrap gap-2">
                {cap.equipment.map((eq, i) => (
                  <span key={i} className="text-xs bg-slate-900 text-slate-200 px-3 py-1 rounded-md border border-slate-800">
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          )}

          {cap.materials && cap.materials.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                Supported Raw Materials
              </div>
              <div className="flex flex-wrap gap-2">
                {cap.materials.map((mat, i) => (
                  <span key={i} className="text-xs bg-slate-900 text-slate-200 px-3 py-1 rounded-md border border-slate-800">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#080d1a] border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Have similar project requirements?
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
