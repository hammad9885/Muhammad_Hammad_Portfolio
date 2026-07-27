import { MessageCircle, Mail, Download } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Contact.css';

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv/Muhammad_Hammad_Resume.pdf';
  link.download = 'Muhammad_Hammad_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const openWhatsApp = () => {
  const message =
    'Hi Muhammad Hammad, I came across your portfolio and would like to discuss a project opportunity with you. Are you available?';
  const encoded = encodeURIComponent(message);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = `whatsapp://send?phone=923476789885&text=${encoded}`;
  } else {
    window.open(`https://web.whatsapp.com/send?phone=923476789885&text=${encoded}`, '_blank');
  }
};

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader tag="// get in touch" title="Let's Build Something Meaningful." />

        <FadeIn y={20}>
          <div className="contact-box">
            <h2>
              Have a Project
              <br />
              <span>in Mind?</span>
            </h2>
            <p>
              I'm currently open to project opportunities, collaborations, and full-time roles.
              Let's talk about how I can help build your next system.
            </p>
            <p className="contact-email">mrhammadghg@gmail.com</p>

            <div className="contact-links">
              <a
                href="https://github.com/hammad9885"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="GitHub Profile"
              >
                <span className="contact-link-icon"><GithubIcon /></span>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-hammad-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="LinkedIn Profile"
              >
                <span className="contact-link-icon"><LinkedinIcon /></span>
                LinkedIn
              </a>
              <button onClick={openWhatsApp} className="contact-link" aria-label="WhatsApp">
                <span className="contact-link-icon"><MessageCircle size={15} /></span>
                WhatsApp
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mrhammadghg@gmail.com&su=Project%20Inquiry%20%7C%20Muhammad%20Hammad&body=Hi%20Muhammad%20Hammad%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0AProject%20Details%3A%0A-%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Email"
              >
                <span className="contact-link-icon"><Mail size={15} /></span>
                Email
              </a>
            </div>

            <button className="contact-cv-btn" onClick={downloadCV}>
              <Download size={14} />
              Download CV
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
