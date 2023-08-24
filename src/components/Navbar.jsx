import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Sharon <span className='tokiti'>Tokiti</span>
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
