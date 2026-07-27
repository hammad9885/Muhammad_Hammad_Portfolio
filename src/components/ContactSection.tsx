import { Github, Linkedin, MessageCircle, Mail, Download } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Contact.css';

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
                <span className="contact-link-icon"><Github size={15} /></span>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-hammad-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="LinkedIn Profile"
              >
                <span className="contact-link-icon"><Linkedin size={15} /></span>
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
