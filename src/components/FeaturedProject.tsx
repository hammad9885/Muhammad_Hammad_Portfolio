import { ExternalLink } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Projects.css';

const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface Project {
  num: string;
  type: string;
  title: string;
  description: string;
  techs: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    num: '01',
    type: 'Corporate Website',
    title: 'Mood Analytica',
    description:
      'Professional business website built for service showcasing, client engagement, and lead generation. Includes modern UI and contact management system.',
    techs: ['Next.js', 'CodeIgniter', 'MySQL'],
    link: 'https://moodsanalytica.com/',
    github: 'https://github.com/hammad9885',
  },
  {
    num: '02',
    type: 'IT Services Website',
    title: 'Techizh Solutions',
    description:
      'Company profile website for IT services presentation, client inquiries, and portfolio showcasing with admin-managed content structure.',
    techs: ['Next.js', 'CodeIgniter', 'MySQL'],
    link: 'https://techizh.com',
    github: 'https://github.com/hammad9885',
  },
  {
    num: '03',
    type: 'Enterprise System',
    title: 'ERP System',
    description:
      'Business management ERP system for handling operations, workflows, and internal business processes with structured modules.',
    techs: ['React', 'Laravel', 'MySQL'],
  },
  {
    num: '04',
    type: 'Booking Platform',
    title: 'Pick My Booking',
    description:
      'Online flight booking platform offering seamless travel planning, real-time availability, and secure booking services.',
    techs: ['React', 'TypeScript', 'Redux', 'Bootstrap'],
    link: 'https://pickmybooking.com/',
  },
  {
    num: '05',
    type: 'E-Commerce Store',
    title: 'Online Furniture Store',
    description:
      'Modern online furniture store with product browsing, secure shopping experience, and responsive user interface.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/hammad9885',
  },
];

const openLink = (url?: string) => {
  if (url && url !== '#') {
    window.open(url, '_blank', 'noopener noreferrer');
  }
};

export default function FeaturedProject() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader tag="// selected work" title="Featured Projects." />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <FadeIn key={project.num} delay={i * 0.07} y={20}>
              <div className="project-card">
                <div className="project-card-top">
                  <span className="project-num">{project.num}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3 className="project-name">{project.title}</h3>

                <p className="project-desc">{project.description}</p>

                <div className="project-techs">
                  {project.techs.map((t) => (
                    <span key={t} className="project-tech">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.link && (
                    <button className="project-btn" onClick={() => openLink(project.link)}>
                      <ExternalLink size={13} />
                      Live Preview
                    </button>
                  )}
                  {project.github && (
                    <button className="project-btn" onClick={() => openLink(project.github)}>
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
