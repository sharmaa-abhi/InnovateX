import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Ticket, Users, Calendar, MapPin } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

interface RegistrationCtaProps {
  onRegisterClick?: () => void;
}

export const RegistrationCta: React.FC<RegistrationCtaProps> = ({ onRegisterClick }) => {
  return (
    <section id="register" className="py-20 sm:py-28 relative overflow-hidden bg-neutral-950 text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/20 via-emerald-600/10 to-blue-600/15 blur-3xl rounded-full pointer-events-none -z-0" />
      <div className="absolute inset-0 nerd-dark-grid opacity-25 pointer-events-none -z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400 shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>LIMITED CAPACITY • IN-PERSON AT PAYTM NOIDA</span>
        </div>

        {/* Heading & Description */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Unlock Notion?
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Join fellow builders, professionals, creators, and innovators for an afternoon of smarter workflows, practical demonstrations, and meaningful connections.
          </p>
        </div>

        {/* Quick event meta grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sunday, 15 Nov 2026</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Paytm Office, Noida</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
            <Ticket className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cost: 100% Free</span>
          </div>
        </div>

        {/* CTA Button Box */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={EVENT_DATA.meta.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onRegisterClick}
            className="btn-primary w-full sm:w-auto px-8 py-4 group"
          >
            <span>Request to Join</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Host Approval Note */}
        <div className="max-w-md mx-auto p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-left flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-300 space-y-1">
            <div className="font-semibold text-white">⚡ Host Approval Required</div>
            <p className="text-[11px] text-neutral-400 leading-normal">
              Clicking above opens the official Luma event page in a new tab. All registrations are reviewed by the host team. You will receive a confirmation pass once approved.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
