import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2, ShieldAlert, Clock, ArrowRight, ArrowLeft, Download, FileText } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedIndustry?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedIndustry,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    projectName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: preselectedIndustry || 'Automotive',
    partCategory: '5-Axis CNC Milling',
    quantity: '100 - 500 units',
    material: '6061-T6 Aluminum',
    tolerance: 'High Precision (±0.01 mm)',
    surfaceFinish: 'Bead Blasted + Clear Anodize',
    notes: '',
  });

  if (!isOpen) return null;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRfq = `RFQ-FGX-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(generatedRfq);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setUploadedFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#0c1322] border border-slate-800 text-slate-100 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-[#080d18]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Space_Grotesk',sans-serif] text-white">
                Request for Production Quote (RFQ)
              </h3>
              <p className="text-xs text-slate-400">
                Guaranteed response with complete DFM engineering feedback within 24 hours
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {!isSubmitted && (
          <div className="px-6 py-3 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs font-semibold">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-blue-400' : 'text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                1
              </span>
              <span>Project &amp; CAD</span>
            </div>
            <div className="w-8 h-[1px] bg-slate-800"></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-blue-400' : 'text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                2
              </span>
              <span>Technical Specs</span>
            </div>
            <div className="w-8 h-[1px] bg-slate-800"></div>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-blue-400' : 'text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                3
              </span>
              <span>Contact &amp; Review</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                  RFQ Received Successfully
                </span>
                <h4 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white mt-1">
                  Reference: {rfqNumber}
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-white">{formData.companyName || formData.email}</strong>. Our senior manufacturing engineers are reviewing your specifications and CAD models.
                </p>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Material Selected:</span>
                  <span className="font-semibold text-white">{formData.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Process / Category:</span>
                  <span className="font-semibold text-white">{formData.partCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tolerance Class:</span>
                  <span className="font-semibold text-white">{formData.tolerance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Volume:</span>
                  <span className="font-semibold text-white">{formData.quantity}</span>
                </div>
                {uploadedFile && (
                  <div className="flex justify-between text-blue-400">
                    <span>Uploaded CAD File:</span>
                    <span className="truncate max-w-[180px] font-semibold">{uploadedFile.name}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Project & CAD */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project / Part Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. High-Pressure Manifold Block"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Industry Sector
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Automotive">Automotive &amp; EV</option>
                        <option value="Aerospace">Aerospace &amp; Defense</option>
                        <option value="Energy">Energy, Oil &amp; Gas</option>
                        <option value="Construction">Heavy Construction</option>
                        <option value="Industrial Equipment">Industrial Machinery</option>
                        <option value="Electronics">Electronics &amp; Semi</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Manufacturing Process
                      </label>
                      <select
                        value={formData.partCategory}
                        onChange={(e) => setFormData({ ...formData, partCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="5-Axis CNC Milling">5-Axis CNC Milling</option>
                        <option value="CNC Turning & Swiss Turning">CNC Turning &amp; Swiss Turning</option>
                        <option value="Precision Metal Fabrication">Precision Sheet Metal &amp; Laser</option>
                        <option value="Robotic Welding Assembly">Robotic Automated Welding</option>
                        <option value="Wire EDM & Micro Grinding">Wire EDM &amp; Sub-Micron Grinding</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Target Production Volume
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Prototype (1 - 10 units)">Prototype (1 - 10 units)</option>
                        <option value="Pilot Run (10 - 100 units)">Pilot Run (10 - 100 units)</option>
                        <option value="100 - 500 units">Batch Production (100 - 500 units)</option>
                        <option value="1,000 - 10,000+ units">High Volume (1,000 - 10,000+ units)</option>
                        <option value="Scheduled Blanket Orders">Continuous Blanket Delivery</option>
                      </select>
                    </div>
                  </div>

                  {/* CAD File Drag & Drop */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      CAD Model or Technical Drawing (Optional)
                    </label>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
                        isDragging
                          ? 'border-blue-500 bg-blue-950/30'
                          : 'border-slate-700 hover:border-slate-600 bg-slate-900/50'
                      }`}
                      onClick={() => document.getElementById('cad-upload-input')?.click()}
                    >
                      <input
                        id="cad-upload-input"
                        type="file"
                        className="hidden"
                        accept=".step,.stp,.iges,.igs,.dxf,.dwg,.pdf,.sldprt,.x_t"
                        onChange={handleFileChange}
                      />
                      <UploadCloud className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      {uploadedFile ? (
                        <div className="text-sm text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)
                        </div>
                      ) : (
                        <>
                          <div className="text-sm font-medium text-slate-200">
                            Drop your 3D CAD or PDF drawings here, or{' '}
                            <span className="text-blue-400 underline">browse files</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            Supported formats: STEP, STP, IGES, SLDPRT, DXF, PDF (Max 100MB)
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                    >
                      Next: Technical Specs
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Technical Specifications */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Material Grade
                      </label>
                      <select
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="6061-T6 Aluminum">6061-T6 Aluminum (Aerospace/General)</option>
                        <option value="7075-T6 Aluminum">7075-T6 Aluminum (High Strength)</option>
                        <option value="316L Stainless Steel">316L Stainless Steel (Corrosion Resistant)</option>
                        <option value="304 Stainless Steel">304 Stainless Steel (Standard)</option>
                        <option value="Titanium Grade 5 (Ti-6Al-4V)">Titanium Grade 5 (Ti-6Al-4V)</option>
                        <option value="Inconel 718">Inconel 718 (Extreme Temperature)</option>
                        <option value="4140 Alloy Steel">4140 Alloy Steel (Pre-hardened)</option>
                        <option value="Hardox 450/500">Hardox 450/500 (Abrasion Resistant)</option>
                        <option value="Brass C36000">Brass C36000 (Free-cutting)</option>
                        <option value="PEEK / Delrin">Engineering Plastics (PEEK, Delrin)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Tolerance Class Required
                      </label>
                      <select
                        value={formData.tolerance}
                        onChange={(e) => setFormData({ ...formData, tolerance: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Ultra-Precision (±0.002 mm / 0.00008&quot;)">
                          Ultra-Precision (±0.002 mm / 0.00008")
                        </option>
                        <option value="High Precision (±0.01 mm / 0.0004&quot;)">
                          High Precision (±0.01 mm / 0.0004")
                        </option>
                        <option value="Standard Machining (±0.05 mm / 0.002&quot;)">
                          Standard Machining (±0.05 mm / 0.002")
                        </option>
                        <option value="Commercial Sheet Metal (±0.1 mm)">
                          Commercial Sheet Metal (±0.1 mm)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Surface Finish &amp; Post-Processing
                    </label>
                    <select
                      value={formData.surfaceFinish}
                      onChange={(e) => setFormData({ ...formData, surfaceFinish: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="As Machined (Ra 1.6 μm)">As Machined (Ra 1.6 μm)</option>
                      <option value="Bead Blasted + Clear Anodize">Bead Blasted + Clear Anodize (MIL-A-8625 Type II)</option>
                      <option value="Hardcoat Anodize (MIL-A-8625 Type III)">Hardcoat Anodize (MIL-A-8625 Type III)</option>
                      <option value="Electropolished & Passivated">Electropolished &amp; Passivated (ASTM A967)</option>
                      <option value="Black Oxide / Chemical Film">Black Oxide / Chemical Film (Chromate)</option>
                      <option value="Industrial Powder Coating">Industrial Powder Coating (Standard RAL)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Special Requirements or Critical Dimensions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Include notes on thread pitch, critical datum features, CMM inspection reports, certificate of conformance, or heat treatment."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                    >
                      Next: Contact Info
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submit */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Aero Systems"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="engineer@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Target Delivery Date
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2-3 Weeks / Urgent"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-xs space-y-1.5">
                    <div className="font-semibold text-slate-300 mb-1">Quote Summary Review:</div>
                    <div className="text-slate-400">
                      Process: <span className="text-white">{formData.partCategory}</span> | Material: <span className="text-white">{formData.material}</span>
                    </div>
                    <div className="text-slate-400">
                      Tolerance: <span className="text-white">{formData.tolerance}</span> | Volume: <span className="text-white">{formData.quantity}</span>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
                    >
                      Submit RFQ for Instant Review
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
