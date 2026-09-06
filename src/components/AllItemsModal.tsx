import React, { useState } from 'react';
import { X, ArrowUpRight, Search, CheckCircle2 } from 'lucide-react';
import { CAPABILITIES_CONTENT, PROJECTS_CONTENT } from '../data/content';
import { CapabilityItem, ProjectItem } from '../types';

interface AllItemsModalProps {
  isOpen: boolean;
  type: 'capabilities' | 'projects';
  onClose: () => void;
  onSelectItem: (item: CapabilityItem | ProjectItem, type: 'capability' | 'project') => void;
  onRequestQuote: () => void;
}

export const AllItemsModal: React.FC<AllItemsModalProps> = ({
  isOpen,
  type,
  onClose,
  onSelectItem,
  onRequestQuote,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const isCapabilities = type === 'capabilities';

  const filteredCapabilities = CAPABILITIES_CONTENT.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.materials?.some((m) => m.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredProjects = PROJECTS_CONTENT.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.clientIndustry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Window */}
      <div className="relative bg-[#0a0f1d] border border-slate-800 text-slate-100 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-[#080d19]">
          <div>
            <h3 className="text-xl font-bold font-['Space_Grotesk',sans-serif] text-white">
              {isCapabilities ? 'All Manufacturing Capabilities' : 'All Production Projects'}
            </h3>
            <p className="text-xs text-slate-400">
              {isCapabilities
                ? 'Precision CNC milling, high-speed turning, sheet metal fabrication, EDM & assembly'
                : 'Selected high-tolerance industrial delivery programs and case studies'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Filter */}
        <div className="px-6 py-3.5 bg-slate-900/60 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={
              isCapabilities
                ? 'Search capabilities, materials (Titanium, Inconel, Aluminum)...'
                : 'Search projects, industries (Automotive, Aerospace)...'
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none text-sm text-white placeholder-slate-500 focus:outline-none w-full"
          />
        </div>

        {/* Grid of items */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {isCapabilities ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCapabilities.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onClose();
                    onSelectItem(item, 'capability');
                  }}
                  className="group p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer flex gap-4 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                    {item.tolerances && (
                      <span className="inline-block text-[11px] text-blue-400 font-medium mt-2 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                        {item.tolerances}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProjects.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onClose();
                    onSelectItem(item, 'project');
                  }}
                  className="group p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer flex gap-4 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-2 text-[11px] text-slate-500">
                      <span className="text-blue-400 font-semibold">{item.clientIndustry}</span>
                      <span>{item.volume}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#080d19] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">Need custom engineering analysis?</span>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
};
