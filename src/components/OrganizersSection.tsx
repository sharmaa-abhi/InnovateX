import React from 'react';
import { ExternalLink, Users, Sparkles, Terminal, Heart } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const OrganizersSection: React.FC = () => {
  return (
    <section id="community" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md font-semibold">
              COMMUNITY & STEWARDS
            </span>
            <span className="text-xs font-mono text-notion-faint">// 05</span>
          </div>

          <h2 className="section-title">
            Organizers & Community Partners
          </h2>

          <p className="text-base sm:text-lg text-notion-muted">
            Powered by grassroots builders, open collaboration, and community-driven technology enthusiasts.
          </p>
        </div>

        {/* Featured Communities: The AI Collective & Nerds Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: The AI Collective */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-notion-border shadow-notion hover:border-notion-borderHover transition space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                PRESENTED BY
              </span>
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-notion-text">
                {EVENT_DATA.community.presentedBy.name}
              </h3>
              <p className="text-xs font-mono text-notion-faint">
                Global AI & Innovation Network
              </p>
            </div>

            <p className="text-sm text-notion-muted leading-relaxed">
              {EVENT_DATA.community.presentedBy.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-notion-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Co-presenting Notion Unlocked Delhi NCR edition</span>
            </div>
          </div>

          {/* Card 2: Nerds Room */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 text-white shadow-notion hover:border-neutral-700 transition space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                HOST & COMMUNITY
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>nerdsroom.org</span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>{EVENT_DATA.community.host.name}</span>
                <span className="text-emerald-400 font-mono text-sm">~</span>
              </h3>
              <p className="text-xs font-mono text-neutral-400">
                Builders, Developers & Creators Ecosystem
              </p>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {EVENT_DATA.community.host.description}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={EVENT_DATA.community.host.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition"
              >
                <span>Visit Community Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] font-mono text-neutral-400">Delhi NCR Chapter</span>
            </div>
          </div>

        </div>

        {/* Individual Organizers & Hosts */}
        <div className="bg-white border border-notion-border rounded-2xl p-6 sm:p-8 shadow-notion mb-12">
          <div className="text-center max-w-xl mx-auto space-y-1 mb-8">
            <h3 className="text-xl font-bold text-notion-text">
              Organizing Team & Hosts
            </h3>
            <p className="text-xs text-notion-muted">
              Passionate community leaders bringing together the Notion & builder ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {EVENT_DATA.community.organizers.map((org) => (
              <div
                key={org.name}
                className="p-5 rounded-xl bg-[#FAF9F6] border border-notion-border hover:border-notion-borderHover hover:bg-white transition-all text-center space-y-3 group"
              >
                <div
                  role="img"
                  aria-label={`${org.name} initials avatar`}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-100 bg-emerald-50 font-mono text-base font-bold text-emerald-800 shadow-xs transition-transform group-hover:scale-105"
                >
                  {org.initials}
                </div>

                <div>
                  <h4 className="font-bold text-notion-text text-base group-hover:text-emerald-700 transition">
                    {org.name}
                  </h4>
                  <p className="text-xs font-mono text-notion-muted mt-0.5">
                    {org.role}
                  </p>
                </div>

                <div className="pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-notion-border text-notion-faint">
                    <span>Host / Organizer</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prominent Community Quote Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-blue-50 border border-emerald-200/70 p-8 sm:p-10 text-center shadow-xs">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-emerald-200 text-emerald-600 mb-4 shadow-2xs">
            <Heart className="w-5 h-5 fill-emerald-100 text-emerald-600" />
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif text-notion-text font-normal italic max-w-2xl mx-auto leading-relaxed">
            "{EVENT_DATA.meta.communityQuote}"
          </blockquote>
          <div className="mt-4 text-xs font-mono text-emerald-800 uppercase tracking-wider font-semibold">
            — The Nerds Room × Notion Ethos
          </div>
        </div>

      </div>
    </section>
  );
};
