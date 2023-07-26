import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

function MyHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-primary px-5 fixed-top d-flex justify-content-between"
        data-bs-theme="dark"
      >
        <a href="/" className="navbar-brand">
          NJV Software Services
        </a>
        <div>
          <ul className={isNavOpen? "#navigation active navbar-nav" : "#navigation navbar-nav"} id="navigation">
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" href="/aboutUs">
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
              <a className="nav-link hover-underline-animation" href="/careers">
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
        <div type="button" className="text-dark" id="mobile">
          <i id="bar" onClick={() => setIsNavOpen(!isNavOpen)}>{isNavOpen ? <CloseIcon /> : <MenuIcon />}</i>
        </div>
      </nav>
    </>
  );
}

export default MyHeader;
