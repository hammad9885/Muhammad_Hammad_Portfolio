import { ArrowUpRight, ArrowDown } from 'lucide-react';
import FadeIn from './FadeIn';
import '../assets/css/Hero.css';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow-a" aria-hidden="true" />
      <div className="hero-glow-b" aria-hidden="true" />

      <div className="container" style={{ position: 'relative' }}>
        <FadeIn delay={0.1} y={20}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Full Stack Developer
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <h1>
            Muhammad Hammad
            <span className="hero-title-line">
              Building <span className="accent">Enterprise Software</span>, ERP Systems &amp; Digital Solutions
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <p className="hero-sub">
            I'm Muhammad Hammad, a <strong>Full Stack Developer</strong> at <strong>Softix Technologies</strong>.
            I work on enterprise software, ERP systems, and government digital projects, building reliable
            solutions for complex real-world workflows.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View My Work
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('experience')}>
              Explore My Experience
              <ArrowDown size={14} />
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>
              Let's Connect
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div className="hero-company-badge">
            Currently at <strong>Softix Technologies</strong> &mdash; Full Stack Developer
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
