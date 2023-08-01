import { motion } from "framer-motion";
import React from "react";

function AboutUsIntro() {
  return (
    <div className="about">
      <motion.div
        className="sloganAboutUs default-text-color w-50 ms-5 pt-5"
        initial={{ y: "-50vh" }}
        animate={{ y: "5vh"}}
        transition={{ delay: 0.2, duration: 1 }}
      >
        About Us
      </motion.div>
    </div>
  );
}

export default AboutUsIntro;
