import React from 'react';
import { ArrowUp, ExternalLink, Heart, Globe, Terminal } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-notion-border text-notion-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Top Tier: Brands, Description & Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-notion-border">
          
          {/* Brand Stack */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 text-white font-mono text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-nerd-green" />
                <span>nerds_room</span>
              </div>
              <span className="text-notion-faint select-none">×</span>
              <div className="flex items-center gap-1 font-bold text-notion-text text-sm">
                <span>✦ Notion Unlocked</span>
              </div>
            </div>
            <p className="text-xs text-notion-muted max-w-sm">
              An interactive community event for builders, designers, and operators to rethink modern productivity.
            </p>
          </div>

          {/* Quick Stats / Date Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-notion-border font-mono text-[11px] text-notion-text">
              15 Nov 2026 • 12:00 PM IST • Paytm Office, Noida
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#FAF9F6] border border-notion-border text-notion-text hover:bg-white hover:border-notion-borderHover transition"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Navigation Links & Community Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          
          {/* Col 1: Sections */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-semibold text-notion-text uppercase tracking-wider">
              NAVIGATION
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-notion-text transition">About the Event</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-notion-text transition">What You'll Experience</a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-notion-text transition">Run of Show (Agenda)</a>
              </li>
              <li>
                <a href="#audience" className="hover:text-notion-text transition">Who Should Attend</a>
              </li>
              <li>
                <a href="#venue" className="hover:text-notion-text transition">Venue & Directions</a>
              </li>
            </ul>
          </div>

          {/* Col 2: Event Details */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-semibold text-notion-text uppercase tracking-wider">
              EVENT INFO
            </div>
            <ul className="space-y-2 text-notion-muted">
              <li>Date: 15 November 2026</li>
              <li>Time: 12:00 PM – 4:00 PM</li>
              <li>Venue: Paytm Office, Noida</li>
              <li>Cost: 100% Free</li>
              <li>Registration: Via Luma</li>
            </ul>
          </div>

          {/* Col 3: Community Partners */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-semibold text-notion-text uppercase tracking-wider">
              COMMUNITY
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://nerdsroom.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-notion-text transition flex items-center gap-1"
                >
                  <span>Nerds Room Community</span>
                  <ExternalLink className="w-3 h-3 text-notion-faint" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-notion-text transition flex items-center gap-1"
                >
                  <span>Notion Official</span>
                  <ExternalLink className="w-3 h-3 text-notion-faint" />
                </a>
              </li>
              <li>
                <span className="text-notion-muted">The AI Collective</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Action */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-semibold text-notion-text uppercase tracking-wider">
              REGISTER
            </div>
            <p className="text-xs text-notion-muted leading-relaxed">
              Admission is subject to host approval. Secure your spot early.
            </p>
            <a
              href={EVENT_DATA.meta.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition"
            >
              <span>Luma Registration</span>
              <ExternalLink className="w-3 h-3 text-nerd-green" />
            </a>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Ethos */}
        <div className="pt-8 border-t border-notion-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-notion-faint">
          <div>
            © 2026 Notion Unlocked × Nerds Room. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span>Crafted for builders & operators in Delhi NCR</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
