import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "./account/Login";
import Signup from "./account/Signup";

function MyHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);

  const handleCloseLogin = () => {
    setShowModalLogin(false);
  };
  const handleCloseSignup = () => {
    setShowModalSignup(false);
  };

  function handleOpen(type) {
    if (type === "Login") {
      setShowModalLogin(true);
    } else if (type === "Signup") {
      setShowModalSignup(true);
    }
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-primary px-5 sticky-top d-flex justify-content-between"
        data-bs-theme="dark"
      >
        <a href="/" className="navbar-brand">
          NJV Software Services
        </a>
        <div>
          <ul
            className={
              isNavOpen
                ? "#navigation active navbar-nav"
                : "#navigation navbar-nav"
            }
            id="navigation"
          >
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
            <li className="nav-item me-lg-5 me-md-2">
              <a
                className="nav-link hover-underline-animation"
                href="/contactUs"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => handleOpen("Signup")}
              >
                Signup
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => handleOpen("Login")}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
        <div type="button" className="text-dark" id="mobile">
          <i id="bar" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
          </i>
        </div>
      </nav>
      <Login showModalLogin={showModalLogin} handleCloseLogin={handleCloseLogin} />
      <Signup showModalSignup={showModalSignup} handleCloseSignup={handleCloseSignup} />
    </>
  );
}

export default MyHeader;
