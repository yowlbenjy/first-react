import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <MainContent />
)


function Header () {
  return(
    <header>
    <img />
  </header>
  )
}

function Footer (){
  return (
    <footer>
    <small>Created with heart in New York</small>
  </footer>
  )
}

function MainContent() {
  return (
    <>
      <Header/>

      <main>
      <h1>Fun facts about react</h1>
      <ul>
        <li>Released in 2013</li>
        <li>Created by Jordan Walker</li>
        <li>200k stars on Github</li>
        <li>Maintained by Meta</li>
        <li>Building block of modern web</li>
      </ul>
      </main>
      
      <Footer/>
    </>
  )
}



