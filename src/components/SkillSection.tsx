import {
  Code2,
  Server,
  Database,
  Braces,
  Cloud,
  Wrench,
  Cpu,
  Layers,
  ShoppingCart,
} from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 size={18} />,
    skills: [
      'React.js',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Bootstrap',
      'HTML5 & CSS3',
      'Component Optimization',
      'Responsive Web Design',
    ],
  },
  {
    title: 'Backend Engineering',
    icon: <Server size={18} />,
    skills: [
      'Laravel (PHP)',
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'API Integration',
      'Eloquent ORM',
      'Blade Templating',
      'Server-Side Logic',
    ],
  },
  {
    title: 'Enterprise & POS Systems',
    icon: <ShoppingCart size={18} />,
    skills: [
      'ERP Systems Architecture',
      'Point of Sale (POS)',
      'Inventory & Stock Tracking',
      'Sales & Purchase Orders',
      'Ledger & Financial Accounting',
      'Role-Based Access Control (RBAC)',
    ],
  },
  {
    title: 'Programming Languages',
    icon: <Braces size={18} />,
    skills: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases & Storage',
    icon: <Database size={18} />,
    skills: ['MySQL', 'MongoDB', 'Mongoose', 'Relational Schema Design', 'Query Optimization', 'Database Migrations'],
  },
  {
    title: 'E-Commerce & Full Stack',
    icon: <Layers size={18} />,
    skills: [
      'E-Commerce Shopping Platforms',
      'Shopping Cart & Checkout',
      'Payment & Billing Workflows',
      'Client State Management',
      'Cross-Browser Compatibility',
    ],
  },
  {
    title: 'DevOps & Deployment',
    icon: <Cloud size={18} />,
    skills: ['Git', 'GitHub', 'Vercel Deployment', 'cPanel Hosting', 'Environment Configuration', 'Domain Management'],
  },
  {
    title: 'Tools & Workflow',
    icon: <Wrench size={18} />,
    skills: ['VS Code', 'Postman', 'Figma', 'Jira', 'Chrome DevTools', 'Agile / Scrum'],
  },
  {
    title: 'Engineering Core',
    icon: <Cpu size={18} />,
    skills: [
      'Clean Code Principles',
      'Component Reusability',
      'Software Architecture',
      'System Performance Optimization',
      'Audit Logging',
    ],
  },
];

export default function SkillSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader tag="// technology stack" title="Skills &amp; Technical Capabilities" />

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
                    <span key={s} className="skill-item">
                      {s}
                    </span>
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
