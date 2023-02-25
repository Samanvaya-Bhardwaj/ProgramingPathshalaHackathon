import React from "react";
// import { a } from 'react-router-dom'

export default function Navbar({
  intro,
  speciality,
  scrollToSection,
  contact,
  courses,
}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-light" href="/">
            Learn-Ed
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  onClick={() => scrollToSection(intro)}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  onClick={() => scrollToSection(intro)}
                >
                  Motivator
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  onClick={() => scrollToSection(courses)}
                >
                  Learn
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  onClick={() => scrollToSection(contact)}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* <div className="buttons">
              <a href="/" className="btn  btn-outline-light mx-2">
                Login
              </a>
              <a href="/" className="btn btn-outline-light mx-2">
                Register
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
