import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Check, Copy, ExternalLink, CalendarPlus } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { LiveCountdown } from './LiveCountdown';

export const EventInfoStrip: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyDetails = () => {
    const text = `Notion Unlocked × Nerds Room\nDate: ${EVENT_DATA.meta.dateDisplay}\nTime: ${EVENT_DATA.meta.timeDisplay}\nVenue: ${EVENT_DATA.meta.venueName}, ${EVENT_DATA.meta.venueAddress}\nRSVP: ${EVENT_DATA.meta.registrationUrl}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Calendar Link generator for 15 Nov 2026 12:00 to 16:00 IST (UTC: 06:30 to 10:30)
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Notion Unlocked × Nerds Room'
  )}&dates=20261115T063000Z/20261115T103000Z&details=${encodeURIComponent(
    'Notion Unlocked at Paytm Office, Noida. Discover how Notion transforms how you organize, manage projects, and work with Notion AI.\n\nRegister: https://luma.com/6r8hgxec?tk=LQZ336'
  )}&location=${encodeURIComponent(EVENT_DATA.meta.venueAddress)}`;

  return (
    <section className="relative z-10 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-notion-border rounded-2xl shadow-notion p-5 sm:p-7">
        
        {/* Top Header: Strip Title & Live Countdown */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-notion-border">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nerd-green" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-notion-muted">
                EVENT DISPATCH // LOG_01
              </h2>
            </div>
            <p className="text-sm font-semibold text-notion-text">
              Key Event Parameters & Schedule
            </p>
          </div>

          {/* Countdown Clock */}
          <LiveCountdown targetDate={EVENT_DATA.meta.targetIsoDate} />
        </div>

        {/* 3 Prominent Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          
          {/* Card 1: DATE */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#FAF9F6] border border-notion-border hover:border-notion-borderHover hover:bg-white transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-notion-border text-notion-muted">
                CONFIRMED
              </span>
            </div>
            <div className="text-[11px] font-mono text-notion-muted uppercase tracking-wider">
              01 // DATE
            </div>
            <div className="text-lg font-bold text-notion-text mt-0.5">
              Sunday, 15 November 2026
            </div>
            <p className="text-xs text-notion-muted mt-1">
              Afternoon session • Doors open at 12:00 PM
            </p>
          </div>

          {/* Card 2: TIME */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#FAF9F6] border border-notion-border hover:border-notion-borderHover hover:bg-white transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-notion-border text-notion-muted">
                4 HOURS
              </span>
            </div>
            <div className="text-[11px] font-mono text-notion-muted uppercase tracking-wider">
              02 // TIME
            </div>
            <div className="text-lg font-bold text-notion-text mt-0.5">
              12:00 PM – 4:00 PM
            </div>
            <p className="text-xs text-notion-muted mt-1">
              Asia/Kolkata (IST) • 7 Curated segments
            </p>
          </div>

          {/* Card 3: LOCATION */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#FAF9F6] border border-notion-border hover:border-notion-borderHover hover:bg-white transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <a
                href={EVENT_DATA.meta.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-notion-border text-notion-text hover:text-emerald-700 flex items-center gap-1"
              >
                <span>MAPS</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
            <div className="text-[11px] font-mono text-notion-muted uppercase tracking-wider">
              03 // LOCATION
            </div>
            <div className="text-lg font-bold text-notion-text mt-0.5">
              Paytm Office, Noida
            </div>
            <p className="text-xs text-notion-muted mt-1">
              One Skymark, Tower D, Sector 98, Uttar Pradesh
            </p>
          </div>
        </div>

        {/* Action utility bar at bottom */}
        <div className="mt-5 pt-4 border-t border-notion-border/70 flex flex-wrap items-center justify-between gap-3 text-xs text-notion-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Admission: Free with host approval on Luma</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={gcalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FAF9F6] border border-notion-border text-notion-text hover:bg-white hover:border-notion-borderHover transition text-xs font-medium"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-blue-600" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              type="button"
              onClick={handleCopyDetails}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FAF9F6] border border-notion-border text-notion-text hover:bg-white hover:border-notion-borderHover transition text-xs font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-notion-muted" />
                  <span>Copy Info</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
