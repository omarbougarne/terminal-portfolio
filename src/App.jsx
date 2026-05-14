import { useState } from 'react'
import projects from './projects'
import { ascii, systemInfo } from './ascii'
import { Contact, Interests, Projects, ProfessionalExperience } from './components'
import './App.css'

function App() {
  const [query, setQuery] = useState('')

  return (
    <>
      <div className="terminal-input">
        <h3 className="prompt">
          Omarshell@omarportfolio:~$
          <span className="command">omar -h</span>
        </h3>
        <div className="input-line">
          <input type="text" placeholder="Type a command..." />
          <span className="cursor">█</span>
        </div>
      </div>
      <div className="terminal">
        <div className="row">
          <pre className="ascii">{ascii}</pre>
          <pre className="info">{systemInfo}</pre>
        </div>
      </div>
      <Projects />
      <Interests />
      <ProfessionalExperience />
      <Contact />
      <span>Style theme: monospace</span>
    </>
  )
}

export default App
