import { useState } from 'react'
import projects from './data/projects'
import { ascii, systemInfo } from './data/ascii'
import { Contact, Interests, Projects, ProfessionalExperience } from './components'
import './App.css'

const sections = [
  { id: 'projects', component: <Projects /> },
  { id: 'profesionalExperince', component: <ProfessionalExperience /> },
  { id: 'interests', component: <Interests /> },
  { id: 'contact', component: <Contact /> },
]

function App() {
  const [query, setQuery] = useState('')

  const filtered = sections.filter(s => s.id.includes(query.toLowerCase())
  )


  return (
    <>
      <div className="terminal-input">
        <h3 className="prompt">
          Omarshell@omarportfolio:~$
          <span className="command">omar -h</span>
        </h3>
        <div className="input-line">
            <span className="cursor">█</span>
          <input
          type="text"
          placeholder="Type a command..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="terminal">
        <div className="row">
          <pre className="ascii">{ascii}</pre>
          <pre className="info">{systemInfo}</pre>
        </div>
        </div>
        {filtered.map(f => (
            <div key={f.id}>{f.component}</div>
        ))}
      <span>Style theme: monospace</span>
    </>
  )
}

export default App
