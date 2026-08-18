import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    title: 'NatyaMudra AI',
    type: 'AI / Computer Vision',
    description:
      'AI-powered Bharatanatyam mudra recognition system that identifies hand gestures through a live webcam and provides meaningful learning feedback.',
    tech: ['React', 'MediaPipe', 'JavaScript', 'Computer Vision'],
    github: '#',
    featured: true
  },
  {
    title: 'Blood Report Analyzer',
    type: 'AI / Full Stack',
    description:
      'AI-assisted application for analyzing blood report data and presenting results through a simple and user-friendly interface.',
    tech: ['Python', 'AI/ML', 'React', 'REST API'],
    github:
      'https://github.com/manasinaveen07-cpu/Blood_report_analyzer',
    featured: true
  },
  {
    title: 'Library Management System',
    type: 'Full Stack',
    description:
      'Full-stack system for managing books, lending, returns, search, users and fine calculation with a cloud database.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: '#',
    featured: false
  },
  {
    title: 'Student Expense Tracker',
    type: 'Web Application',
    description:
      'Responsive expense management dashboard with transaction tracking, categories, budgets, charts and local data persistence.',
    tech: ['React', 'JavaScript', 'Recharts', 'CSS'],
    github: '#',
    featured: false
  },
  {
    title: 'Sigma GPT Bistro Bot',
    type: 'AI Chatbot',
    description:
      'Restaurant chatbot using NLP techniques to understand user queries and return relevant responses.',
    tech: ['Python', 'Flask', 'NLTK', 'TF-IDF'],
    github: '#',
    featured: false
  }
];

const skills = {
  Programming: ['JavaScript', 'Python', 'Java', 'SQL'],

  Frontend: [
    'React.js',
    'Vite',
    'HTML5',
    'CSS3',
    'Responsive Design'
  ],

  'Backend & Database': [
    'Node.js',
    'Express.js',
    'REST APIs',
    'MongoDB',
    'PostgreSQL'
  ],

  'AI / ML': [
    'MediaPipe',
    'scikit-learn',
    'NLTK',
    'PyTorch',
    'Computer Vision'
  ],

  Tools: [
    'Git',
    'GitHub',
    'VS Code',
    'Vercel'
  ]
};

const aboutCards = [
  {
    number: '01',
    title: 'Full Stack',
    text:
      'Building responsive frontend and backend applications with modern web technologies.',
    tags: ['React', 'Node.js']
  },
  {
    number: '02',
    title: 'AI / ML',
    text:
      'Exploring artificial intelligence through computer vision, NLP and machine learning projects.',
    tags: ['AI/ML', 'Computer Vision']
  },
  {
    number: '03',
    title: 'Problem Solving',
    text:
      'Learning by turning ideas into practical projects that solve real-world problems.',
    tags: ['Projects', 'Learning']
  },
  {
    number: '04',
    title: 'Currently Learning',
    text:
      'Continuously improving my skills in full-stack development, AI and software engineering.',
    tags: ['Development', 'Growth']
  }
];

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="nav">

        <a className="brand" href="#home">
          MN<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-cta"
          href="https://github.com/manasinaveen07-cpu"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

      </nav>


      <main>

        {/* ================= HOME ================= */}

        <section id="home" className="hero section">

          <div className="hero-copy">

            <div className="hero-status">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="eyebrow">
              INFORMATION SCIENCE & ENGINEERING STUDENT
            </p>

            <h1>
              Hi, I’m <span>Manasi N.</span>
            </h1>

            <h2>
              Building practical
              <br />
              <span className="hero-highlight">
                web & AI solutions.
              </span>
            </h2>

            <p className="hero-text">
              I’m an Information Science and Engineering student who enjoys
              turning ideas into practical applications using full-stack
              development, artificial intelligence and computer vision.
            </p>

            <div className="hero-actions">

              <a
                className="primary-btn"
                href="#projects"
              >
                View Projects
                <span>↓</span>
              </a>

              <a
                className="secondary-btn"
                href="https://www.linkedin.com/in/manasi-n-6626302a7"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                className="secondary-btn"
                href="https://github.com/manasinaveen07-cpu"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

            </div>


            {/* ================= HERO MINI INFO ================= */}

            <div className="hero-mini-info">

              <div>
                <strong>5+</strong>
                <span>Projects</span>
              </div>

              <div className="mini-divider"></div>

              <div>
                <strong>AI + Web</strong>
                <span>Focus</span>
              </div>

            </div>

          </div>


          {/* ================= HOME RIGHT CARD ================= */}

          <div className="hero-visual">

            <div className="hero-glow"></div>

            <div className="currently-card">

              <div className="card-top">

                <div>

                  <p className="card-eyebrow">
                    CURRENTLY BUILDING
                  </p>

                  <span className="card-live">
                    <span></span>
                    In progress
                  </span>

                </div>

                <div className="card-index">
                  01
                </div>

              </div>


              <h3>
                AI + Full Stack
                <br />
                Projects
              </h3>


              <div className="card-line"></div>


              <div className="card-education">

                <div className="card-label">
                  EDUCATION
                </div>

                <strong>
                  B.E. Information Science
                </strong>

                <span>
                  2023 — 2027
                </span>

              </div>


              <div className="card-cgpa">

                <div>

                  <span>
                    Current CGPA
                  </span>

                  <strong>
                    8.0
                  </strong>

                </div>

              </div>


              <div className="card-line"></div>


              <div className="card-tech-title">
                TECH I WORK WITH
              </div>


              <div className="card-tech">

                <span>React</span>
                <span>Python</span>
                <span>AI/ML</span>
                <span>Node.js</span>

              </div>

            </div>


            <div className="floating-tag tag-one">
              <span>01</span>
              Full Stack
            </div>

            <div className="floating-tag tag-two">
              <span>02</span>
              AI / ML
            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-heading about-heading">

            <p className="eyebrow">
              01 — ABOUT
            </p>

            <h2>
              A little about me.
            </h2>

            <p className="section-description">
              I enjoy learning by building. My focus is on creating useful
              applications while continuously improving my development and
              problem-solving skills.
            </p>

          </div>


          <div className="about-layout">

            {/* LEFT INTRO */}

            <div className="about-intro">

              <div className="about-intro-number">
                01
              </div>

              <h3>
                Turning ideas into
                <span> working products.</span>
              </h3>

              <p>
                I am a B.E. Information Science and Engineering student who
                enjoys working across web development and artificial
                intelligence.
              </p>

              <p>
                I learn best by building projects, experimenting with new
                technologies and solving practical problems step by step.
              </p>

              <div className="about-tags">
                <span>Curious</span>
                <span>Builder</span>
                <span>Problem Solver</span>
              </div>

            </div>


            {/* RIGHT ABOUT CARDS */}

            <div className="about-cards">

              {aboutCards.map((card, index) => (

                <div
                  className="about-card"
                  key={card.number}
                  style={{
                    '--about-delay': `${index * 0.08}s`
                  }}
                >

                  <div className="about-card-top">

                    <span className="about-number">
                      {card.number}
                    </span>

                    <span className="about-card-arrow">
                      ↗
                    </span>

                  </div>

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.text}
                  </p>

                  <div className="about-card-tags">

                    {card.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="section"
        >

          <div className="section-heading">

            <p className="eyebrow">
              02 — EDUCATION
            </p>

            <h2>
              Education
            </h2>

          </div>


          <div className="education-card">

            <div className="education-content">

              <p className="education-year">
                2023 — 2027
              </p>

              <h3>
                B.E. in Information Science and Engineering
              </h3>

              <p>
                Jawaharlal Nehru New College of Engineering
              </p>

              <span>
                Shivamogga, India
              </span>

            </div>


            <div className="education-cgpa">

              <span>
                Current CGPA
              </span>

              <strong>
                8.0
              </strong>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section"
        >

          <div className="section-heading">

            <p className="eyebrow">
              03 — SKILLS
            </p>

            <h2>
              Technical Skills
            </h2>

          </div>


          <div className="skills-grid">

            {Object.entries(skills).map(
              ([group, items], index) => (

                <div
                  className="skill-card"
                  key={group}
                  style={{
                    '--skill-delay': `${index * 0.08}s`
                  }}
                >

                  <div className="skill-card-top">

                    <span className="skill-number">
                      0{index + 1}
                    </span>

                    <span className="skill-dot"></span>

                  </div>

                  <h3>
                    {group}
                  </h3>

                  <div className="chips">

                    {items.map((item) => (

                      <span key={item}>
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              )
            )}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-heading projects-heading">

            <p className="eyebrow">
              04 — PROJECTS
            </p>

            <h2>
              Things I’ve built.
            </h2>

            <p className="section-description">
              A selection of projects combining web development,
              artificial intelligence and practical problem solving.
            </p>

          </div>


          <div className="projects-grid">

            {projects.map((project, index) => (

              <article
                className={`project-card ${
                  project.featured
                    ? 'featured-project'
                    : ''
                }`}
                key={project.title}
                style={{
                  '--project-delay': `${index * 0.08}s`
                }}
              >

                <div className="project-top">

                  <span className="project-number">
                    0{index + 1}
                  </span>

                  <span className="project-type">
                    {project.type}
                  </span>

                </div>


                <div className="project-content">

                  <div className="project-title-row">

                    <h3>
                      {project.title}
                    </h3>

                    {project.featured && (

                      <span className="featured-label">
                        Featured
                      </span>

                    )}

                  </div>

                  <p>
                    {project.description}
                  </p>

                </div>


                <div className="project-bottom">

                  <div className="chips">

                    {project.tech.map(
                      (technology) => (

                        <span key={technology}>
                          {technology}
                        </span>

                      )
                    )}

                  </div>


                  {project.github !== '#' && (

                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >

                      <span>
                        View on GitHub
                      </span>

                      <span className="arrow">
                        ↗
                      </span>

                    </a>

                  )}

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact section"
        >

          <p className="eyebrow">
            05 — CONTACT
          </p>

          <h2>
            Let’s build something useful.
          </h2>

          <p className="contact-description">
            I’m open to internships, project collaborations and
            opportunities to learn and contribute.
          </p>


          <div className="contact-grid">

            {/* EMAIL */}

            <a
              className="contact-card"
              href="mailto:manasinaveen.07@gmail.com"
            >

              <div className="contact-icon">
                ✉
              </div>

              <div className="contact-card-content">

                <span className="contact-label">
                  EMAIL
                </span>

                <strong>
                  manasinaveen.07@gmail.com
                </strong>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* PHONE */}

            <a
              className="contact-card"
              href="tel:+917019574628"
            >

              <div className="contact-icon">
                ☎
              </div>

              <div className="contact-card-content">

                <span className="contact-label">
                  PHONE
                </span>

                <strong>
                  +91 7019574628
                </strong>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* LINKEDIN */}

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/manasi-n-6626302a7"
              target="_blank"
              rel="noreferrer"
            >

              <div className="contact-icon">
                in
              </div>

              <div className="contact-card-content">

                <span className="contact-label">
                  LINKEDIN
                </span>

                <strong>
                  Connect with me
                </strong>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* GITHUB */}

            <a
              className="contact-card"
              href="https://github.com/manasinaveen07-cpu"
              target="_blank"
              rel="noreferrer"
            >

              <div className="contact-icon">
                &lt;/&gt;
              </div>

              <div className="contact-card-content">

                <span className="contact-label">
                  GITHUB
                </span>

                <strong>
                  View my projects
                </strong>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>

          </div>


          <div className="contact-note">
            Usually building, learning and improving something new.
          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <span>
          © 2026 Manasi N.
        </span>

        <span>
          Designed & built with React.
        </span>

      </footer>

    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);