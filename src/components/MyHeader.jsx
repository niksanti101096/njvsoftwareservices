import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "./account/Login";
import Signup from "./account/Signup";
import { motion } from "framer-motion";

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
        <motion.a
          href="/"
          className="navbar-brand"
          initial={{ y: "-10vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          NJV Software Services
        </motion.a>
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
              <motion.a
                className="nav-link hover-underline-animation"
                href="/aboutUs"
                initial={{ y: "-10vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                About Us
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link hover-underline-animation"
                href="/services"
                initial={{ y: "-10vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Services
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link hover-underline-animation"
                href="/careers"
                initial={{ y: "-10vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                Careers
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link hover-underline-animation"
                href="/technologies"
                initial={{ y: "-10vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.1, duration: 1.2 }}
              >
                Technologies
              </motion.a>
            </li>
            <li className="nav-item me-lg-5 me-md-2">
              <motion.a
                className="nav-link hover-underline-animation"
                href="/contactUs"
                initial={{ y: "-10vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.3, duration: 1.4 }}
              >
                Contact Us
              </motion.a>
            </li>
            <li className="nav-item d-flex align-items-center me-2">
              <motion.button
                className="btn btn-outlined-primary btn-sm"
                type="button"
                onClick={() => handleOpen("Signup")}
                initial={{ y: "-10vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.5, duration: 1.6 }}
              >
                Signup
              </motion.button>
            </li>
            <li className="nav-item d-flex align-items-center">
              <motion.button
                className="btn btn-outlined-primary btn-sm"
                type="button"
                onClick={() => handleOpen("Login")}
                initial={{ y: "-10vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.5, duration: 1.6 }}
              >
                Login
              </motion.button>
            </li>
          </ul>
        </div>
        <div type="button" className="text-dark" id="mobile">
          <i id="bar" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
          </i>
        </div>
      </nav>
      <Login
        showModalLogin={showModalLogin}
        handleCloseLogin={handleCloseLogin}
      />
      <Signup
        showModalSignup={showModalSignup}
        handleCloseSignup={handleCloseSignup}
      />
    </>
  );
}

export default MyHeader;
