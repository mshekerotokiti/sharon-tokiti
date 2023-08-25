import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/logo.svg" alt="Logo" />
        </a>
      </div>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="resume">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
