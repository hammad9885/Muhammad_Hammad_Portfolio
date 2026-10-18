import { Briefcase, Building2, Globe, MapPin, Calendar } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Experience.css';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  meta: string;
  desc: string;
  bullets?: string[];
  techs: string[];
  current?: boolean;
  icon: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Softix Technologies',
    location: 'Gujranwala, Pakistan',
    meta: 'May 2026 – Present',
    desc: 'Engineering enterprise software, comprehensive ERP systems, and high-impact government digital solutions with scalable architecture and database design.',
    bullets: [
      'Architecting and developing full-stack enterprise applications and operational workflows.',
      'Contributing to public sector systems including the National Cyber Crime Investigation Agency (NCCIA) portal.',
      'Building performant REST APIs, relational database schemas, and intuitive administrative dashboards.',
    ],
    techs: ['React', 'Laravel', 'MySQL', 'TypeScript', 'REST APIs', 'System Architecture'],
    current: true,
    icon: <Briefcase size={18} />,
  },
  {
    role: 'Full Stack Developer',
    company: 'Tecno Sphere',
    location: 'Gujranwala, Pakistan',
    meta: '2026',
    desc: 'Engineered scalable ERP systems using modern JavaScript and backend microservices with real-time business synchronization.',
    bullets: [
      'Developed modular ERP modules for inventory tracking, invoicing, and sales pipeline management.',
      'Implemented robust REST API endpoints and optimized MySQL database queries.',
      'Enhanced web application loading performance and UI response times.',
    ],
    techs: ['React.js', 'Node.js', 'Express', 'MySQL', 'REST APIs', 'Redux'],
    icon: <Building2 size={18} />,
  },
  {
    role: 'Frontend Developer (ERP Modules)',
    company: 'ITS Tech World',
    location: 'Gujranwala, Pakistan',
    meta: '12/2025 – Present',
    desc: 'Specializing in Enterprise Resource Planning (ERP) software user interface engineering and dynamic frontend data synchronization.',
    bullets: [
      'Developed complex ERP user interfaces with reusable, maintainable components using React.js (TSX) and Redux.',
      'Integrated mission-critical REST APIs across ERP modules including stock management, accounts, and order processing.',
      'Engineered responsive, accessible layouts for multi-device desktop and mobile workflows.',
    ],
    techs: ['React (TSX)', 'Redux', 'REST APIs', 'JavaScript', 'CSS3', 'Component Architecture'],
    current: true,
    icon: <Globe size={18} />,
  },
  {
    role: 'Frontend Developer',
    company: 'Adroit Light Solutions',
    location: 'Gujranwala, Pakistan',
    meta: '04/2025 – 12/2025',
    desc: 'Built modern, responsive web applications and full-stack solutions with clean architectural patterns and speed optimizations.',
    bullets: [
      'Developed responsive UI and client-facing web applications using React.js and Next.js.',
      'Optimized components and reduced bundle sizes for enhanced performance and higher Lighthouse scores.',
      'Collaborated on full-stack integration connecting React frontends with Laravel and MySQL backends.',
    ],
    techs: ['React.js', 'Next.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Responsive Design'],
    icon: <Building2 size={18} />,
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    location: 'Remote / Global',
    meta: 'Jan 2025 – Present',
    desc: 'Delivering end-to-end web applications, e-commerce stores, POS tools, and corporate websites for diverse clients worldwide.',
    bullets: [
      'Delivered custom web applications from conceptual design to production deployment.',
      'Built custom e-commerce and retail POS tools with cart, payment, and inventory capabilities.',
      'Managed end-to-end client communications, technical specifications, and on-time delivery.',
    ],
    techs: ['Next.js', 'React', 'Laravel', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    icon: <Globe size={18} />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionHeader tag="// selected experience" title="Professional Journey" />

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.08} y={20}>
              <div className={`exp-card${exp.current ? ' exp-card-current' : ''}`}>
                <div className="exp-card-icon">{exp.icon}</div>
                <div className="exp-card-content">
                  <div className="exp-header-row">
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company-row">
                        <span className="exp-company">{exp.company}</span>
                        <span className="exp-location">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {exp.current && (
                        <span className="exp-current-badge">
                          <span className="exp-current-badge-dot" />
                          Current Role
                        </span>
                      )}
                      <span className="exp-meta">
                        <Calendar size={12} /> {exp.meta}
                      </span>
                    </div>
                  </div>

                  <p className="exp-desc">{exp.desc}</p>

                  {exp.bullets && (
                    <ul className="exp-bullets">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="exp-bullet">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.techs && (
                    <div className="exp-techs">
                      {exp.techs.map((t) => (
                        <span key={t} className="exp-tech">
                          {t}
                        </span>
                      ))}
                    </div>
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
