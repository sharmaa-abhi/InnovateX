import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  Coffee,
  Users,
  MessageCircleQuestion,
  Layers,
  CheckCircle2,
  CalendarCheck,
  Tag,
  Filter
} from 'lucide-react';
import { EVENT_DATA, AgendaItem } from '../data/eventData';

export const AgendaSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Demos' | 'Networking'>('All');
  const [activeSessionId, setActiveSessionId] = useState<string | null>('a3');

  const filteredAgenda = EVENT_DATA.agenda.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'Demos') return item.category === 'Demo' || item.category === 'Keynote';
    if (filter === 'Networking') return item.category === 'Networking' || item.category === 'Registration' || item.category === 'Break' || item.category === 'Q&A';
    return true;
  });

  const getCategoryBadge = (category: AgendaItem['category']) => {
    switch (category) {
      case 'Registration':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCircle2 className="w-3 h-3" />
            <span>Check-in</span>
          </span>
        );
      case 'Keynote':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
            <Layers className="w-3 h-3" />
            <span>Orientation</span>
          </span>
        );
      case 'Demo':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
            <Sparkles className="w-3 h-3 text-nerd-green" />
            <span>Live Demonstration</span>
          </span>
        );
      case 'Break':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
            <Coffee className="w-3 h-3 text-amber-600" />
            <span>Refreshments</span>
          </span>
        );
      case 'Q&A':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-pink-50 text-pink-700 border border-pink-200 font-semibold">
            <MessageCircleQuestion className="w-3 h-3 text-pink-600" />
            <span>Interactive Q&A</span>
          </span>
        );
      case 'Networking':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-neutral-200">
            <Users className="w-3 h-3 text-neutral-600" />
            <span>Community Mixer</span>
          </span>
        );
    }
  };

  return (
    <section id="agenda" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md font-semibold">
              RUN OF SHOW
            </span>
            <span className="text-xs font-mono text-notion-faint">// 03</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-notion-text">
            Event Agenda
          </h2>

          <p className="text-base sm:text-lg text-notion-muted max-w-xl mx-auto">
            Sunday, 15 November 2026 • 12:00 PM to 4:00 PM IST
            <br />
            Paytm Office, One Skymark, Sector 98, Noida
          </p>

          {/* Interactive Filters */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <div className="inline-flex p-1 rounded-xl bg-neutral-100 border border-notion-border text-xs font-medium">
              <button
                type="button"
                onClick={() => setFilter('All')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filter === 'All'
                    ? 'bg-white text-notion-text shadow-xs font-semibold'
                    : 'text-notion-muted hover:text-notion-text'
                }`}
              >
                All 7 Sessions
              </button>
              <button
                type="button"
                onClick={() => setFilter('Demos')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filter === 'Demos'
                    ? 'bg-white text-notion-text shadow-xs font-semibold'
                    : 'text-notion-muted hover:text-notion-text'
                }`}
              >
                Demos & Keynotes
              </button>
              <button
                type="button"
                onClick={() => setFilter('Networking')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filter === 'Networking'
                    ? 'bg-white text-notion-text shadow-xs font-semibold'
                    : 'text-notion-muted hover:text-notion-text'
                }`}
              >
                Networking & Q&A
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-notion-border ml-4 sm:ml-36 space-y-6 sm:space-y-8 pl-6 sm:pl-8">
          {filteredAgenda.map((item, index) => {
            const isSelected = activeSessionId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveSessionId(item.id)}
                className={`relative group cursor-pointer transition-all ${
                  item.highlight ? 'opacity-100' : 'opacity-95'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full border-2 bg-white transition-all ${
                    item.highlight
                      ? 'border-emerald-600 ring-4 ring-emerald-100'
                      : 'border-notion-borderHover group-hover:border-neutral-600'
                  }`}
                >
                  {item.highlight && (
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full m-auto mt-[3px]" />
                  )}
                </div>

                {/* Left Timestamp for desktop */}
                <div className="sm:absolute sm:-left-36 sm:top-3 sm:w-28 text-left sm:text-right mb-1 sm:mb-0">
                  <span className="font-mono text-xs font-semibold text-notion-muted group-hover:text-notion-text transition">
                    {item.time.split('–')[0].trim()}
                  </span>
                  <div className="text-[10px] font-mono text-notion-faint hidden sm:block">
                    to {item.time.split('–')[1]?.trim()}
                  </div>
                </div>

                {/* Session Card */}
                <div
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 ${
                    item.highlight
                      ? 'bg-white border-emerald-300 shadow-notion hover:border-emerald-400'
                      : 'bg-white border-notion-border shadow-xs hover:border-notion-borderHover'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      {getCategoryBadge(item.category)}
                      <span className="sm:hidden font-mono text-xs font-medium text-notion-muted">
                        {item.time}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-notion-faint uppercase">
                      Session 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-notion-text group-hover:text-emerald-700 transition">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-notion-muted mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlight && (
                    <div className="mt-3 pt-3 border-t border-notion-border/60 flex items-center justify-between text-[11px] font-mono text-emerald-800">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-nerd-green" />
                        <span>Interactive live showcase</span>
                      </span>
                      <span className="text-notion-faint">Paytm Auditorium</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Bottom Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#FAF9F6] border border-notion-border text-center text-xs text-notion-muted flex items-center justify-center gap-2">
          <CalendarCheck className="w-4 h-4 text-emerald-600" />
          <span>
            Please arrive by 12:00 PM for security check-in at Paytm Tower D reception.
          </span>
        </div>

      </div>
    </section>
  );
};

