import { motion } from "framer-motion";
import React from "react";

function ServicesIntro({ handleShowModal }) {
  return (
    <div className="services">
      <div className="text-end">
        <motion.button
          type="button"
          className="btn btn-info me-5 mt-3"
          onClick={handleShowModal}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Add Service
        </motion.button>
      </div>
      <motion.div
        className="sloganServices default-text-color"
        initial={{ x: -750 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Services
      </motion.div>
    </div>
  );
}

export default ServicesIntro;
