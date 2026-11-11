import React, { useState } from 'react';
import {
  Sparkles,
  Database,
  CheckCircle2,
  Clock,
  MapPin,
  Bot,
  Terminal,
  FileText,
  FolderGit2,
  ChevronRight,
  MoreHorizontal,
  Search,
  Share2,
  SlidersHorizontal,
  ArrowUpRight
} from 'lucide-react';

export const NotionWorkspaceMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'page' | 'database' | 'ai'>('page');

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Glow aura behind the frame */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/15 via-blue-500/10 to-purple-500/15 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Notion Window Frame */}
      <div className="relative bg-white border border-notion-border rounded-xl shadow-notion overflow-hidden transition-all duration-300 hover:border-notion-borderHover">
        
        {/* Window Top Bar / Controls */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#F9F8F5] border-b border-notion-border select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>

            {/* Breadcrumb */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-notion-muted font-sans">
              <span className="flex items-center gap-1 hover:text-notion-text cursor-pointer">
                <FolderGit2 className="w-3.5 h-3.5 text-nerd-green" />
                <span className="font-medium text-notion-text">Nerds Room</span>
              </span>
              <ChevronRight className="w-3 h-3 text-notion-faint" />
              <span className="text-notion-muted">Events</span>
              <ChevronRight className="w-3 h-3 text-notion-faint" />
              <span className="font-semibold text-notion-text flex items-center gap-1">
                <span>✦ Notion Unlocked</span>
              </span>
            </div>
          </div>

          {/* Quick window actions & tab pills */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center bg-[#EDECE6] p-0.5 rounded-md text-[11px] font-medium text-notion-muted">
              <button
                type="button"
                onClick={() => setActiveTab('page')}
                className={`px-2 py-0.5 rounded transition ${
                  activeTab === 'page'
                    ? 'bg-white text-notion-text shadow-xs'
                    : 'hover:text-notion-text'
                }`}
              >
                Page
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('database')}
                className={`px-2 py-0.5 rounded transition ${
                  activeTab === 'database'
                    ? 'bg-white text-notion-text shadow-xs'
                    : 'hover:text-notion-text'
                }`}
              >
                Database
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ai')}
                className={`px-2 py-0.5 rounded transition flex items-center gap-1 ${
                  activeTab === 'ai'
                    ? 'bg-white text-emerald-700 shadow-xs'
                    : 'hover:text-notion-text'
                }`}
              >
                <Sparkles className="w-2.5 h-2.5 text-nerd-green" />
                <span>AI Agents</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-1 pl-2 border-l border-notion-border text-notion-faint">
              <span className="p-1 hover:text-notion-text cursor-pointer rounded">
                <Search className="w-3.5 h-3.5" />
              </span>
              <span className="p-1 hover:text-notion-text cursor-pointer rounded">
                <Share2 className="w-3.5 h-3.5" />
              </span>
              <span className="p-1 hover:text-notion-text cursor-pointer rounded">
                <MoreHorizontal className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Workspace Canvas */}
        <div className="p-5 sm:p-7 min-h-[380px] bg-white">
          {activeTab === 'page' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Header Icon + Title */}
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xl font-serif shadow-xs">
                  ⚡
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-100/70 text-emerald-800 font-semibold">
                      IN-PERSON WORKSHOP
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                      DELHI NCR
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-notion-text">
                    Notion Unlocked: The Operating System for Builders
                  </h3>
                </div>
              </div>

              {/* Properties Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 border-t border-b border-notion-border/70 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-notion-muted flex items-center gap-1.5 w-24">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Date & Time</span>
                  </span>
                  <span className="font-medium text-notion-text">15 Nov 2026, 12:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-notion-muted flex items-center gap-1.5 w-24">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Location</span>
                  </span>
                  <span className="font-medium text-notion-text">Paytm Office, Noida</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-notion-muted flex items-center gap-1.5 w-24">
                    <Sparkles className="w-3.5 h-3.5 text-nerd-green" />
                    <span>Focus Track</span>
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
                    AI Agents & Workflows
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-notion-muted flex items-center gap-1.5 w-24">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Status</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Registrations Open
                  </span>
                </div>
              </div>

              {/* Notion Callout Box */}
              <div className="p-3.5 rounded-lg bg-[#F7F6F3] border border-notion-border flex items-start gap-3">
                <div className="p-1 rounded bg-white shadow-xs text-sm">💡</div>
                <div className="text-xs text-notion-text leading-relaxed">
                  <span className="font-semibold text-notion-text">Why this gathering matters:</span>{' '}
                  Instead of disconnected apps, learn how modern teams configure Notion as a unified knowledge graph, dynamic sprint pipeline, and autonomous AI command center.
                </div>
              </div>

              {/* Notion AI Prompt Bar */}
              <div className="relative flex items-center gap-2 p-2.5 rounded-lg bg-gradient-to-r from-emerald-50/70 via-white to-blue-50/70 border border-emerald-200 shadow-xs">
                <div className="flex items-center justify-center w-6 h-6 rounded bg-emerald-600 text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 text-xs">
                  <span className="text-emerald-950 font-medium">Ask Notion AI: </span>
                  <span className="text-notion-muted font-mono text-[11px]">
                    "Draft release notes from Sprint 44 and create linked PRD cards..."
                  </span>
                </div>
                <span className="hidden sm:inline-flex text-[10px] font-mono text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded border border-emerald-300/40">
                  Agent Ready ↵
                </span>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-nerd-green" />
                  <span className="text-sm font-semibold text-notion-text">
                    Sprint Backlog & Agenda View
                  </span>
                  <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">
                    7 items
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-notion-muted">
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-[#F4F3EF]">
                    <SlidersHorizontal className="w-3 h-3" />
                    <span>Filter: All</span>
                  </span>
                </div>
              </div>

              {/* Mini Database Table */}
              <div className="border border-notion-border rounded-lg overflow-x-auto text-xs">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-notion-border text-notion-muted text-[11px] font-mono uppercase">
                      <th className="py-2 px-3 font-medium">Topic</th>
                      <th className="py-2 px-3 font-medium">Time</th>
                      <th className="py-2 px-3 font-medium">Category</th>
                      <th className="py-2 px-3 font-medium">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-notion-border/60">
                    <tr className="hover:bg-neutral-50/60">
                      <td className="py-2.5 px-3 font-medium text-notion-text flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-blue-500" />
                        <span>Intro to Notion Workspace</span>
                      </td>
                      <td className="py-2.5 px-3 font-mono text-notion-muted">12:30 PM</td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-700">
                          Foundations
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="text-emerald-600 font-medium">Essential</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50/60">
                      <td className="py-2.5 px-3 font-medium text-notion-text flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Demo 1: Real-time Workflows</span>
                      </td>
                      <td className="py-2.5 px-3 font-mono text-notion-muted">12:50 PM</td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700">
                          Live Demo
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="text-emerald-600 font-medium">High</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50/60">
                      <td className="py-2.5 px-3 font-medium text-notion-text flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-purple-500" />
                        <span>Demo 2: AI Agents & Automation</span>
                      </td>
                      <td className="py-2.5 px-3 font-mono text-notion-muted">01:40 PM</td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-purple-50 text-purple-700">
                          AI / Automation
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="text-purple-600 font-medium">Breakthrough</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-notion-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-emerald-600 flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-notion-text">Notion Autonomous Agent</h4>
                    <p className="text-[11px] text-notion-muted">Listening on workspace webhooks & database triggers</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono">
                  status: active
                </span>
              </div>

              {/* Terminal Agent Output */}
              <div className="p-3.5 bg-neutral-900 rounded-lg text-emerald-400 font-mono text-xs space-y-2 border border-neutral-800 shadow-inner">
                <div className="flex items-center justify-between text-neutral-400 text-[11px] pb-1 border-b border-neutral-800">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-emerald-400" />
                    <span>agent@nerdsroom-notion ~ pipeline</span>
                  </span>
                  <span>v2.4-active</span>
                </div>
                <p className="text-neutral-300">
                  <span className="text-emerald-400">➜</span> Analyzing 4 project databases: PRDs, Tasks, Meetings, Architecture.
                </p>
                <p className="text-neutral-300">
                  <span className="text-emerald-400">➜</span> Synthesizing weekly changelog with cross-reference rollups...
                </p>
                <div className="p-2 bg-neutral-800/80 rounded border border-neutral-700 text-neutral-200 text-[11px] space-y-1">
                  <div className="text-emerald-300 font-semibold">✓ Generated 1 Summary Page & 3 Action Items</div>
                  <div className="text-neutral-400">Linked to: #NotionUnlocked-Sprint #NoidaMeetup #PaytmOffice</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar inside mockup */}
        <div className="px-4 py-2 bg-[#F9F8F5] border-t border-notion-border flex items-center justify-between text-[11px] text-notion-muted font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Synced across all devices</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Free admission via approval</span>
            <span className="text-notion-faint">|</span>
            <span className="text-emerald-700 font-medium">Paytm Office, Noida</span>
          </div>
        </div>
      </div>

      {/* Floating Badge 1 - Top Right: AI Agent Pill */}
      <div className="hidden lg:flex absolute -top-5 -right-6 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-notion-border shadow-notion-hover animate-float">
        <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-[11px] font-bold text-notion-text">Notion AI & Agents</div>
          <div className="text-[10px] text-notion-muted font-mono">Autonomous Workflows</div>
        </div>
        <span className="text-emerald-600 text-xs font-semibold ml-1">✦</span>
      </div>

      {/* Floating Badge 2 - Bottom Left: Community Presence */}
      <div className="hidden lg:flex absolute -bottom-6 -left-6 items-center gap-3 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white shadow-xl animate-float-alt">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-neutral-900 flex items-center justify-center text-[10px] font-bold">
            NR
          </div>
          <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-neutral-900 flex items-center justify-center text-[10px] font-bold">
            AD
          </div>
          <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-neutral-900 flex items-center justify-center text-[10px] font-bold">
            SM
          </div>
        </div>
        <div className="text-left text-xs">
          <div className="font-semibold text-white">Nerds Room × Notion</div>
          <div className="text-[10px] text-neutral-400 font-mono">15 Nov 2026 • 12:00 PM</div>
        </div>
      </div>

      {/* Floating Badge 3 - Middle Right: Verified Badge */}
      <div className="hidden md:flex absolute top-1/2 -right-8 -translate-y-1/2 items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono shadow-sm animate-float-slow">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>One Skymark, Noida</span>
      </div>
    </div>
  );
};
