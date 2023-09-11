import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
        <h1>Sherile</h1>
        <ul>
          <li>
            <a href="About" target="_blank">
            About</a>
            </li>
          <li>
            <a href="Projacts" target="_blank">
            Projects</a>
            </li>
          <li>
            <a href="Skills" target="_blank">
            Skills</a>
            </li>
            <li>
            <a href="Contact" target="_blank">
            Contact</a>
            </li>
        </ul>
      </header>
    </>
  )
}

export default App
