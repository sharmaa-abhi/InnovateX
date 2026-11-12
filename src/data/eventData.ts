export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  description: string;
  category: 'Registration' | 'Keynote' | 'Demo' | 'Networking' | 'Q&A' | 'Break';
  speaker?: string;
  highlight?: boolean;
}

export interface ExperienceCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  accentColor: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  roleDescription: string;
  benefit: string;
  iconName: string;
  tag: string;
}

export interface Organizer {
  name: string;
  role: string;
  affiliation?: string;
  initials: string;
  color: string;
}

export const EVENT_DATA = {
  meta: {
    title: "NOTION UNLOCKED",
    subtitle: "Learn. Build. Organize.",
    headline: "Unlock a Smarter Way to Work.",
    description:
      "Discover how Notion transforms the way you organize information, manage projects, collaborate with teams, and work smarter with Notion AI and Agents.",
    dateDisplay: "Sunday, 15 November 2026",
    timeDisplay: "12:00 PM – 4:00 PM (IST)",
    targetIsoDate: "2026-11-15T12:00:00+05:30",
    venueName: "Paytm Office",
    venueBuilding: "One Skymark, Tower D",
    venueAddress:
      "One Skymark, Floor No. 6 to 22, Tower D, Plot No. H-10 B, Sector 98, Noida, Uttar Pradesh 201304, India",
    venueCity: "Noida, Uttar Pradesh",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paytm+One+Skymark+Tower+D+Sector+98+Noida+Uttar+Pradesh",
    registrationUrl: "https://luma.com/6r8hgxec?tk=LQZ336",
    cost: "Free (Approval Required)",
    presentedBy: "The AI Collective",
    hostCommunity: "Nerds Room",
    communityQuote:
      "Come for the ideas. Stay for the people. Leave with smarter ways to build.",
  },

  infoStrip: [
    {
      id: "date",
      label: "DATE",
      value: "Sunday, 15 November 2026",
      subtext: "Mark your calendar",
      icon: "Calendar",
    },
    {
      id: "time",
      label: "TIME",
      value: "12:00 PM – 4:00 PM",
      subtext: "Asia/Kolkata (IST)",
      icon: "Clock",
    },
    {
      id: "location",
      label: "LOCATION",
      value: "Paytm Office, Noida",
      subtext: "One Skymark, Sector 98",
      icon: "MapPin",
    },
  ],

  about: {
    heading: "Rethink the Way You Work with Notion.",
    lead:
      "Join Notion Unlocked, an exclusive community gathering for professionals, founders, startup teams, product managers, developers, and business operators interested in improving productivity and collaboration.",
    secondary:
      "Discover practical Notion workflows, workspace organization, project management, Notion AI, and intelligent agents through live demonstrations and interactive discussions.",
    highlights: [
      {
        title: "Connected Workspace Architecture",
        desc: "Break down silos between product roadmaps, task boards, meeting docs, and personal knowledge bases.",
      },
      {
        title: "Autonomous AI & Intelligent Agents",
        desc: "Go beyond basic text summaries: watch how Notion AI agents analyze databases, draft release notes, and automate recurring admin work.",
      },
      {
        title: "Community-Built Systems",
        desc: "Peek inside actual workspaces used by high-velocity startups and creative engineers across Delhi NCR.",
      },
    ],
  },

  experiences: [
    {
      number: "01",
      title: "Introduction to Notion",
      subtitle: "The Foundation of Modern Productivity",
      description:
        "Understand the Notion ecosystem, workspace fundamentals, and productivity capabilities.",
      tags: ["Workspace Architecture", "Blocks & Pages", "Modular Systems"],
      features: [
        "Core building blocks: text, toggles, callouts, and relational databases",
        "Configuring custom team views, permission trees, and workspace hygiene",
        "From chaotic docs to a unified second brain for you and your organization",
      ],
      accentColor: "#3B82F6",
    },
    {
      number: "02",
      title: "Notion in Action",
      subtitle: "Production Workflows for High-Velocity Teams",
      description:
        "Explore practical workflows for documentation, project management, knowledge management, and team collaboration.",
      tags: ["Sprint Management", "Engineering Wikis", "Team Collaboration"],
      features: [
        "Live walk-through of active sprint trackers, Kanban pipelines, and roadmaps",
        "Cross-functional documentation linking specs, PRDs, designs, and tasks",
        "Formulas 2.0, rollup properties, and automated button automations",
      ],
      accentColor: "#10B981",
    },
    {
      number: "03",
      title: "Notion AI & Agents",
      subtitle: "The Next Era of Augmented Intelligence",
      description:
        "Discover intelligent workflows, AI-powered features, and practical automation use cases.",
      tags: ["Notion AI", "Agent Workflows", "Workspace Intelligence"],
      features: [
        "Q&A across your entire workspace: instant answers with source attribution",
        "Autonomous agent workflows that synthesize weekly updates and triages",
        "AI database properties that automatically categorize and summarize new entries",
      ],
      accentColor: "#8B5CF6",
    },
    {
      number: "04",
      title: "Interactive Q&A & Networking",
      subtitle: "Connect with Builders, Founders & Operators",
      description:
        "Ask questions, exchange ideas, and connect with professionals, founders, and fellow builders.",
      tags: ["Direct Q&A", "Founder Mixer", "Workspace Show & Tell"],
      features: [
        "Direct dialogue with the Notion community leads and workspace practitioners",
        "Community showcase of unique Notion setups and developer productivity stacks",
        "High-density networking over refreshments with Delhi NCR's top builders",
      ],
      accentColor: "#F59E0B",
    },
  ] as ExperienceCard[],

  agenda: [
    {
      id: "a1",
      time: "12:00 PM – 12:30 PM",
      title: "Registration & Welcome Networking",
      description:
        "Check-in at Paytm Office, receive your event badge, grab initial refreshments, and meet fellow attendees.",
      category: "Registration",
      highlight: false,
    },
    {
      id: "a2",
      time: "12:30 PM – 12:50 PM",
      title: "Introduction to Notion",
      description:
        "A foundational orientation to Notion's modular architecture, philosophy of malleable software, and today's agenda.",
      category: "Keynote",
      highlight: false,
    },
    {
      id: "a3",
      time: "12:50 PM – 1:40 PM",
      title: "Demo 1: Notion in Action",
      description:
        "Deep-dive live demonstration of real-world workflows: engineering documentation, multi-project databases, and team collaboration.",
      category: "Demo",
      highlight: true,
    },
    {
      id: "a4",
      time: "1:40 PM – 2:30 PM",
      title: "Demo 2: Notion AI & Agents",
      description:
        "Practical showcase of Notion AI, automated agents, formulaic logic, and AI-driven workspace intelligence.",
      category: "Demo",
      highlight: true,
    },
    {
      id: "a5",
      time: "2:30 PM – 2:50 PM",
      title: "Refreshments & Networking",
      description:
        "Informal networking break with refreshments. Connect with participants, explore community setups, and recharge.",
      category: "Break",
      highlight: false,
    },
    {
      id: "a6",
      time: "2:50 PM – 3:25 PM",
      title: "Interactive Q&A with the Notion Team",
      description:
        "Open-floor interactive discussion. Ask technical questions, discuss workspace migration, and get hands-on advice.",
      category: "Q&A",
      highlight: true,
    },
    {
      id: "a7",
      time: "3:25 PM – 4:00 PM",
      title: "Professional Networking & Closing",
      description:
        "Collaborative wrap-up, community photos, follow-up resource sharing, and informal discussions.",
      category: "Networking",
      highlight: false,
    },
  ] as AgendaItem[],

  audiences: [
    {
      id: "professionals",
      title: "Working Professionals",
      roleDescription: "Corporate leaders, consultants, and knowledge workers",
      benefit:
        "Streamline personal workflows, manage multi-stakeholder initiatives, and conquer information overload.",
      iconName: "Briefcase",
      tag: "Productivity",
    },
    {
      id: "founders",
      title: "Founders & Startup Teams",
      roleDescription: "Early-stage founders, startup operators, and core teams",
      benefit:
        "Build the company operating system: investor updates, product specs, team wiki, and hiring pipelines in one tool.",
      iconName: "Rocket",
      tag: "Startups",
    },
    {
      id: "pm",
      title: "Product Managers",
      roleDescription: "Technical and consumer product managers",
      benefit:
        "Connect PRDs, user feedback, roadmap Gantt timelines, and sprint backlogs with effortless bi-directional links.",
      iconName: "Layout",
      tag: "Product Management",
    },
    {
      id: "devs",
      title: "Developers & Tech Professionals",
      roleDescription: "Software engineers, DevOps, and technical architects",
      benefit:
        "Maintain code snippets, technical design docs, incident retrospectives, and integrate with CLI/API workflows.",
      iconName: "Code2",
      tag: "Engineering",
    },
    {
      id: "creators",
      title: "Entrepreneurs & Creators",
      roleDescription: "Solopreneurs, agency owners, and digital creators",
      benefit:
        "Run your entire client portal, content calendar, brand asset library, and invoices with custom databases.",
      iconName: "Sparkles",
      tag: "Creators",
    },
    {
      id: "users",
      title: "Existing Notion Users",
      roleDescription: "Notion enthusiasts looking to level up to power-user tier",
      benefit:
        "Master Formulas 2.0, Notion AI agents, relation rollups, and unlock architectural patterns you didn't know existed.",
      iconName: "Zap",
      tag: "Power Users",
    },
  ] as AudienceItem[],

  community: {
    presentedBy: {
      name: "The AI Collective",
      role: "Presented by",
      description:
        "Global community of AI practitioners, researchers, and innovators shaping intelligent technologies.",
      tag: "Community Partner",
    },
    host: {
      name: "Nerds Room",
      role: "Host & Community Partner",
      description:
        "A vibrant developer and builder community cultivating collaborative spaces to learn, build, and ship real-world tech.",
      url: "https://nerdsroom.org",
      tag: "Host Community",
    },
    organizers: [
      {
        name: "Aditya",
        role: "Organizer",
        initials: "AD",
        color: "bg-emerald-600",
      },
      {
        name: "Shubhi Mathur",
        role: "Organizer",
        initials: "SM",
        color: "bg-purple-600",
      },
      {
        name: "Shresth Shukla",
        role: "Organizer",
        initials: "SS",
        color: "bg-blue-600",
      },
    ] as Organizer[],
  },

  venueDetails: {
    title: "Meet Us at Paytm, Noida",
    name: "Paytm Office",
    complex: "One Skymark, Tower D",
    floors: "Floors 6 to 22",
    plot: "Plot No. H-10 B, Sector 98",
    city: "Noida",
    state: "Uttar Pradesh",
    postalCode: "201304",
    country: "India",
    metroTips: [
      "Nearest Metro: Botanical Garden (Blue/Magenta Line) or Noida Sector 81/Okhla Bird Sanctuary.",
      "Cabs and autos are readily available from Botanical Garden Metro Station (~10 mins ride).",
      "Visitor parking is available within the One Skymark complex premises.",
    ],
    amenities: [
      "High-speed event Wi-Fi",
      "Dedicated presentation auditorium",
      "Networking lounge area",
      "Light refreshments provided",
    ],
  },
};

