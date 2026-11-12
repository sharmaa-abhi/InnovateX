import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Audience', href: '#audience' },
    { label: 'Venue', href: '#venue' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-notion-border shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Branding & Collaboration */}
          <a
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 text-notion-text transition focus:outline-hidden"
          >
            {/* Nerds Room Minimal Mark */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 text-white font-mono text-xs font-semibold tracking-tight shadow-xs group-hover:bg-neutral-800 transition">
              <span className="w-1.5 h-1.5 rounded-full bg-nerd-green animate-pulse" />
              <span>nerds_room</span>
            </div>

            {/* Collaboration Separator */}
            <span className="text-notion-faint text-sm font-light select-none">×</span>

            {/* Notion Unlocked Title */}
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#FAF9F6] border border-notion-border text-xs">
                ✦
              </span>
              <span className="text-sm sm:text-base font-bold tracking-tight text-notion-text group-hover:text-emerald-700 transition">
                Notion Unlocked
              </span>
            </div>
          </a>

          {/* Right Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-medium text-notion-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:text-notion-text hover:bg-neutral-100/70 transition"
              >
                {link.label}
              </a>
            ))}

            <div className="h-4 w-px bg-notion-border mx-2" />

            {/* Register CTA Button */}
            <a
              href={EVENT_DATA.meta.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onRegisterClick}
              className="btn-primary px-4 py-2 text-xs"
            >
              <span>Request to Join</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-nerd-green" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href={EVENT_DATA.meta.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-3 py-1.5 text-xs"
            >
              <span>Join</span>
              <ArrowUpRight className="w-3 h-3 text-nerd-green" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-ghost rounded-md border border-notion-border bg-white p-2 text-notion-text hover:bg-neutral-50"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-notion-border px-4 pt-3 pb-6 mt-2 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-ghost block w-full rounded-md text-left font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-notion-border space-y-2">
            <div className="text-[11px] font-mono text-notion-muted px-3">
              Sunday, 15 Nov 2026 • Paytm Office, Noida
            </div>
            <a
              href={EVENT_DATA.meta.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full px-4 py-2.5 text-sm"
            >
              <span>Request to Join on Luma</span>
              <ArrowUpRight className="w-4 h-4 text-nerd-green" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
