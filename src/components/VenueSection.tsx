import React, { useState } from 'react';
import { MapPin, Navigation, Car, Train, Building2, ExternalLink, Copy, Check, Info } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(EVENT_DATA.meta.venueAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="py-20 sm:py-28 bg-[#FAF9F6] border-t border-b border-notion-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md font-semibold">
              IN-PERSON DESTINATION
            </span>
            <span className="text-xs font-mono text-notion-faint">// 06</span>
          </div>

          <h2 className="section-title">
            {EVENT_DATA.venueDetails.title}
          </h2>

          <p className="text-base sm:text-lg text-notion-muted">
            Hosted at the iconic One Skymark corporate campus in Sector 98, Noida.
          </p>
        </div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (7 cols): Address details, Transit, Amenities */}
          <div className="lg:col-span-7 bg-white border border-notion-border rounded-2xl p-6 sm:p-8 shadow-notion flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Complex Name & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-notion-border pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-notion-text">
                      {EVENT_DATA.venueDetails.name}
                    </h3>
                    <p className="text-xs font-mono text-notion-muted">
                      {EVENT_DATA.venueDetails.complex} • {EVENT_DATA.venueDetails.floors}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Confirmed Host Facility</span>
                </span>
              </div>

              {/* Exact Address */}
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-notion-border space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-notion-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>FULL ADDRESS</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-[11px] text-notion-text hover:text-emerald-700 transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-notion-muted" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm font-medium text-notion-text leading-relaxed">
                  {EVENT_DATA.meta.venueAddress}
                </p>
              </div>

              {/* Transit & Commute Guidance */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-notion-muted flex items-center gap-1.5">
                  <Train className="w-3.5 h-3.5 text-blue-600" />
                  <span>TRANSIT & COMMUTE ADVISORY</span>
                </h4>
                <div className="space-y-2 text-xs text-notion-text/90">
                  {EVENT_DATA.venueDetails.metroTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF9F6]/80 border border-notion-border/60">
                      <span className="font-mono text-emerald-700 font-bold text-[11px] mt-0.5">0{idx + 1}.</span>
                      <span className="leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue Amenities */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-notion-muted uppercase mb-2">
                  VENUE AMENITIES:
                </div>
                <div className="flex flex-wrap gap-2">
                  {EVENT_DATA.venueDetails.amenities.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-white border border-notion-border text-xs text-notion-text shadow-2xs flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Get Directions CTA */}
            <div className="pt-4 border-t border-notion-border flex flex-col sm:flex-row items-center gap-3">
              <a
                href={EVENT_DATA.meta.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white font-medium text-xs sm:text-sm shadow-sm hover:bg-neutral-800 transition active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-nerd-green" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <span className="text-xs text-notion-muted font-mono">
                Coordinates: 28.5355° N, 77.3910° E
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Visual Map Card / Satellite Framing */}
          <div className="lg:col-span-5 bg-white border border-notion-border rounded-2xl overflow-hidden shadow-notion flex flex-col">
            
            {/* Map Top Bar */}
            <div className="px-4 py-2.5 bg-[#F9F8F5] border-b border-notion-border flex items-center justify-between text-xs font-mono text-notion-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-notion-text font-medium">ONE_SKYMARK_SECTOR_98</span>
              </div>
              <span>NOIDA, UP</span>
            </div>

            {/* Stylized Interactive Map Container */}
            <div className="relative flex-1 min-h-[300px] bg-neutral-900 flex items-center justify-center p-6 overflow-hidden">
              {/* Ambient Grid overlay */}
              <div className="absolute inset-0 nerd-dark-grid opacity-30" />
              
              {/* Radar pulse circles */}
              <div className="absolute w-64 h-64 rounded-full border border-emerald-500/20 animate-ping opacity-40" />
              <div className="absolute w-44 h-44 rounded-full border border-emerald-500/30" />
              <div className="absolute w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/50" />

              {/* Pin indicator */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center shadow-nerd-glow animate-bounce">
                  <MapPin className="w-6 h-6 fill-neutral-950 text-emerald-400" />
                </div>
                <div className="bg-neutral-950/90 border border-neutral-700/80 rounded-xl px-4 py-2 text-white shadow-xl backdrop-blur-md">
                  <div className="font-bold text-xs text-white">Paytm Office (One Skymark)</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Tower D • Sector 98 Noida</div>
                </div>
              </div>

              {/* Map Footer Overlay button */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <a
                  href={EVENT_DATA.meta.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-800/90 border border-neutral-700 text-white text-xs font-mono hover:bg-neutral-700 transition backdrop-blur-sm"
                >
                  <span>Open Full Satellite Navigation</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Security Check-in Reminder Note */}
            <div className="p-4 bg-[#FAF9F6] border-t border-notion-border flex items-start gap-2.5 text-xs text-notion-muted">
              <Info className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>
                Please carry a valid government ID or corporate identification for swift entry pass verification at the ground floor security desk.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
