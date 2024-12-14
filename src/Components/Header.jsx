import ReactLogo from "../assets/react.svg"


export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav-header">
        <img src={ReactLogo} />
        <span style={{ marginLeft: "8px" }}>ReactFacts</span>
      </nav>
    </header>
  )
}