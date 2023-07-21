import React from "react";

function MyHeader() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-primary px-5 fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NJV Software Services
          </a>
          <div className="d-flex">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link hover-underline-animation"
                    href="/aboutUs"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link hover-underline-animation"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link hover-underline-animation"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link hover-underline-animation"
                    href="/technologies"
                  >
                    Technologies
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link hover-underline-animation"
                    href="/contactUs"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MyHeader;
