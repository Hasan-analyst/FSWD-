import React, { useState } from "react";
import "./Navbar.css";
import LogoutButton from "./LogoutButton";

export default function Navbar({ showLogout, onLogout }) {
  const [open, setOpen] = useState(false);
  // Don't close menu on click, keep navbar always visible
  const closeMenu = () => {};

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__brand">
          Hasan's Portfolio<span></span>
        </a>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          {showLogout && <LogoutButton onLogout={onLogout} />}
        </nav>
      </div>
    </header>
  );
}
