import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <MainContent />
)

function MainContent() {
  return (
    <div>
      <img />
      <h1>Fun facts about react</h1>
      <ul>
        <li>Released in 2013</li>
        <li>Created by Jordan Walker</li>
        <li>200k stars on Github</li>
        <li>Maintained by Meta</li>
        <li>Building block of modern web</li>
      </ul>
    </div>
  )
}

