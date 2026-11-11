import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Bot,
  Users2,
  CheckCircle,
  ArrowRight,
  Database,
  FileCode,
  LayoutGrid,
  MessagesSquare,
  Flame,
  Zap,
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const ExperienceSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Custom visual components for each of the 4 cards
  const renderCardVisual = (number: string) => {
    switch (number) {
      case '01':
        return (
          <div className="bg-[#FAF9F6] border border-notion-border rounded-xl p-4 space-y-2.5 font-sans">
            <div className="flex items-center justify-between text-[11px] font-mono text-notion-muted border-b border-notion-border pb-2">
              <span className="flex items-center gap-1.5">
                <span className="text-notion-faint font-bold">⋮⋮</span>
                <span>Workspace Hierarchy</span>
              </span>
              <span className="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded text-[10px]">
                Modular Blocks
              </span>
            </div>
            
            {/* Tree nodes */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 p-1.5 rounded bg-white border border-notion-border/70 shadow-xs">
                <span>📁</span>
                <span className="font-semibold text-notion-text">Company Operating System</span>
              </div>
              <div className="pl-4 space-y-1.5 border-l-2 border-notion-border ml-3">
                <div className="flex items-center gap-2 p-1.5 rounded bg-white border border-notion-border/70 shadow-xs">
                  <span>📋</span>
                  <span className="text-notion-text">Engineering Sprint Board</span>
                  <span className="ml-auto text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Active</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded bg-white border border-notion-border/70 shadow-xs">
                  <span>📚</span>
                  <span className="text-notion-text">Product Knowledge Base</span>
                </div>
              </div>
            </div>
          </div>
        );

      case '02':
        return (
          <div className="bg-[#FAF9F6] border border-notion-border rounded-xl p-4 space-y-3 font-sans">
            <div className="flex items-center justify-between text-[11px] font-mono text-notion-muted border-b border-notion-border pb-2">
              <span className="flex items-center gap-1.5">
                <LayoutGrid className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sprint Kanban View</span>
              </span>
              <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">
                Formulas 2.0
              </span>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {/* Col 1 */}
              <div className="bg-white/80 p-2 rounded-lg border border-notion-border space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-notion-muted flex items-center justify-between">
                  <span>In Progress</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
                <div className="p-1.5 rounded bg-white border border-notion-border text-[11px] shadow-xs">
                  <div className="font-medium text-notion-text">Refactor Auth State</div>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-[9px] bg-purple-50 text-purple-700 px-1 rounded">P0</span>
                    <span className="text-[9px] font-mono text-notion-faint">2d left</span>
                  </div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="bg-white/80 p-2 rounded-lg border border-notion-border space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-notion-muted flex items-center justify-between">
                  <span>Shipped</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="p-1.5 rounded bg-white border border-notion-border text-[11px] shadow-xs">
                  <div className="font-medium text-notion-text">Design System 2.0</div>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-[9px] bg-emerald-50 text-emerald-700 px-1 rounded">Done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case '03':
        return (
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-3 font-mono text-xs text-white">
            <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-neutral-800 pb-2">
              <span className="flex items-center gap-1.5 text-purple-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Notion AI Agent Runtime</span>
              </span>
              <span className="text-emerald-400 text-[10px]">autonomous</span>
            </div>

            <div className="p-2 rounded bg-neutral-800/80 border border-neutral-700/60 space-y-1">
              <div className="text-[10px] text-neutral-400">INPUT PROMPT:</div>
              <div className="text-emerald-300 text-[11px]">
                "Synthesize release changelog from all closed tickets in sprint"
              </div>
            </div>

            <div className="space-y-1 text-[11px] text-neutral-300">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Zap className="w-3 h-3" />
                <span>Generated 4 Updates & Linked PRD:</span>
              </div>
              <p className="text-neutral-400 text-[10px] pl-4">
                • 12 performance fixes auto-categorized
                <br />
                • Automated Slack dispatch scheduled
              </p>
            </div>
          </div>
        );

      case '04':
        return (
          <div className="bg-[#FAF9F6] border border-notion-border rounded-xl p-4 space-y-3 font-sans">
            <div className="flex items-center justify-between text-[11px] font-mono text-notion-muted border-b border-notion-border pb-2">
              <span className="flex items-center gap-1.5">
                <MessagesSquare className="w-3.5 h-3.5 text-amber-600" />
                <span>Interactive Mixer & Q&A</span>
              </span>
              <span className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded text-[10px]">
                Live Stage
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-notion-border shadow-xs">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                  AD
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-notion-text">Aditya & Shubhi</div>
                  <div className="text-[10px] text-notion-muted font-mono">Open Q&A + Architecture Review</div>
                </div>
                <span className="ml-auto text-amber-600 text-xs">💬</span>
              </div>

              <div className="flex flex-wrap gap-1 text-[10px] font-mono">
                <span className="bg-white border border-notion-border px-2 py-0.5 rounded text-neutral-700">
                  #ScalingWorkspaces
                </span>
                <span className="bg-white border border-notion-border px-2 py-0.5 rounded text-neutral-700">
                  #AIIntegrations
                </span>
                <span className="bg-white border border-notion-border px-2 py-0.5 rounded text-neutral-700">
                  #FoundersNetwork
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FAF9F6] border-t border-b border-notion-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md font-semibold">
              CURATED PROGRAM
            </span>
            <span className="text-xs font-mono text-notion-faint">// 02</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-notion-text">
            What You'll Experience
          </h2>

          <p className="text-base sm:text-lg text-notion-muted">
            Four immersive pillars designed to upgrade how you manage information, build systems, and lead collaborative workflows.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EVENT_DATA.experiences.map((exp) => (
            <div
              key={exp.number}
              onMouseEnter={() => setHoveredCard(exp.number)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white border border-notion-border rounded-2xl p-6 sm:p-8 shadow-notion hover:shadow-notion-hover hover:border-notion-borderHover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                
                {/* Top Number + Tags */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl sm:text-2xl font-black text-notion-text">
                      {exp.number}
                    </span>
                    <span className="text-notion-faint font-light">/ 04</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF9F6] border border-notion-border text-notion-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-notion-text group-hover:text-emerald-700 transition">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-notion-muted">
                    {exp.subtitle}
                  </p>
                </div>

                {/* Main Description */}
                <p className="text-sm text-notion-muted leading-relaxed">
                  {exp.description}
                </p>

                {/* Interactive Visual Canvas */}
                <div className="pt-2">
                  {renderCardVisual(exp.number)}
                </div>

                {/* Key Takeaways */}
                <div className="pt-2 space-y-2 border-t border-notion-border/70">
                  <div className="text-[11px] font-mono text-notion-faint uppercase">
                    WHAT YOU GAIN:
                  </div>
                  <ul className="space-y-1.5 text-xs text-notion-text/90">
                    {exp.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-notion-border/60 flex items-center justify-between text-xs text-notion-muted">
                <span className="font-mono text-[11px]">Paytm Office • 15 Nov</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
                  <span>Part of Notion Unlocked</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

