import React, { useState } from 'react';
import { Sparkles, Layers, ChevronDown, ChevronRight, Terminal, Network, Lightbulb, Check } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const AboutSection: React.FC = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(true);

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md font-semibold">
            ABOUT THE EVENT
          </span>
          <span className="text-xs font-mono text-notion-faint">// 01</span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-notion-text leading-[1.15]">
              {EVENT_DATA.about.heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-notion-muted leading-relaxed">
              <p className="font-normal text-notion-text/90">
                {EVENT_DATA.about.lead}
              </p>
              <p className="text-base text-notion-muted">
                {EVENT_DATA.about.secondary}
              </p>
            </div>

            {/* Notion Feature Highlights */}
            <div className="pt-4 space-y-4">
              {EVENT_DATA.about.highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white border border-notion-border hover:border-notion-borderHover transition-all flex items-start gap-4 shadow-xs"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#FAF9F6] border border-notion-border flex items-center justify-center text-xs font-mono font-bold text-notion-text">
                    0{index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-notion-text">
                      {item.title}
                    </h3>
                    <p className="text-xs text-notion-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Quote Callout */}
            <div className="p-4 rounded-xl bg-[#FAF9F6] border-l-4 border-emerald-500 text-xs sm:text-sm text-notion-text italic font-serif leading-relaxed">
              "Most productivity systems force you into rigid hierarchies. Notion is malleable software—it moulds around your company's intuition, team cadences, and mental models."
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Notion Document Element */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white border border-notion-border rounded-2xl shadow-notion p-5 sm:p-6 space-y-5">
              
              {/* Fake Notion Document Header */}
              <div className="border-b border-notion-border pb-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-notion-muted font-mono">
                  <span>📄 workspace_spec.notion</span>
                  <span className="text-emerald-700 font-semibold">● LIVE</span>
                </div>
                <h3 className="text-xl font-bold text-notion-text flex items-center gap-2">
                  <span>✦</span>
                  <span>Notion as an Operating System</span>
                </h3>
                <p className="text-xs text-notion-muted">
                  Interactive blueprint for modern builders and product engineers.
                </p>
              </div>

              {/* Notion Interactive Toggle Block */}
              <div className="border border-notion-border/80 rounded-lg p-3 bg-[#FAF9F6]/60">
                <button
                  type="button"
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-notion-text text-left hover:text-emerald-700 transition"
                >
                  <span className="flex items-center gap-2">
                    {isToggleOpen ? (
                      <ChevronDown className="w-4 h-4 text-notion-faint" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-notion-faint" />
                    )}
                    <span>What makes this edition unique?</span>
                  </span>
                  <span className="text-[10px] font-mono text-notion-faint">toggle</span>
                </button>

                {isToggleOpen && (
                  <div className="mt-3 pl-6 pr-2 text-xs text-notion-muted space-y-2 border-l border-emerald-400/40 ml-2 animate-fadeIn">
                    <p>
                      • Live breakdown of actual production workspaces rather than abstract slides.
                    </p>
                    <p>
                      • Direct demonstration of Notion AI & Agents working with external webhooks and structured tables.
                    </p>
                    <p>
                      • In-person networking with the vibrant Nerds Room developer community at Paytm Office, Noida.
                    </p>
                  </div>
                )}
              </div>

              {/* Code snippet block (Nerds Room touch) */}
              <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-3.5 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-[11px] text-neutral-400 pb-2 border-b border-neutral-800">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>notion-agent.ts</span>
                  </span>
                  <span>TypeScript</span>
                </div>
                <div className="space-y-1 text-neutral-300 text-[11px] overflow-x-auto">
                  <p><span className="text-purple-400">import</span> &#123; NotionAgent &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@notionhq/agent'</span>;</p>
                  <p className="text-neutral-500">// Initialize autonomous team summarizer</p>
                  <p><span className="text-blue-400">const</span> agent = <span className="text-purple-400">new</span> <span className="text-yellow-300">NotionAgent</span>(&#123;</p>
                  <p className="pl-4">workspace: <span className="text-emerald-300">'Nerds Room × Paytm'</span>,</p>
                  <p className="pl-4">model: <span className="text-emerald-300">'Notion-AI-2026'</span>,</p>
                  <p className="pl-4">capabilities: [<span className="text-emerald-300">'sprint_triage'</span>, <span className="text-emerald-300">'db_rollups'</span>]</p>
                  <p>&#125;);</p>
                </div>
              </div>

              {/* Tag Properties Pill Stack */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono text-notion-muted">TAGGED ATTRIBUTES:</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200">
                    #Workspaces
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-purple-50 text-purple-800 border border-purple-200">
                    #NotionAI
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-blue-50 text-blue-800 border border-blue-200">
                    #AutonomousAgents
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-amber-50 text-amber-800 border border-amber-200">
                    #DeveloperEcosystem
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-neutral-100 text-neutral-800">
                    #OneSkymarkNoida
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
