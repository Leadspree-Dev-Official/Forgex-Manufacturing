import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowUpRight, Menu, X, Phone, Mail, FileText } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote, onOpenTour }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Industries', href: '#industries' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" variant="light" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-request-quote-btn"
            onClick={onRequestQuote}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-[#0f172a] hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/60 transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-quote-quick-btn"
            onClick={onRequestQuote}
            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white"
          >
            Quote <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                id="mobile-menu-full-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25"
              >
                <FileText className="w-4 h-4" />
                Request a Custom Quote
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="mobile-menu-video-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800"
              >
                <span>Virtual Production Tour</span>
              </button>

              <div className="flex items-center justify-around pt-2 text-xs text-slate-400">
                <a href="tel:+18005553674" className="flex items-center gap-1.5 hover:text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  +1 (800) 555-FORGEX
                </a>
                <a href="mailto:rfq@forgexmfg.com" className="flex items-center gap-1.5 hover:text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  rfq@forgexmfg.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
