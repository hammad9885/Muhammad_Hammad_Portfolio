import { ArrowUpRight, ArrowDown, Download, Phone, MapPin, Mail, Briefcase } from 'lucide-react';
import FadeIn from './FadeIn';
import '../assets/css/Hero.css';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const navOffset = window.innerWidth <= 768 ? 60 : 76;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv/Muhammad_Hammad_Resume.pdf';
  link.download = 'Muhammad_Hammad_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow-a" aria-hidden="true" />
      <div className="hero-glow-b" aria-hidden="true" />

      <div className="container" style={{ position: 'relative' }}>
        <FadeIn delay={0.1} y={20}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Frontend &amp; Full Stack Developer
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <h1>
            Muhammad Hammad
            <span className="hero-title-line">
              Building <span className="accent">Enterprise Software</span>, ERP &amp; POS Systems, &amp; Scalable Web Apps
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <p className="hero-sub">
            Passionate <strong>Frontend Developer</strong> and <strong>Full Stack Engineer</strong> with expertise
            in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Laravel</strong>.
            Building high-performance ERP dashboards, retail Point of Sale (POS) suites, developer utilities, and modern web applications with clean, maintainable architecture.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <div className="hero-contact-row">
            <div className="hero-contact-item">
              <MapPin size={13} />
              <span>Gujranwala, Pakistan</span>
            </div>
            <a href="tel:+923713734182" className="hero-contact-item">
              <Phone size={13} />
              <span>+92 371 3734182</span>
            </a>
            <a href="mailto:mrhammadghg@gmail.com" className="hero-contact-item">
              <Mail size={13} />
              <span>mrhammadghg@gmail.com</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View My Work
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('experience')}>
              Professional Journey
              <ArrowDown size={14} />
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('education')}>
              Education Credentials
            </button>
            <button className="btn-ghost" onClick={downloadCV}>
              <Download size={14} />
              Download CV
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div className="hero-company-badge">
            <Briefcase size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
            <span>
              Currently at <strong>Softix Technologies</strong> &mdash; Full Stack Developer | Contributing to <strong>ERP &amp; NCCIA Digital Systems</strong>
            </span>
          </div>
        </FadeIn>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        Scroll
      </div>
    </section>
  );
}
