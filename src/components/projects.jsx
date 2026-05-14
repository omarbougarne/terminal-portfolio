import projects from "../data/projects"
export default function Projects() {
  return (
    <div className="command">
        <h3>
          Omarshell@omarportfolio:~$
          <span className='shell-line'>projects ls</span>
        </h3>
        {projects.map((project) => (
          <div className="project-row" key={project.name}>
            <span>{project.name}</span>
            <span>{project.stack}</span>
            <span>{project.desc}</span>
          </div>
        ))}
      </div>
  )
}
