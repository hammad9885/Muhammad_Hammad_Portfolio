import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import '../assets/css/Footer.css';

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          &copy; {year} — Designed &amp; Developed by <strong>Muhammad Hammad</strong>
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/hammad9885"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hammad-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <button onClick={openWhatsApp} className="footer-link" aria-label="WhatsApp">
            <MessageCircle size={16} />
          </button>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mrhammadghg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
