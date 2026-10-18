import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import SkillSection from '../components/SkillSection';
import Experience from '../components/Experience';
import FeaturedProject from '../components/FeaturedProject';
import EnterpriseSection from '../components/EnterpriseSection';
import TerminalSection from '../components/TerminalSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillSection />
      <Experience />
      <FeaturedProject />
      <EnterpriseSection />
      <TerminalSection />
      <ContactSection />
      <Footer />
    </>
  );
}
