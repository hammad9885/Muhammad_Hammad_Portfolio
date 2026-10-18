import { GraduationCap, BookOpen, Award, Calendar, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Education.css';

interface EducationItem {
  degree: string;
  institution: string;
  meta: string;
  location: string;
  badge: string;
  inProgress?: boolean;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
}

const educationList: EducationItem[] = [
  {
    degree: 'Bachelor in Business & Information Technology (BBIT)',
    institution: 'Virtual University of Pakistan',
    meta: 'In Progress',
    location: 'Pakistan (Online / Flexible)',
    badge: 'In Progress',
    inProgress: true,
    desc: 'Combining computer science, software systems, and modern business technology. Focusing on enterprise architectures, database systems, and IT business solutions.',
    tags: ['Information Technology', 'Software Engineering', 'Business Management', 'Enterprise Systems'],
    icon: <GraduationCap size={20} />,
  },
  {
    degree: 'I.C.S (Intermediate in Computer Science)',
    institution: 'Apex College Gujranwala',
    meta: '2022 – 2024',
    location: 'Gujranwala, Pakistan',
    badge: 'Completed 2024',
    inProgress: false,
    desc: 'Core computer science fundamentals, structured programming, database concepts, statistics, and mathematics.',
    tags: ['Computer Science', 'Programming Fundamentals', 'Database Basics', 'Mathematics'],
    icon: <BookOpen size={20} />,
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'Govt. A.D Model School',
    meta: '2020 – 2022',
    location: 'Gujranwala, Pakistan',
    badge: 'Completed 2022',
    inProgress: false,
    desc: 'Foundational secondary school education with science and computer education focus.',
    tags: ['Science', 'Computer Studies', 'Mathematics'],
    icon: <Award size={20} />,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="education">
      <div className="container">
        <SectionHeader tag="// academic background" title="Education &amp; Credentials" />

        <div className="education-grid">
          {educationList.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08} y={20}>
              <div className={`education-card${item.inProgress ? ' featured' : ''}`}>
                <div className="education-card-top">
                  <div className="education-card-icon">{item.icon}</div>
                  <span className={`education-badge${item.inProgress ? ' in-progress' : ''}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="education-degree">{item.degree}</h3>
                <div className="education-institution">{item.institution}</div>

                <div className="education-meta">
                  <span className="education-meta-item">
                    <Calendar size={13} />
                    <span>{item.meta}</span>
                  </span>
                  <span>•</span>
                  <span className="education-meta-item">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </span>
                </div>

                <p className="education-desc">{item.desc}</p>

                <div className="education-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="education-tag">
                      {tag}
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
