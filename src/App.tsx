import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventInfoStrip } from './components/EventInfoStrip';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AgendaSection } from './components/AgendaSection';
import { AudienceSection } from './components/AudienceSection';
import { OrganizersSection } from './components/OrganizersSection';
import { VenueSection } from './components/VenueSection';
import { RegistrationCta } from './components/RegistrationCta';
import { Footer } from './components/Footer';
import { ExternalLink, X, Sparkles } from 'lucide-react';
import { EVENT_DATA } from './data/eventData';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleRegisterNotice = () => {
    setToastMessage("Redirecting to Luma... Please submit your registration for host review!");
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#191919] flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-900">
      
      {/* Top Banner: Date & Registration Alert */}
      <div className="bg-neutral-900 text-white text-xs py-2 px-4 text-center font-mono flex items-center justify-center gap-2 border-b border-neutral-800">
        <span className="w-1.5 h-1.5 rounded-full bg-nerd-green animate-pulse" />
        <span>
          NOTION UNLOCKED • 15 NOV 2026 • PAYTM OFFICE, NOIDA
        </span>
        <span className="text-neutral-500 hidden sm:inline">|</span>
        <a
          href={EVENT_DATA.meta.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2 hidden sm:inline-flex items-center gap-1"
        >
          <span>Free Registration Open</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Navigation */}
      <Navbar onRegisterClick={handleRegisterNotice} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onRegisterClick={handleRegisterNotice} />

        {/* Event Information Strip & Live Countdown */}
        <EventInfoStrip />

        {/* Section D: About the Event */}
        <AboutSection />

        {/* Section E: What You'll Experience */}
        <ExperienceSection />

        {/* Section F: Event Agenda */}
        <AgendaSection />

        {/* Section G: Who Should Attend? */}
        <AudienceSection />

        {/* Section H: Community & Organizers */}
        <OrganizersSection />

        {/* Section I: Venue & Map */}
        <VenueSection />

        {/* Section J: Registration CTA */}
        <RegistrationCta onRegisterClick={handleRegisterNotice} />
      </main>

      {/* Section K: Footer */}
      <Footer />

      {/* Toast Notification for Luma Redirection */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-xl bg-neutral-900 text-white border border-neutral-700 shadow-2xl flex items-start gap-3 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <div className="font-semibold text-emerald-300">Official Registration via Luma</div>
            <p className="text-neutral-300 leading-normal">{toastMessage}</p>
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-neutral-400 hover:text-white p-0.5 ml-auto"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

