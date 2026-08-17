import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    title: 'NatyaMudra AI',
    type: 'AI / Computer Vision',
    description: 'AI-powered Bharatanatyam mudra recognition system designed to identify hand gestures through a live webcam and provide meaningful learning feedback.',
    tech: ['React', 'MediaPipe', 'JavaScript', 'Computer Vision'],
    github: '#'
  },
  {
    title: 'Blood Report Analyzer',
    type: 'AI / Full Stack',
    description: 'AI-assisted application for analyzing blood report data and presenting results through a user-friendly interface.',
    tech: ['Python', 'AI/ML', 'React', 'REST API'],
    github: 'https://github.com/manasinaveen07-cpu/Blood_report_analyzer'
  },
  {
    title: 'Library Management System',
    type: 'Full Stack',
    description: 'Full-stack system for managing books, lending, returns, search, users and fine calculation with a cloud database.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: '#'
  },
  {
    title: 'Student Expense Tracker',
    type: 'Web Application',
    description: 'Responsive expense management dashboard with transaction tracking, categories, budgets, charts and local data persistence.',
    tech: ['React', 'JavaScript', 'Recharts', 'CSS'],
    github: '#'
  },
  {
    title: 'Sigma GPT Bistro Bot',
    type: 'AI Chatbot',
    description: 'Restaurant chatbot using NLP techniques to understand user queries and return relevant responses.',
    tech: ['Python', 'Flask', 'NLTK', 'TF-IDF'],
    github: '#'
  }
];

const skills = {
  'Programming': ['JavaScript', 'Python', 'Java', 'SQL'],
  'Frontend': ['React.js', 'Vite', 'HTML5', 'CSS3', 'Responsive Design'],
  'Backend & Database': ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL'],
  'AI / ML': ['MediaPipe', 'scikit-learn', 'NLTK', 'PyTorch', 'Computer Vision'],
  'Tools': ['Git', 'GitHub', 'VS Code', 'Vercel']
};

function App() {
  return (
    <div>
      <nav className="nav">
        <a className="brand" href="#home">MN<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="https://github.com/manasinaveen07-cpu" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">INFORMATION SCIENCE ENGINEERING STUDENT</p>
            <h1>Hi, I'm <span>Manasi N.</span></h1>
            <h2>Building practical web & AI solutions.</h2>
            <p className="hero-text">
              I’m an engineering student interested in full-stack development, artificial intelligence,
              computer vision and building useful products with clean, intuitive interfaces.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">View My Work ↓</a>
              <a className="secondary-btn" href="https://www.linkedin.com/in/manasi-n-6626302a7" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="orb"></div>
            <div className="code-card">
              <span className="code-muted">const</span> developer = {'{'}<br/>
              &nbsp;&nbsp;focus: <span>"Full Stack + AI"</span>,<br/>
              &nbsp;&nbsp;learning: <span>"Every day"</span>,<br/>
              &nbsp;&nbsp;building: <span>"Real projects"</span><br/>
              {'}'};
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT</p>
            <h2>A curious builder who likes turning ideas into working products.</h2>
          </div>
          <div className="about-grid">
            <p>
              I am a B.E. Information Science Engineering student at Jawaharlal Nehru New College of
              Engineering, Shivamogga. I enjoy learning by building projects that combine software
              development with AI and practical problem solving.
            </p>
            <p>
              My current interests include React-based applications, backend development, computer
              vision and machine learning. I’m continuously improving my development skills through
              hands-on projects, experimentation and collaboration.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">02 — SKILLS</p>
            <h2>Tools I use to build.</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-card" key={group}>
                <h3>{group}</h3>
                <div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">03 — PROJECTS</p>
            <h2>Selected work.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                {project.github !== '#' && (
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View on GitHub ↗</a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <p className="eyebrow">04 — EDUCATION</p>
            <h2>Where I'm learning.</h2>
          </div>
          <div className="education-card">
            <div>
              <p className="education-year">2023 — 2027</p>
              <h3>B.E. in Information Science Engineering</h3>
              <p>Jawaharlal Nehru New College of Engineering, Shivamogga, India</p>
            </div>
            <div className="cgpa">7.65<br/><small>CGPA</small></div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <p className="eyebrow">05 — CONTACT</p>
          <h2>Let's build something useful.</h2>
          <p>I'm open to internships, project collaborations and opportunities to learn and contribute.</p>
          <div className="contact-actions">
            <a className="primary-btn" href="https://www.linkedin.com/in/manasi-n-6626302a7" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
            <a className="secondary-btn" href="https://github.com/manasinaveen07-cpu" target="_blank" rel="noreferrer">Explore GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Manasi N.</span>
        <span>Designed & built with React.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
