import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock3,
  ExternalLink,
  FileText,
  Folder,
  HelpCircle,
  Home,
  LayoutList,
  MapPin,
  Menu,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { EVENT_DATA, AgendaItem } from '../data/eventData';

interface WorkspacePageProps {
  onRegisterClick?: () => void;
}

const navigation = [
  { label: 'Overview', href: '#overview', icon: Home },
  { label: 'Agenda', href: '#agenda', icon: LayoutList },
  { label: 'Audience', href: '#audience', icon: Users },
  { label: 'Team', href: '#team', icon: Network },
  { label: 'FAQ', href: '#faq', icon: HelpCircle },
];

const faqs = [
  {
    question: 'Who is this event for?',
    answer:
      'The session is designed for students, developers, professionals, creators, Notion users, and anyone curious about building calmer, more connected ways of working.',
  },
  {
    question: 'Is registration free?',
    answer:
      'Yes. Registration is free and handled through the official Luma event page. Final access is subject to host approval.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Bring your questions, a laptop if you want to follow along with the workflows, and an open mind for meeting other builders.',
  },
  {
    question: 'Can I ask questions during the session?',
    answer:
      'Absolutely. The agenda includes an interactive Q&A and time to connect with the community after the demos.',
  },
];

const categoryLabels: Record<AgendaItem['category'], string> = {
  Registration: 'Check-in',
  Keynote: 'Keynote',
  Demo: 'Demo',
  Break: 'Break',
  'Q&A': 'Q&A',
  Networking: 'Networking',
};

function ToggleBlock({
  question,
  answer,
  open,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="workspace-toggle">
      <button
        type="button"
        className="workspace-toggle__button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        <span className="flex items-center gap-2">
          {open ? <ChevronDown size={17} /> : <ChevronRight size={17} />}
          <span>{question}</span>
        </span>
      </button>
      <div
        id={id}
        className={`workspace-toggle__content ${open ? 'workspace-toggle__content--open' : ''}`}
        aria-hidden={!open}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export const WorkspacePage: React.FC<WorkspacePageProps> = ({ onRegisterClick }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Demos' | 'Networking'>('All');
  const [openFaq, setOpenFaq] = useState(0);
  const [uniqueOpen, setUniqueOpen] = useState(true);

  const filteredAgenda = EVENT_DATA.agenda.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Demos') return item.category === 'Demo' || item.category === 'Keynote';
    return ['Networking', 'Registration', 'Break', 'Q&A'].includes(item.category);
  });

  const register = () => {
    onRegisterClick?.();
  };

  return (
    <div className="workspace-app">
      {sidebarOpen && (
        <button
          type="button"
          className="workspace-sidebar__backdrop lg:hidden"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`workspace-sidebar ${sidebarCollapsed ? 'workspace-sidebar--collapsed' : ''} ${
          sidebarOpen ? 'workspace-sidebar--mobile-open' : ''
        }`}
      >
        <div className="workspace-sidebar__header">
          <a href="#overview" className="workspace-brand" onClick={() => setSidebarOpen(false)}>
            <span className="workspace-brand__icon">✦</span>
            {!sidebarCollapsed && (
              <span>
                <strong>Nerds Room</strong>
                <small>Notion Unlocked</small>
              </span>
            )}
          </a>
          <button
            type="button"
            className="workspace-icon-button hidden lg:inline-flex"
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            onClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
          >
            {sidebarCollapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
          <button
            type="button"
            className="workspace-icon-button lg:hidden"
            aria-label="Close navigation"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={17} />
          </button>
        </div>

        <div className="workspace-sidebar__section">
          {!sidebarCollapsed && <p className="workspace-sidebar__label">Workspace</p>}
          <nav aria-label="Workspace navigation" className="space-y-1">
            {navigation.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className={`workspace-nav-link ${label === 'Overview' ? 'workspace-nav-link--active' : ''}`}
                title={sidebarCollapsed ? label : undefined}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={17} />
                {!sidebarCollapsed && <span>{label}</span>}
              </a>
            ))}
          </nav>
        </div>

        {!sidebarCollapsed && (
          <div className="workspace-sidebar__section workspace-sidebar__section--bottom">
            <p className="workspace-sidebar__label">Pages</p>
            <a href="#experience" className="workspace-page-link">
              <FileText size={16} />
              <span>What you'll experience</span>
            </a>
            <a href="#venue" className="workspace-page-link">
              <MapPin size={16} />
              <span>Venue & notes</span>
            </a>
            <div className="workspace-sidebar__community">
              <span className="workspace-status-dot" />
              <span>Community workspace</span>
            </div>
          </div>
        )}
      </aside>

      <div className="workspace-main">
        <header className="workspace-topbar">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              className="workspace-icon-button lg:hidden"
              aria-label="Open navigation"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={19} />
            </button>
            <div className="workspace-breadcrumb">
              <span className="hidden sm:inline">Nerds Room</span>
              <ChevronRight size={14} />
              <span className="truncate">Notion Unlocked</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="workspace-icon-button hidden sm:inline-flex" aria-label="Search workspace">
              <Search size={17} />
            </button>
            <a
              href={EVENT_DATA.meta.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={register}
              className="workspace-button workspace-button--primary workspace-button--compact"
            >
              Request to Join <ArrowUpRight size={15} />
            </a>
          </div>
        </header>

        <main className="workspace-content">
          <section id="overview" className="workspace-page-header">
            <div className="workspace-page-icon">✦</div>
            <div className="workspace-eyebrow">EVENT PAGE · 27 NOV 2026</div>
            <h1>Notion Unlocked × Nerds Room</h1>
            <p className="workspace-page-subtitle">Learn. Build. Organize.</p>
            <p className="workspace-page-description">
              A collaborative community experience to explore Notion, improve productivity and connect with builders.
            </p>
            <div className="workspace-actions">
              <a
                href={EVENT_DATA.meta.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={register}
                className="workspace-button workspace-button--primary"
              >
                Request to Join <ArrowUpRight size={16} />
              </a>
              <a href="#agenda" className="workspace-button workspace-button--secondary">
                View agenda <ChevronRight size={16} />
              </a>
            </div>
          </section>

          <section className="workspace-callout" aria-label="Event details">
            <CalendarDays size={20} />
            <div>
              <strong>Friday, 27 November 2026 · 11:00 AM onwards</strong>
              <p>
                <MapPin size={14} /> Satyug Darshan Institute
              </p>
            </div>
            <span className="workspace-tag workspace-tag--green">Free · Host approval</span>
          </section>

          <div className="workspace-divider" />

          <section id="experience" className="workspace-section workspace-two-column">
            <div>
              <p className="workspace-kicker">01 · About this page</p>
              <h2>Rethink the way you work with Notion.</h2>
              <p className="workspace-prose">
                Join Notion Unlocked for practical workflows, workspace organization, project management, Notion AI and
                intelligent agents through live demonstrations and interactive discussions.
              </p>
              <div className="workspace-list">
                {EVENT_DATA.about.highlights.map((highlight, index) => (
                  <div className="workspace-list-item" key={highlight.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{highlight.title}</strong>
                      <p>{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="workspace-document-card">
              <div className="workspace-document-card__top">
                <Folder size={17} />
                <span>notion-unlocked / overview</span>
                <span className="ml-auto workspace-tag workspace-tag--blue">Live page</span>
              </div>
              <h3>What makes this edition unique?</h3>
              <ToggleBlock
                id="unique-edition"
                question="Open details"
                answer="Live breakdowns of real workspaces, direct demonstrations of Notion AI and Agents, and in-person networking with the Nerds Room community."
                open={uniqueOpen}
                onToggle={() => setUniqueOpen((open) => !open)}
              />
              <div className="workspace-note">
                <Sparkles size={16} />
                <span>Bring your workspace questions. Leave with systems you can use.</span>
              </div>
            </div>
          </section>

          <section id="agenda" className="workspace-section">
            <div className="workspace-section-heading">
              <div>
                <p className="workspace-kicker">02 · Database</p>
                <h2>Event agenda</h2>
                <p className="workspace-prose">A clear run of show for learning, building and connecting.</p>
              </div>
              <div className="workspace-filter" role="group" aria-label="Filter agenda">
                {(['All', 'Demos', 'Networking'] as const).map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    className={activeFilter === filter ? 'workspace-filter__button workspace-filter__button--active' : 'workspace-filter__button'}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter === 'All' ? 'All sessions' : filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="workspace-database" role="table" aria-label="Event agenda">
              <div className="workspace-database__head" role="row">
                <span>Session</span>
                <span>Time</span>
                <span>Category</span>
                <span>Venue</span>
              </div>
              {filteredAgenda.map((item) => (
                <div className="workspace-database__row" role="row" key={item.id}>
                  <div className="workspace-database__title">
                    <BookOpen size={16} />
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="workspace-property">
                    <Clock3 size={14} /> {item.time}
                  </div>
                  <div>
                    <span className={`workspace-tag workspace-tag--${item.highlight ? 'blue' : 'neutral'}`}>
                      {categoryLabels[item.category]}
                    </span>
                  </div>
                  <div className="workspace-property">
                    <MapPin size={14} /> Satyug Darshan Institute
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="audience" className="workspace-section">
            <div className="workspace-section-heading">
              <div>
                <p className="workspace-kicker">03 · People</p>
                <h2>Who should attend?</h2>
              </div>
            </div>
            <div className="workspace-audience-grid">
              {EVENT_DATA.audiences.slice(0, 4).map((item) => (
                <article key={item.id} className="workspace-audience-item">
                  <div className="workspace-audience-icon"><Users size={17} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.benefit}</p>
                  <a href="#register" className="workspace-inline-link">
                    Explore <ArrowUpRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="team" className="workspace-section">
            <div className="workspace-section-heading">
              <div>
                <p className="workspace-kicker">04 · Directory</p>
                <h2>Organizing team</h2>
                <p className="workspace-prose">The people making this community workspace possible.</p>
              </div>
            </div>
            <div className="workspace-people">
              {EVENT_DATA.community.organizers.map((organizer) => (
                <div className="workspace-person" key={organizer.name}>
                  <div className="workspace-avatar" role="img" aria-label={`${organizer.name} initials avatar`}>
                    {organizer.initials}
                  </div>
                  <div>
                    <strong>{organizer.name}</strong>
                    <p>{organizer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="venue" className="workspace-section workspace-location">
            <div>
              <p className="workspace-kicker">05 · Event note</p>
              <h2>Meet us at Satyug Darshan Institute.</h2>
              <p className="workspace-prose">
                Save the date and bring your curiosity. The venue details and community updates will stay organized here.
              </p>
            </div>
            <a
              href={EVENT_DATA.meta.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="workspace-button workspace-button--secondary"
            >
              Open in Maps <ExternalLink size={15} />
            </a>
          </section>

          <section id="faq" className="workspace-section">
            <div className="workspace-section-heading">
              <div>
                <p className="workspace-kicker">06 · Help</p>
                <h2>Frequently asked questions</h2>
              </div>
            </div>
            <div className="workspace-faq">
              {faqs.map((faq, index) => (
                <ToggleBlock
                  key={faq.question}
                  id={`faq-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </section>

          <section id="register" className="workspace-register">
            <div className="workspace-page-icon workspace-page-icon--small">✦</div>
            <p className="workspace-kicker">Join the workspace</p>
            <h2>Join the Notion Unlocked × Nerds Room Community.</h2>
            <p>Learn. Build. Organize. Together.</p>
            <a
              href={EVENT_DATA.meta.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={register}
              className="workspace-button workspace-button--primary"
            >
              Request to Join <ArrowUpRight size={16} />
            </a>
          </section>
        </main>

        <footer className="workspace-footer">
          <span>Notion Unlocked × Nerds Room</span>
          <span>Learn. Build. Organize.</span>
        </footer>
      </div>
    </div>
  );
};
