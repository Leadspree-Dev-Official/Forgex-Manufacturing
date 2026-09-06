import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Award, Github } from 'lucide-react';
import { FOOTER_CREDITS } from '../data/content';

interface FooterProps {
  onRequestQuote: () => void;
  onOpenTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote, onOpenTour }) => {
  return (
    <footer id="contact" className="bg-[#070b14] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="md" variant="light" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              World-class precision engineering, CNC machining, and automated manufacturing solutions. Delivering mission-critical components to the aerospace, automotive, defense, and energy sectors.
            </p>

            {/* Certifications badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                ISO 9001:2015
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-200">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                AS9100 Rev D
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-200">
                IATF 16949
              </div>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Space_Grotesk',sans-serif]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Forgex
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-blue-400 transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-blue-400 transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenTour}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Virtual Facility Tour
                </button>
              </li>
              <li>
                <button
                  onClick={onRequestQuote}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-left font-semibold"
                >
                  Instant RFQ Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Space_Grotesk',sans-serif]">
              Manufacturing Fleet
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                <span>5-Axis CNC Milling &amp; Turning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                <span>Precision Metal Fabrication &amp; Laser</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                <span>Wire EDM &amp; Sub-Micron Grinding</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                <span>Automated Robotic Welding Cells</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                <span>Zeiss CMM Metrology &amp; QA Labs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                <span>Anodizing, Passivation &amp; Plating</span>
              </li>
            </ul>
          </div>

          {/* Contact & RFQ (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Space_Grotesk',sans-serif]">
              Inquiries &amp; Facility
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>Forgex Advanced Manufacturing Plant, Industrial Zone 4, Tech Park</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+18005553674" className="hover:text-white transition-colors">
                  +1 (800) 555-FORGEX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:rfq@forgexmfg.com" className="hover:text-white transition-colors">
                  rfq@forgexmfg.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-blue-600/20"
              >
                Request a Production Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Required Attributions & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          {/* Copyright */}
          <div>
            © {new Date().getFullYear()} {FOOTER_CREDITS.companyName}. All rights reserved.
          </div>

          {/* Developer & Powered By - EXACT user requirements */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-300">
            {/* Developer link */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Developer:</span>
              <a
                href={FOOTER_CREDITS.developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 hover:underline transition-colors"
                id="footer-developer-link"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                {FOOTER_CREDITS.developerName}
                <ExternalLink className="w-3 h-3 text-blue-400/80" />
              </a>
            </div>

            <span className="hidden sm:inline text-slate-600">|</span>

            {/* Powered by link */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Powered by</span>
              <a
                href={`https://${FOOTER_CREDITS.poweredByName.includes('http') ? '' : ''}${FOOTER_CREDITS.poweredByUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 hover:underline transition-colors"
                id="footer-powered-by-link"
              >
                {FOOTER_CREDITS.poweredByName}
                <ExternalLink className="w-3 h-3 text-sky-400/80" />
              </a>
            </div>
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Supply</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Quality Manual</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
