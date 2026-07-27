import { useState, useRef, useEffect } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Terminal.css';

interface TerminalLine {
  text: string;
  type: 'prompt' | 'output' | 'input';
}

const initialLines: TerminalLine[] = [
  { text: 'Welcome to Muhammad Hammad\'s developer terminal.', type: 'output' },
  { text: 'Type "help" to see available commands.', type: 'output' },
  { text: '', type: 'output' },
];

const commands: Record<string, string[]> = {
  help: [
    '<span class="dim">Available commands:</span>',
    '  <span class="accent">whoami</span>    — About me',
    '  <span class="accent">skills</span>    — My technology stack',
    '  <span class="accent">projects</span>  — Featured projects',
    '  <span class="accent">experience</span> — Professional journey',
    '  <span class="accent">contact</span>   — Get in touch',
    '  <span class="accent">clear</span>     — Clear terminal',
    '  <span class="accent">help</span>      — Show this message',
  ],
  whoami: [
    '<span class="green">Muhammad Hammad</span>',
    'Full Stack Developer at <span class="accent">Softix Technologies</span>',
    '',
    'Building enterprise software, ERP systems, and',
    'government digital solutions since 2025.',
    '',
    'Based in Gujranwala, Punjab, Pakistan.',
  ],
  skills: [
    '<span class="yellow">Frontend:</span> React, TypeScript, Next.js, Tailwind CSS',
    '<span class="yellow">Backend:</span>  Node.js, Express.js, PHP, Laravel',
    '<span class="yellow">Database:</span> MySQL, MongoDB, Mongoose, Eloquent ORM',
    '<span class="yellow">Enterprise:</span> ERP Systems, Business Workflows',
    '<span class="yellow">Tools:</span>     Git, GitHub, Vercel, Postman',
  ],
  projects: [
    '<span class="accent">Featured Projects:</span>',
    '  <span class="green">01.</span> Mood Analytica — Corporate website (Next.js, CodeIgniter)',
    '  <span class="green">02.</span> Techizh Solutions — IT services website (Next.js, CodeIgniter)',
    '  <span class="green">03.</span> ERP System — Business management (React, Laravel)',
    '  <span class="green">04.</span> Pick My Booking — Flight booking (React, TypeScript)',
    '  <span class="green">05.</span> Furniture Store — E-commerce (Next.js, TypeScript)',
    '',
    'Type "help" for more commands.',
  ],
  experience: [
    '<span class="accent">Professional Journey:</span>',
    '',
    '  <span class="green">2026 — Present</span>  Full Stack Developer @ Softix Technologies',
    '  <span class="green">2026</span>             Full Stack Developer @ Tecno Sphere',
    '  <span class="green">2025 — 2026</span>     Frontend Developer @ ITS Tech World',
    '  <span class="green">2025</span>             Full Stack Developer @ Adroit Light Solutions',
    '  <span class="green">2025 — Present</span>  Freelance Full Stack Developer',
  ],
  contact: [
    '<span class="accent">Get in touch:</span>',
    '',
    '  <span class="dim">Email:</span>    mrhammadghg@gmail.com',
    '  <span class="dim">GitHub:</span>   github.com/hammad9885',
    '  <span class="dim">LinkedIn:</span> linkedin.com/in/muhammad-hammad-dev',
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
              <span className="terminal-title">portfolio@terminal ~ $</span>
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
                  placeholder="Type a command..."
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
