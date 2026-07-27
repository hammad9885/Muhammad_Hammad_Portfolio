import { Briefcase, Building2, Globe } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Softix Technologies',
    meta: 'May 2026 – Present',
    desc: 'Working on enterprise software, ERP systems, and government digital projects. Developing frontend interfaces, backend functionality, and database-driven applications for real-world business workflows and operational systems.',
    techs: ['React', 'Laravel', 'MySQL', 'TypeScript'],
    current: true,
    icon: <Briefcase size={16} />,
  },
  {
    role: 'Full Stack Developer',
    company: 'Tecno Sphere',
    meta: '2026',
    desc: 'Built scalable ERP systems using React.js, Node.js, Express, and MySQL. Responsible for architecture design, API integration, and performance optimization.',
    icon: <Building2 size={16} />,
  },
  {
    role: 'Frontend Developer',
    company: 'ITS Tech World',
    meta: '2025 – 2026',
    desc: 'Developed ERP dashboards using React and Redux. Focused on UI systems, reusable components, and seamless API integration.',
    icon: <Globe size={16} />,
  },
  {
    role: 'Full Stack Developer',
    company: 'Adroit Light Solutions',
    meta: '2025',
    desc: 'Built full-stack applications using React, Laravel, and MySQL with a focus on clean architecture and responsive UI design.',
    icon: <Building2 size={16} />,
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    meta: 'Jan 2025 – Present',
    desc: 'Delivering custom web solutions for international clients — from landing pages to full-stack applications. Handling end-to-end development, client communication, and project delivery.',
    icon: <Globe size={16} />,
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
                  {exp.current && (
                    <span className="exp-current-badge">
                      <span className="exp-current-badge-dot" />
                      Current
                    </span>
                  )}
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-meta">{exp.meta}</div>
                  <p className="exp-desc">{exp.desc}</p>
                  {exp.techs && (
                    <div className="exp-techs">
                      {exp.techs.map((t) => (
                        <span key={t} className="exp-tech">{t}</span>
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
