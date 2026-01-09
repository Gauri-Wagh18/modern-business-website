import { NavLink } from "react-router-dom";
import "../../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-left">
        <h1 className="logo"> Phoenix Institute</h1>
        <span className="tagline">Rise in Education</span>
      </div>

      {/* CENTER */}
      <nav className="header-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/results">Results</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* RIGHT */}
      <div className="header-right">
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
      </div>
    </header>
  );
}
