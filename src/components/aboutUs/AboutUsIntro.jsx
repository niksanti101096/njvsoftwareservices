import { motion } from "framer-motion";
import React, { useRef } from "react";

function AboutUsIntro() {
  const scrollRef = useRef(null)
  return (
    <>
      <div className="about">
        <motion.div
          className="sloganAboutUs default-text-color text-end ms-5 pt-5 visually-hidden"
          initial={{ y: "-50vh" }}
          animate={{ y: "5vh", x: "-10vw"}}
          transition={{ delay: 0.2, duration: 1 }}
        >
          About Us
        </motion.div>
      </div>
      <div
        className="aboutWelcome"
        ref={scrollRef}
      >
        <motion.p className="container text-light px-5 py-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ root: scrollRef }}>
          Welcome to NJV Software Sevices, the leading outsourcing company in IT
          Programming Industry. The company is founded in 2023 by a team of
          three skillful, expert, and proficient developers in the Philippines.
          Here at our company, we believed that your brilliant ideas are great
          enough to be brought to reality with the help of cutting-edge
          Technology.
        </motion.p>
      </div>
    </>
  );
}

export default AboutUsIntro;
