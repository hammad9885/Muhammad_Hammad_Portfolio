import { useEffect, useState } from 'react';
import {
  Sun,
  Moon,
  ArrowUpRight,
  Menu,
  X,
  User,
  Code2,
  FolderKanban,
  Briefcase,
  Building2,
  Terminal,
  Mail,
} from 'lucide-react';
import '../assets/css/Navbar.css';

interface NavbarProps {
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}

const sections = [
  { id: 'about', label: 'About', icon: <User size={15} /> },
  { id: 'skills', label: 'Skills', icon: <Code2 size={15} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={15} /> },
  { id: 'projects', label: 'Projects', icon: <FolderKanban size={15} /> },
  { id: 'enterprise', label: 'Enterprise', icon: <Building2 size={15} /> },
  { id: 'terminal', label: 'Terminal', icon: <Terminal size={15} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={15} /> },
];

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = sections.map((s) => s.id);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <button className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
          <span className="navbar-logo-dot" />
          MH
        </button>

        <div className="navbar-links">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`navbar-link${activeSection === section.id ? ' active' : ''}`}
              onClick={() => scrollTo(section.id)}
              aria-current={activeSection === section.id ? 'true' : undefined}
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="navbar-theme-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button className="navbar-cta" onClick={() => scrollTo('contact')}>
            Contact Me
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </button>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <div className={`navbar-mobile-overlay${mobileOpen ? ' open' : ''}`}>
        <button
          className="navbar-mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {sections.map((section) => (
          <button
            key={section.id}
            className={`navbar-mobile-link${activeSection === section.id ? ' active' : ''}`}
            onClick={() => scrollTo(section.id)}
          >
            {section.icon}
            {section.label}
          </button>
        ))}

        <button className="navbar-mobile-cta" onClick={() => scrollTo('contact')}>
          Contact Me
        </button>
      </div>
    </>
  );
}
