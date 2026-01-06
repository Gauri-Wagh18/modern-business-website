import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-wrapper">
        {/* Logo & Institute Name */}
        <div className="brand">
          <NavLink to="/" onClick={closeMenu}>
            <span className="brand-name">ABC Tuition Institute</span>
            <span className="brand-tagline">Excellence in Education</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>
            Courses
          </NavLink>
          <NavLink to="/results" className={({ isActive }) => isActive ? "active" : ""}>
            Results
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="header-actions">
          <NavLink to="/admissions" className="admission-btn">
            Admissions Open
          </NavLink>

          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/courses" onClick={closeMenu}>Courses</NavLink>
          <NavLink to="/results" onClick={closeMenu}>Results</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/admissions" className="mobile-cta" onClick={closeMenu}>
            Admissions Open
          </NavLink>
        </nav>
      )}
    </header>
  );
}
