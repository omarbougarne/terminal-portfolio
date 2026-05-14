const experiences = [
  {
    place: 'CodeCraft Initiative (Remote)',
    role: 'Course Instructor',
    year: '2025',
    stack: 'Node.js, Express.js',
    desc: 'Volunteer instructor, teaching online courses on Node.js and Express.js in Arabic.',
  },
  {
    place: 'OCP Solution (Safi)',
    role: 'HSE Mobile Application',
    year: '2025',
    stack: 'React Native, Laravel',
    desc: 'UI/UX dev for system & subsystem management modules, data flow management, TypeScript troubleshooting.',
  },
  {
    place: 'BrandeGx (Safi)',
    role: 'casajobs.ma',
    year: '2025',
    stack: 'Python, React',
    desc: 'Built a chatbot, personalized email logic for candidate skill requests, and handled deployment management.',
  },
  {
    place: 'MediaZain (Casablanca)',
    role: 'Chambre espagnole',
    year: '2024',
    stack: 'PHP, Laravel, JavaScript',
    desc: 'Platform performance optimization, improved search system and filters.',
  },
]

export default function ProfessionalExperience() {
  return (
    <div className="command">
      <h3>
        Omarshell@omarportfolio:~$
        <span className="shell-line"> experiences ls</span>
      </h3>
      <div className="experiences">
        {experiences.map((exp) => (
          <div className="exp-row" key={exp.place}>
            <span className="exp-place">📌 {exp.place}</span>
            <span className="exp-role">{exp.role}</span>
            <span className="exp-stack">📅 {exp.year} · {exp.stack}</span>
            <span className="exp-desc">{exp.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
