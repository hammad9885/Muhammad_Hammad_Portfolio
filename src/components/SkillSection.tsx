import {
  Code2,
  Server,
  Database,
  Braces,
  Building2,
  Cloud,
  Wrench,
  Cpu,
} from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 size={15} />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5/CSS3', 'Redux'],
  },
  {
    title: 'Backend Development',
    icon: <Server size={15} />,
    skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST APIs', 'API Integration'],
  },
  {
    title: 'Programming Languages',
    icon: <Braces size={15} />,
    skills: ['JavaScript', 'TypeScript', 'PHP', 'SQL'],
  },
  {
    title: 'Databases',
    icon: <Database size={15} />,
    skills: ['MySQL', 'MongoDB', 'Mongoose', 'Eloquent ORM'],
  },
  {
    title: 'Enterprise Systems',
    icon: <Building2 size={15} />,
    skills: ['ERP Systems', 'Business Workflows', 'User Roles & Permissions', 'Reporting Systems'],
  },
  {
    title: 'DevOps & Deployment',
    icon: <Cloud size={15} />,
    skills: ['Git', 'GitHub', 'Vercel', 'cPanel'],
  },
  {
    title: 'Tools & Workflow',
    icon: <Wrench size={15} />,
    skills: ['VS Code', 'Postman', 'Figma', 'Jira', 'Agile/Scrum'],
  },
  {
    title: 'Core Development',
    icon: <Cpu size={15} />,
    skills: ['Full Stack Development', 'Software Architecture', 'Database Design', 'System Maintenance'],
  },
];

export default function SkillSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader tag="// technology stack" title="Skills &amp; Expertise" />

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.05} y={16}>
              <div className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon">{cat.icon}</div>
                  <div className="skill-card-title">{cat.title}</div>
                </div>
                <div className="skill-card-items">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-item">{s}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
