import globeIcon from "../assets/globe.svg";

export default function Header() {
    return (
      <header className="header">
        <nav className="navbar">
            <img src={globeIcon} alt="Globe icon" />
            <span>my travel journal.</span>
        </nav>
      </header>
    )
}
