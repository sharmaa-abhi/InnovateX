import React from 'react';
import {
  Briefcase,
  Rocket,
  Layout,
  Code2,
  Sparkles,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { EVENT_DATA, AudienceItem } from '../data/eventData';

export const AudienceSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-rose-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-amber-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-indigo-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="audience" className="py-20 sm:py-28 bg-[#FAF9F6] border-t border-b border-notion-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md font-semibold">
              WHO IS THIS FOR
            </span>
            <span className="text-xs font-mono text-notion-faint">// 04</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-notion-text">
            Who Should Attend?
          </h2>

          <p className="text-base sm:text-lg text-notion-muted">
            Whether you are building your first workspace or scaling enterprise operations, Notion Unlocked equips you with pragmatic, high-leverage frameworks.
          </p>
        </div>

        {/* 6 Target Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_DATA.audiences.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-notion-border rounded-2xl p-6 shadow-notion hover:shadow-notion-hover hover:border-notion-borderHover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header: Icon + Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-notion-border flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-medium">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-notion-text group-hover:text-emerald-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-notion-faint mt-0.5">
                    {item.roleDescription}
                  </p>
                </div>

                {/* Benefit statement */}
                <p className="text-xs sm:text-sm text-notion-muted leading-relaxed">
                  {item.benefit}
                </p>

              </div>

              {/* Bottom Card Pill */}
              <div className="mt-5 pt-3 border-t border-notion-border/60 flex items-center justify-between text-[11px] font-mono text-notion-muted">
                <span>Value: High Leverage</span>
                <span className="text-emerald-700 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
