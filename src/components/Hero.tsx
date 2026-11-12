import React from 'react';
import { ArrowUpRight, ArrowDown, Calendar, Clock, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { NotionWorkspaceMockup } from './NotionWorkspaceMockup';

interface HeroProps {
  onRegisterClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden notion-grid-pattern">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/10 via-blue-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges / Organizers */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 animate-fadeIn">
          {/* Presented By Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-notion-border text-xs text-notion-muted shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-notion-faint">Presented by</span>
            <span className="font-semibold text-notion-text">{EVENT_DATA.meta.presentedBy}</span>
          </div>

          <span className="text-notion-faint text-xs">•</span>

          {/* Hosted with Nerds Room Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-nerd-green" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Hosted with</span>
            <span className="font-semibold text-emerald-400">{EVENT_DATA.meta.hostCommunity}</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-notion-text">
            <span className="inline-block hover:scale-[1.01] transition-transform">
              {EVENT_DATA.meta.title}
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-notion-text/90 italic font-normal tracking-normal">
            {EVENT_DATA.meta.headline}
          </p>

          <p className="text-base sm:text-lg text-notion-muted max-w-2xl mx-auto leading-relaxed pt-1">
            {EVENT_DATA.meta.description}
          </p>
        </div>

        {/* Event Key Meta Pill Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-notion-text font-medium">
          <div className="flex items-center gap-1.5 text-neutral-800">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>{EVENT_DATA.meta.dateDisplay}</span>
          </div>

          <div className="hidden sm:inline text-notion-faint">•</div>

          <div className="flex items-center gap-1.5 text-neutral-800">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>{EVENT_DATA.meta.timeDisplay}</span>
          </div>

          <div className="hidden sm:inline text-notion-faint">•</div>

          <div className="flex items-center gap-1.5 text-neutral-800">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>{EVENT_DATA.meta.venueName}, Noida</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={EVENT_DATA.meta.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onRegisterClick}
            className="btn-primary w-full sm:w-auto px-6 py-3.5 group"
          >
            <span>Request to Join</span>
            <ArrowUpRight className="w-4 h-4 text-nerd-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#about"
            className="btn-secondary w-full sm:w-auto px-6 py-3.5"
          >
            <span>Explore the Event</span>
            <ArrowDown className="w-4 h-4 text-notion-faint" />
          </a>
        </div>

        {/* Host Approval Pill */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-mono text-notion-faint">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Free admission upon host approval via Luma</span>
        </div>

        {/* Hero Visual: Notion Workspace Mockup */}
        <div className="mt-14 sm:mt-18">
          <NotionWorkspaceMockup />
        </div>
      </div>
    </section>
  );
};
