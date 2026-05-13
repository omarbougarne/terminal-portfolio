import { useState } from 'react'
import projects from './projects'
import {ascii, systemInfo} from './ascii'
import './App.css'

function App() {
  const [query, setQuery] = useState("")

  return (
    <>
        <div className="terminal-input">
        <h3 className="prompt">
            Omarshell@omarportfolio:~$
            <span className="command">omar -h</span>
        </h3>

        <div className="input-line">

            <input
            type="text"
            placeholder="Type a command..."
            />

            <span className="cursor">█</span>
        </div>
    </div>
                <div className="terminal">
  <div className="row">

    <pre className="ascii">
      {ascii}
      </pre>
    <pre className="info">{systemInfo}</pre>

    </div>
    </div>
    <h3>Omarshell@omarportfolio:<span className="command">~/projects$ ls</span></h3>

                <div className="projects">
                    {projects.map((project) => {
                        return(
                            <div className="project-row" key={project.name}>
                                <span>{project.name}</span>
                                <span>{project.stack}</span>
                                <span>{project.desc}</span>
                            </div>
                        )
                    })}
            </div>
            <div className="command">
    <h3>Omarshell@omarportfolio:~$<span className="command">which --interests</span></h3>

            <pre className="info">
            - JavaScript / TypeScript
            - Linux & system tinkering
            - Fullstack Web&Mobile development
            </pre>
            </div>
            <div className="command">
    <h3>Omarshell@omarportfolio:~$<span className="command">experiences ls</span></h3>

                <pre className="info">
                💼 Professional Experinces
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                </pre>
            </div>
            <div className="command">
                <h3>Omarshell@omarportfolio:~$<span className="command">contact --info</span></h3>
                <pre className="info">
                🤝 Connect With Me
                <div>
                🌐 Portfolio: your-portfolio-url.netlify.app
                </div>
                <div>
                💼 LinkedIn: linkedin.com/in/omar-bougarne
                </div>
                <div>
                📦 GitHub: @omarbougarne
                </div>
                <div>
                📧 Email: bougarneomardev@gmail.com
                </div>
                </pre>
            </div>
            <span>Style theme monospace</span>
    </>
  )
}

export default App
