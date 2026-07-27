import { ExternalLink, Github } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Projects.css';

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
                      <Github size={13} />
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
