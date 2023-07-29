import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home d-flex flex-column justify-content-center w-50 ms-5">
      <motion.div
        className="sloganHome default-text-color"
        initial={{ x: "-50vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Empowering Your Digital Journey: Embrace Our Software Expertise.
      </motion.div>
      <motion.div
        initial={{ y: "120vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a className="text-decoration-none" href="/">
          Click here to learn more <ArrowRightAltIcon></ArrowRightAltIcon>
        </a>
      </motion.div>
    </div>
  );
}

export default Home;
