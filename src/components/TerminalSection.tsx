import { useState, useRef, useEffect } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Terminal.css';

interface TerminalLine {
  text: string;
  type: 'prompt' | 'output' | 'input';
}

const initialLines: TerminalLine[] = [
  { text: 'Welcome to Muhammad Hammad\'s interactive developer terminal.', type: 'output' },
  { text: 'Type "help" to see available commands or click shortcuts below.', type: 'output' },
  { text: '', type: 'output' },
];

const commands: Record<string, string[]> = {
  help: [
    '<span class="dim">Available commands:</span>',
    '  <span class="accent">whoami</span>     — About Muhammad Hammad & current focus',
    '  <span class="accent">skills</span>     — Full frontend, backend & enterprise stack',
    '  <span class="accent">projects</span>   — Featured projects, Vault of Tools, POS & Web apps',
    '  <span class="accent">experience</span> — Professional journey & employment history',
    '  <span class="accent">education</span>  — Academic qualifications & degrees',
    '  <span class="accent">contact</span>    — Phone, email, socials & location',
    '  <span class="accent">cv</span>         — Resume details & download',
    '  <span class="accent">clear</span>      — Clear terminal output',
  ],
  whoami: [
    '<span class="green">Muhammad Hammad</span>',
    'Frontend Developer &amp; Full Stack Engineer',
    'Currently at <span class="accent">Softix Technologies</span>',
    '',
    'Specializing in React.js, Next.js, TypeScript, Laravel, and ERP/POS systems.',
    'Pursuing Bachelor in Business &amp; Information Technology (BBIT) at Virtual University.',
    '',
    'Location: Qila Sunder Singh Awan Chowk, Gujranwala, Pakistan',
  ],
  skills: [
    '<span class="yellow">Frontend:</span>    React.js, Next.js, JavaScript, TypeScript, Redux, Tailwind CSS, Bootstrap, HTML5/CSS3',
    '<span class="yellow">Backend:</span>     Laravel (PHP), Node.js, Express.js, REST APIs, Eloquent ORM',
    '<span class="yellow">Enterprise:</span>  ERP Systems, Point of Sale (POS), Stock Management, Billing &amp; Invoices, RBAC',
    '<span class="yellow">Database:</span>    MySQL, MongoDB, Relational Schema Design, Query Optimization',
    '<span class="yellow">DevOps:</span>      Git, GitHub, Vercel, cPanel, Production Deployment',
    '<span class="yellow">Tools:</span>       VS Code, Postman, Figma, Jira, Chrome DevTools',
  ],
  projects: [
    '<span class="accent">Featured Projects &amp; Products:</span>',
    '  <span class="green">01.</span> Vault of Tools       — Developer utilities platform (Next.js, TypeScript, MongoDB)',
    '  <span class="green">02.</span> Mehar Sweets POS     — Point of Sale &amp; stock ERP system (Laravel, PHP, MySQL)',
    '  <span class="green">03.</span> Techizh Solutions   — IT services web app (Next.js, React, MySQL) [techizh.com]',
    '  <span class="green">04.</span> Moods Analytica     — Corporate networking platform (Next.js, React) [moodsanalytica.com]',
    '  <span class="green">05.</span> Modern E-Commerce   — Online shopping platform (Next.js, TypeScript, Redux)',
    '  <span class="green">06.</span> ERP System (ITS)    — Enterprise Resource Planning dashboard (React TSX, Redux)',
    '  <span class="green">07.</span> Archilux Studio     — Modern luxury architecture platform (Next.js, TypeScript)',
    '  <span class="green">08.</span> Site-Wander         — Travel discovery &amp; itinerary explorer (React, Tailwind)',
    '  <span class="green">09.</span> ElectionApp         — Digital voting &amp; real-time tallying (Node.js, Express)',
    '  <span class="green">10.</span> Pick My Booking     — Flight booking platform (React, TypeScript) [pickmybooking.com]',
    '  <span class="green">11.</span> Furniture Store     — E-commerce store with modern UI (Next.js, Tailwind CSS)',
    '  <span class="green">12.</span> NCCIA Operations    — Public sector cybercrime portal (Full Stack, Database)',
    '',
    'Type "help" for more commands.',
  ],
  experience: [
    '<span class="accent">Professional Journey:</span>',
    '',
    '  <span class="green">May 2026 — Present</span>  Full Stack Developer @ Softix Technologies (Current)',
    '  <span class="green">2026</span>             Full Stack Developer @ Tecno Sphere',
    '  <span class="green">12/2025 — Present</span> Frontend Developer (ERP Modules) @ ITS Tech World',
    '  <span class="green">04/2025 — 12/2025</span> Frontend Developer @ Adroit Light Solutions',
    '  <span class="green">Jan 2025 — Present</span> Freelance Full Stack Developer (Self-Employed)',
  ],
  education: [
    '<span class="accent">Academic Qualifications:</span>',
    '',
    '  <span class="green">Virtual University</span> — BBIT (Bachelor in Business &amp; IT) [In Progress]',
    '  <span class="green">Apex College Gujranwala</span> — I.C.S (Intermediate in Computer Science) [2024]',
    '  <span class="green">Govt. A.D Model School</span> — Matriculation in Science [2022]',
  ],
  contact: [
    '<span class="accent">Get In Touch:</span>',
    '',
    '  <span class="dim">Phone / WhatsApp:</span> +92 371 3734182 (03713734182)',
    '  <span class="dim">Email:</span>            mrhammadghg@gmail.com',
    '  <span class="dim">GitHub:</span>           https://github.com/hammad9885',
    '  <span class="dim">LinkedIn:</span>         https://www.linkedin.com/in/muhammad-hammad-dev/',
    '  <span class="dim">Location:</span>         Gujranwala, Punjab, Pakistan',
  ],
  cv: [
    '<span class="green">Resume / CV:</span>',
    'Muhammad Hammad &mdash; Frontend &amp; Full Stack Developer Resume',
    'File: Muhammad_Hammad_Resume.pdf',
    'You can click the "Download CV" button in the Hero or Contact section.',
  ],
  clear: [],
};

export default function TerminalSection() {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    const newLines: TerminalLine[] = [
      ...lines,
      { text: `$ ${cmd}`, type: 'input' },
    ];

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    if (commands[trimmed]) {
      const output = commands[trimmed];
      if (output.length === 0) {
        setLines([]);
        return;
      }
      setLines([
        ...newLines,
        ...output.map((line) => ({
          text: line,
          type: 'output' as const,
        })),
      ]);
    } else if (trimmed === '') {
      setLines(newLines);
    } else {
      setLines([
        ...newLines,
        { text: `Command not found: <span class="yellow">${trimmed}</span>. Type <span class="accent">help</span> for available commands.`, type: 'output' },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <section id="terminal" className="terminal-section">
      <div className="container">
        <SectionHeader tag="// interactive" title="Developer Terminal." />

        <FadeIn y={20}>
          <div className="terminal-wrapper">
            <div className="terminal-header">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-title">hammad@portfolio ~ $</span>
            </div>

            <div className="terminal-body" ref={bodyRef} role="log" aria-label="Terminal output">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`terminal-line ${line.type}`}
                  dangerouslySetInnerHTML={{ __html: line.text }}
                />
              ))}

              <div className="terminal-input-line">
                <span className="terminal-prompt">$</span>
                <input
                  className="terminal-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command (help, projects, education, skills, whoami)..."
                  aria-label="Terminal command input"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>

              <div className="terminal-help">
                {Object.keys(commands).filter(c => c !== 'clear').map((cmd) => (
                  <span
                    key={cmd}
                    className="terminal-help-item"
                    onClick={() => {
                      processCommand(cmd);
                      setInput('');
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        processCommand(cmd);
                        setInput('');
                      }
                    }}
                  >
                    <code>{cmd}</code>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
