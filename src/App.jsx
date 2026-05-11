import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
        <div>
            <p>
                Searching...
                <span></span>
            </p>
        </div>
    </section>
    <h3>Omarshell@omarportfolio: ~$ omar -h </h3>
                <div className="terminal">
                    <div className="row">
                        <pre className="ascii">
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓<br/>
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓<br/>
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓<br/>
                ▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓<br/>
                ▓▓▓▓▓▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓▓<br/>
                ▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓<br/>
                ▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓  ▓▓<br/>
                ▓▓▓▓▓▓▓▓▓▓  ▓▓  ▓▓▓▓  ▓▓<br/>
                ▓▓▓▓▓▓    ▓▓▓▓▓▓    ▓▓▓▓<br/>
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓<br/>
                    </pre>

                    <pre className="info">
                ┌─ SYSTEM INFO ─────────────────────┐<br/>
                │ ◉ USER:    Omar Bougarne          │<br/>
                │ ⚡ ROLE:    Fullstack Developer    │<br/>
                │ ◎ LOC:     Morocco                │<br/>
                │ ✉ MAIL:    bougarneomardev@gmail  │<br/>
                ├─ STATUS ──────────────────────────┤<br/>
                │ ◈ STACK:   JavaScript             │<br/>
                │ ↗ LEARN:   JS / TS                │<br/>
                │ ⚘ SEEK:    fun in programming  │<br/>
                │ ◑ HOBBY:   Linux distros          │<br/>
                └───────────────────────────────────┘<br/>
                    </pre>
                </div>
            </div>
            <div className="command">
    <h3>Omarshell@omarportfolio: ~/projects$ ls</h3>
                <div className="projects">
                    <div className="project-row">
                        <span className="name">Ecommerce App</span>
                        <span className="stack">React + Node</span>
                        <span className="desc">Fullstack store system</span>
                    </div>

                    <div className="project-row">
                        <span className="name">Portfolio CLI</span>
                        <span className="stack">React</span>
                        <span className="desc">Terminal-style portfolio</span>
                    </div>

                    <div className="project-row">
                        <span className="name">AI Newsletter </span>
                        <span className="stack">Next.js</span>
                        <span className="desc">Customizable AI news for you</span>
                    </div>
                    </div>
            </div>
            <div className="command">
    <h3>Omarshell@omarportfolio: ~$ which interests</h3>

            <pre className="info">
            - JavaScript / TypeScript
            - Linux & system tinkering
            - Fullstack development
            - AI tools & automation
            - Finance in tech (learning phase)
            </pre>
            </div>
            <div className="command">
    <h3>Omarshell@omarportfolio: ~$ contact</h3>

                <pre className="info">
                🤝 Connect With Me
                <div>
                🌐 Portfolio: your-portfolio-url.netlify.app
                </div>
                <div>
                💼 LinkedIn: linkedin.com/in/omar-bougarne
                </div>
                <div>
                🐙 GitHub: @omarbougarne
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
