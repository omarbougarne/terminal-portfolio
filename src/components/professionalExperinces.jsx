import experiences from '../data/experinces'
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
