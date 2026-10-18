import {
  Code2,
  Database,
  Building2,
  Shield,
  MapPin,
  Briefcase,
  Globe,
  CircleCheck,
  GraduationCap,
  Phone,
  ShoppingCart,
  Wrench,
} from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/About.css';

const capabilities = [
  {
    icon: <Code2 size={18} />,
    title: 'Frontend & Full Stack Engineering',
    desc: 'Building responsive, scalable web applications with React.js, Next.js, TypeScript, Tailwind CSS, and REST APIs.',
  },
  {
    icon: <Database size={18} />,
    title: 'ERP & Business Systems',
    desc: 'Developing modular ERP platforms for real-time inventory tracking, sales automation, and accounting ledgers.',
  },
  {
    icon: <ShoppingCart size={18} />,
    title: 'POS & E-Commerce Solutions',
    desc: 'Engineering Point of Sale checkout systems and feature-rich online shopping stores with cart & order flows.',
  },
  {
    icon: <Shield size={18} />,
    title: 'Enterprise & Government Projects',
    desc: 'Contributing to secure digital software solutions including Pakistan NCCIA digital operational workflows.',
  },
  {
    icon: <Building2 size={18} />,
    title: 'Backend & Database Architecture',
    desc: 'Developing high-performance REST APIs and database-driven solutions using Laravel, Node.js, and MySQL.',
  },
  {
    icon: <Wrench size={18} />,
    title: 'Developer Productivity Tools',
    desc: 'Authoring developer utility toolkits (Vault of Tools) with zero-latency client-side processing.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader tag="// about me" title="Engineering Quality Software." />

        <div className="about-grid">
          <FadeIn>
            <div className="about-text">
              <p>
                I am a passionate <strong>Frontend Developer</strong> and <strong>Full Stack Engineer</strong> based
                in Gujranwala, Pakistan. I specialize in building responsive, scalable, and high-performance
                web applications using <strong>React.js</strong>, <strong>Next.js</strong>, and modern JavaScript / TypeScript.
              </p>
              <p>
                My expertise covers modern frontend architecture with <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>,
                and <strong>Redux Toolkit</strong>, paired with strong backend capabilities in <strong>Laravel</strong>, <strong>Node.js</strong>,
                and <strong>MySQL</strong>. I design and integrate robust REST APIs and write clean, maintainable code following industry best practices.
              </p>
              <p>
                Throughout my career, I have contributed to enterprise software at <strong>Softix Technologies</strong>,
                ERP software development at <strong>ITS Tech World</strong> and <strong>Tecno Sphere</strong>, responsive UI systems at <strong>Adroit Light Solutions</strong>,
                and delivered commercial retail solutions including <strong>Mehar Sweets POS &amp; ERP</strong>, developer tools like <strong>Vault of Tools</strong>,
                and public sector digital workflows for <strong>NCCIA</strong> (National Cyber Crime Investigation Agency, Pakistan).
              </p>
              <p>
                Currently pursuing my <strong>Bachelor in Business &amp; Information Technology (BBIT)</strong> at Virtual University of Pakistan,
                I blend technical coding excellence with deep business domain understanding.
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <div className="about-cards">
                {capabilities.map((cap, i) => (
                  <div key={i} className="about-card">
                    <div className="about-card-icon">{cap.icon}</div>
                    <div className="about-card-title">{cap.title}</div>
                    <div className="about-card-desc">{cap.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="about-info-card">
                <div className="about-info-item">
                  <div className="about-info-icon"><MapPin size={16} /></div>
                  <div>
                    <div className="about-info-label">Location</div>
                    <div className="about-info-value">Qila Sunder Singh Awan Chowk, Gujranwala, Pakistan</div>
                  </div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-icon"><Phone size={16} /></div>
                  <div>
                    <div className="about-info-label">Phone / WhatsApp</div>
                    <div className="about-info-value">+92 347 6789885 (03476789885)</div>
                  </div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-icon"><GraduationCap size={16} /></div>
                  <div>
                    <div className="about-info-label">Degree &amp; Studies</div>
                    <div className="about-info-value">BBIT (In Progress) &mdash; Virtual University</div>
                  </div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-icon"><Briefcase size={16} /></div>
                  <div>
                    <div className="about-info-label">Current Role</div>
                    <div className="about-info-value">Full Stack Developer @ Softix Technologies</div>
                  </div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-icon"><Globe size={16} /></div>
                  <div>
                    <div className="about-info-label">Languages</div>
                    <div className="about-info-value">Urdu (Fluent), English (Professional Working)</div>
                  </div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-icon"><CircleCheck size={16} style={{ color: 'var(--accent)' }} /></div>
                  <div>
                    <div className="about-info-label">Status</div>
                    <div className="about-info-value" style={{ color: 'var(--accent)' }}>Open to High-Impact Opportunities &amp; Freelance Projects</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
