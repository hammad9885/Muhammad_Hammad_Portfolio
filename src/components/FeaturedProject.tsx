import { useState } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Projects.css';

const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface Project {
  num: string;
  category: 'enterprise-pos' | 'nextjs-fullstack' | 'ecommerce' | 'tools';
  type: string;
  title: string;
  description: string;
  image: string;
  highlights?: string[];
  techs: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    num: '01',
    category: 'tools',
    type: 'Developer Utilities Suite',
    title: 'Vault of Tools',
    image: '/projects/vault-of-tools.svg',
    description:
      'All-in-one developer utility platform offering instant client-side tools, code formatters, JSON/CSV converters, cryptographic encoders/decoders, and generators with seamless reactivity.',
    highlights: [
      'Multi-tool productivity suite with client-side zero-latency processing',
      'Engineered with Radix UI primitives and MongoDB data persistence',
      'Modern dark/light responsive interface built for software engineers',
    ],
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Radix UI'],
    github: 'https://github.com/hammad9885/VaultOfTools',
    featured: true,
  },
  {
    num: '02',
    category: 'enterprise-pos',
    type: 'Point of Sale & ERP',
    title: 'Mehar Sweets POS & ERP System',
    image: '/projects/mehar-sweets-pos.svg',
    description:
      'Commercial retail Point of Sale (POS) and inventory ERP software built for high-throughput billing, barcode invoice generation, stock ledgers, purchase orders, and financial reporting.',
    highlights: [
      'Fast POS counter checkout with thermal receipt printing',
      'Real-time raw material and finished goods stock ledger tracking',
      'Multi-tier role-based access control (RBAC) and accounts ledger',
    ],
    techs: ['Laravel', 'PHP', 'MySQL', 'Blade', 'JavaScript'],
    github: 'https://github.com/hammad9885/MeharSweet',
    featured: true,
  },
  {
    num: '03',
    category: 'nextjs-fullstack',
    type: 'IT Services Web App',
    title: 'Techizh Solutions',
    image: '/projects/techizh.svg',
    description:
      'Scalable IT services web application engineered with Next.js, featuring reusable modular components, clean architecture, responsive UI, dynamic inquiry forms, and fast page loading.',
    highlights: [
      'Reusable component architecture with Next.js optimization',
      'Interactive client showcase and dynamic inquiry system',
      'Cross-device compatibility and top-tier SEO performance',
    ],
    techs: ['Next.js', 'React', 'CodeIgniter', 'MySQL', 'Tailwind CSS'],
    link: 'https://www.techizh.com/',
    github: 'https://github.com/hammad9885',
    featured: true,
  },
  {
    num: '04',
    category: 'nextjs-fullstack',
    type: 'Corporate Networking Platform',
    title: 'Moods Analytica',
    image: '/projects/moods-analytica.svg',
    description:
      'Responsive business meet and networking platform built with Next.js and React. Engineered for service presentation, lead acquisition, performance optimization, and seamless user experience.',
    highlights: [
      'Modern interactive business meet platform with responsive UI',
      'Optimized component rendering for lightning-fast responsiveness',
      'Integrated backend contact and business inquiry flow',
    ],
    techs: ['Next.js', 'React', 'CodeIgniter', 'MySQL', 'REST APIs'],
    link: 'https://moodsanalytica.com/',
    github: 'https://github.com/hammad9885',
    featured: true,
  },
  {
    num: '05',
    category: 'ecommerce',
    type: 'E-Commerce Platform',
    title: 'Modern E-Commerce Shopping Platform',
    image: '/projects/ecommerce-store.svg',
    description:
      'Full-featured scalable shopping platform with dynamic product browsing, category filtering, search, cart state management, checkout flow, and mobile-first responsive design.',
    highlights: [
      'Interactive catalog with real-time category & price filtering',
      'Global shopping cart management powered by Redux Toolkit',
      'High-performance product detail and checkout workflows',
    ],
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'REST APIs'],
    github: 'https://github.com/hammad9885/Ecommerce_project_nextjs',
    featured: true,
  },
  {
    num: '06',
    category: 'enterprise-pos',
    type: 'Enterprise ERP System',
    title: 'ERP Management System — ITS Tech World',
    image: '/projects/erp-its-world.svg',
    description:
      'Enterprise Resource Planning software for managing business operations, workflows, sales, purchasing, inventory, and dynamic business data using React (TSX) and Redux.',
    highlights: [
      'Developed responsive UI components using React TSX and Redux',
      'Integrated mission-critical REST APIs across ERP modules',
      'Handled dynamic business data, user roles, and reporting',
    ],
    techs: ['React (TSX)', 'Redux', 'REST APIs', 'Laravel', 'MySQL'],
    featured: true,
  },
  {
    num: '07',
    category: 'nextjs-fullstack',
    type: 'Architectural Design Studio',
    title: 'Archilux — Architecture & Luxury Interior',
    image: '/projects/archilux.svg',
    description:
      'High-end architectural and interior design web application showcasing project portfolios, spatial visualizations, interactive case studies, and client consultation bookings.',
    highlights: [
      'Spatial visual showcases with smooth Framer Motion transitions',
      'Architectural case study templates with high-res galleries',
      'Responsive minimalist design prioritizing typography & aesthetics',
    ],
    techs: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/hammad9885/Archilux',
  },
  {
    num: '08',
    category: 'nextjs-fullstack',
    type: 'Travel & Tourism Platform',
    title: 'Site-Wander — Tourism & Travel Discovery',
    image: '/projects/site-wander.svg',
    description:
      'Interactive travel discovery web application enabling travelers to explore curated destinations, plan customized travel itineraries, and browse experiential travel packages.',
    highlights: [
      'Interactive destination exploration with weather integration',
      'Custom travel itinerary builder and package booking flow',
      'Mobile-first responsive maps and scenic image galleries',
    ],
    techs: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/hammad9885/Site-Wander',
  },
  {
    num: '09',
    category: 'tools',
    type: 'Digital Voting System',
    title: 'ElectionApp — Digital Voting & Polling',
    image: '/projects/election-app.svg',
    description:
      'Secure real-time election and polling application with cryptographic candidate verification, instant vote tabulation, live graphical polling updates, and voter audit logging.',
    highlights: [
      'Tamper-proof ballot submission and instant tally updates',
      'Interactive visual polling metrics and percentage graphs',
      'Full authentication and voter integrity validation',
    ],
    techs: ['JavaScript', 'Node.js', 'Express', 'CSS3', 'REST APIs'],
    github: 'https://github.com/hammad9885/ElectionApp',
  },
  {
    num: '10',
    category: 'nextjs-fullstack',
    type: 'Booking Platform',
    title: 'Pick My Booking',
    image: '/projects/pick-my-booking.svg',
    description:
      'Online flight booking platform offering seamless travel planning, real-time availability, responsive flight search filters, and secure booking services.',
    highlights: [
      'Real-time flight search and seat availability engine',
      'Clean multi-step booking checkout user experience',
    ],
    techs: ['React', 'TypeScript', 'Redux', 'Bootstrap'],
    link: 'https://pickmybooking.com/',
  },
  {
    num: '11',
    category: 'ecommerce',
    type: 'E-Commerce Store',
    title: 'Online Furniture Store',
    image: '/projects/furniture-store.svg',
    description:
      'Modern online furniture store with interactive catalog browsing, secure shopping experience, aesthetic interior themes, and responsive UI design.',
    highlights: [
      'Elegant product showcases with high-res imagery and specs',
      'Intuitive shopping cart and responsive checkout layout',
    ],
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/hammad9885',
  },
  {
    num: '12',
    category: 'enterprise-pos',
    type: 'Government Digital System',
    title: 'NCCIA — Digital Operations Workflow Portal',
    image: '/projects/nccia-portal.svg',
    description:
      'Secure government operational portal developed for the National Cyber Crime Investigation Agency (NCCIA), Pakistan, managing incident logging, case workflow tracking, and public sector evidence handling.',
    highlights: [
      'High-security enterprise workflow and case management architecture',
      'Public sector database integrity and compliance standards',
      'Role-based incident reporting and cryptographic audit trails',
    ],
    techs: ['React', 'Full Stack Architecture', 'MySQL', 'REST APIs'],
  },
];

const filterCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'enterprise-pos', label: 'ERP & POS Systems' },
  { key: 'nextjs-fullstack', label: 'Next.js & Web Apps' },
  { key: 'ecommerce', label: 'E-Commerce & Shopping' },
  { key: 'tools', label: 'Developer Tools' },
] as const;

const openLink = (url?: string) => {
  if (url && url !== '#') {
    window.open(url, '_blank', 'noopener noreferrer');
  }
};

export default function FeaturedProject() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader tag="// selected work" title="Featured Projects &amp; Products." />

        <div className="projects-filter-bar" role="tablist" aria-label="Project Categories">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              className={`projects-filter-btn${activeFilter === cat.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
              role="tab"
              aria-selected={activeFilter === cat.key}
            >
              {cat.label}
              {cat.key === 'all'
                ? ` (${projects.length})`
                : ` (${projects.filter((p) => p.category === cat.key).length})`}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.05} y={20}>
              <div className={`project-card${project.featured ? ' featured-card' : ''}`}>
                {/* Premium Project Thumbnail Image */}
                <div className="project-thumb-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} preview thumbnail`}
                    className="project-thumb-img"
                    loading="lazy"
                  />
                  <div className="project-thumb-overlay" />
                </div>

                <div className="project-card-top">
                  <span className="project-num">{project.num}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3 className="project-name">{project.title}</h3>

                <p className="project-desc">{project.description}</p>

                {project.highlights && (
                  <div className="project-highlights">
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="project-highlight">
                        <CheckCircle2 size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="project-techs">
                  {project.techs.map((t) => (
                    <span key={t} className="project-tech">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.link && (
                    <button
                      className="project-btn primary-btn"
                      onClick={() => openLink(project.link)}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </button>
                  )}
                  {project.github && (
                    <button
                      className="project-btn"
                      onClick={() => openLink(project.github)}
                    >
                      <GithubIcon />
                      Source Code
                    </button>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
