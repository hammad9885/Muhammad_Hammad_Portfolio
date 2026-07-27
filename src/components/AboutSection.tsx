import {
  Code2,
  Database,
  Building2,
  Shield,
  MapPin,
  Briefcase,
  Globe,
  CircleCheck,
} from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/About.css';

const capabilities = [
  {
    icon: <Code2 size={16} />,
    title: 'Full Stack Development',
    desc: 'Building end-to-end applications with modern frontend and backend technologies.',
  },
  {
    icon: <Building2 size={16} />,
    title: 'Enterprise Software',
    desc: 'Developing scalable enterprise applications with complex business logic.',
  },
  {
    icon: <Database size={16} />,
    title: 'ERP Systems',
    desc: 'Implementing business management systems for operations and workflows.',
  },
  {
    icon: <Shield size={16} />,
    title: 'Government Digital Projects',
    desc: 'Contributing to digital systems supporting public sector operations.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader tag="// about me" title="What I Do." />

        <div className="about-grid">
          <FadeIn>
            <div className="about-text">
              <p>
                I'm a <strong>Full Stack Developer</strong> currently at <strong>Softix Technologies</strong>,
                where I build real-world enterprise software, ERP systems, and government digital solutions.
              </p>
              <p>
                My work spans the full stack — from frontend interfaces to backend APIs, database architecture,
                and complex business workflows. I focus on building maintainable, scalable systems that solve
                actual business problems.
              </p>
              <p>
                I have contributed to a <strong>government digital project</strong> for the National Cyber Crime
                Investigation Agency (NCCIA), Pakistan, and worked on multiple <strong>ERP systems</strong> handling
                inventory, sales, purchases, reporting, and business process automation.
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
                  <div className="about-info-icon"><MapPin size={15} /></div>
                  <div>
                    <div className="about-info-label">Location</div>
                    <div className="about-info-value">Gujranwala, Punjab, Pakistan</div>
                  </div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-icon"><Briefcase size={15} /></div>
                  <div>
                    <div className="about-info-label">Current Role</div>
                    <div className="about-info-value">Full Stack Developer at Softix Technologies</div>
                  </div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-icon"><Globe size={15} /></div>
                  <div>
                    <div className="about-info-label">Languages</div>
                    <div className="about-info-value">Urdu, English</div>
                  </div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-icon"><CircleCheck size={15} style={{ color: 'var(--accent)' }} /></div>
                  <div>
                    <div className="about-info-label">Status</div>
                    <div className="about-info-value" style={{ color: 'var(--accent)' }}>Open to Work</div>
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
