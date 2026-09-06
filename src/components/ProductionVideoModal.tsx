import React, { useState } from 'react';
import { X, Play, ShieldCheck, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductionVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProductionVideoModal: React.FC<ProductionVideoModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'video' | 'fleet' | 'qa'>('video');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Window */}
      <div className="relative bg-[#0a0f1d] border border-slate-800 text-slate-100 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden z-10 my-6">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#070a14]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <h3 className="text-base font-bold font-['Space_Grotesk',sans-serif] text-white">
                Forgex Production Facility &amp; Machinery Tour
              </h3>
              <p className="text-xs text-slate-400">
                85,000 sq.ft Climate-Controlled Manufacturing Campus
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-6 border-b border-slate-800 bg-slate-900/40 flex gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('video')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'video'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            Live Machine Feed
          </button>
          <button
            onClick={() => setActiveTab('fleet')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'fleet'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            Machinery Fleet (40+)
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'qa'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Metrology &amp; Quality Lab
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {activeTab === 'video' && (
            <div className="space-y-6">
              {/* Simulated High-Def Video Stream */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
                  alt="High speed 5-axis CNC Spindle in production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

                {/* Video HUD Overlays */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs border border-slate-700/60 font-mono">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-red-400 font-bold">LIVE CELL 04:</span>
                  <span className="text-slate-300">DMG MORI 5-AXIS SPINDLE 24,000 RPM</span>
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs border border-slate-700/60 font-mono text-slate-300">
                  FEED: 8.5 m/min | COOLANT: 70 BAR HIGH-PRESSURE
                </div>

                {/* Center Badge */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-800">
                  <div className="text-slate-300">
                    <strong className="text-white">Active Run:</strong> Aerospace Inconel 718 Impeller Blisk — Tolerance ±0.002 mm Verified
                  </div>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% In-Process Laser Probe
                  </span>
                </div>
              </div>

              {/* Facility stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">85,000</div>
                  <div className="text-xs text-slate-400">Sq. Ft Facility</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">42 Units</div>
                  <div className="text-xs text-slate-400">CNC Machining Centers</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">24 / 7</div>
                  <div className="text-xs text-slate-400">Automated Production</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">±0.002 mm</div>
                  <div className="text-xs text-slate-400">CMM Repeatability</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fleet' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="font-bold text-white text-base">5-Axis Simultaneous Milling</div>
                  <div className="text-blue-400 text-xs font-semibold">DMG MORI DMU 50 &amp; DMU 75 monoBLOCK</div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    20,000 RPM speedMaster spindle, dynamic 5-axis swivel rotary table, 60-tool changer, integrated workpiece laser measurement.
                  </p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="font-bold text-white text-base">Multi-Tasking Turning Centers</div>
                  <div className="text-blue-400 text-xs font-semibold">Mazak Integrex i-200 / i-300</div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Complete Done-In-One machining combining turning, milling, and 5-axis contouring in a single setup for shafts and impellers.
                  </p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="font-bold text-white text-base">10kW High-Speed Fiber Laser</div>
                  <div className="text-blue-400 text-xs font-semibold">Trumpf TruLaser 5030 Fiber</div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Cuts up to 30mm mild steel, 40mm stainless steel, and 25mm aluminum with automated nozzle changers and LiftMaster sheet loaders.
                  </p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="font-bold text-white text-base">Robotic Welding Cells</div>
                  <div className="text-blue-400 text-xs font-semibold">KUKA &amp; Fanuc 6-Axis Cold Metal Transfer</div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Dual-station robotic MIG/TIG/CMT welding with synchronized positioners for structural steel frames and pressure vessels.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="space-y-4">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-sm space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-base font-['Space_Grotesk',sans-serif]">
                  <ShieldCheck className="w-5 h-5" />
                  ISO 17025 Compliant Temperature-Controlled Metrology Laboratory
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Our inspection laboratory is maintained at precisely 20.0°C ± 0.5°C with positive pressure and continuous filtration to eliminate thermal drift and particulate contamination.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="text-white font-semibold text-xs">Zeiss PRISMO Ultra CMM</div>
                    <div className="text-slate-400 text-[11px]">Accuracy: 0.5 + L/500 μm</div>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="text-white font-semibold text-xs">Keyence Optical Comparator</div>
                    <div className="text-slate-400 text-[11px]">Instant 2D/3D profile scanning</div>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="text-white font-semibold text-xs">Full Material Traceability</div>
                    <div className="text-slate-400 text-[11px]">Mill test reports &amp; lot tracking</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="px-6 py-4 bg-[#070a14] border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Need custom specs or on-site facility audit?
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
          >
            Request a Quote for Your Part
          </button>
        </div>
      </div>
    </div>
  );
};
