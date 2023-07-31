import { motion } from "framer-motion";

function ServicesIntro({ handleShowModal }) {
  const role = sessionStorage.getItem("CurrentAccount")
    ? JSON.parse(sessionStorage.getItem("CurrentAccount"))
    : [{ fullname: "User", admin: false }];

  return (
    <div className="services">
      {role.admin && (
        <div className="text-end">
          <motion.button
            type="button"
            className="btn btn-info me-5 mt-3"
            onClick={handleShowModal}
            initial={{ y: -100 }}
            animate={{ y: "7vh" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Add Service
          </motion.button>
        </div>
      )}
      <motion.div
        className="sloganServices default-text-color"
        initial={{ x: -750 }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Services
      </motion.div>
    </div>
  );
}

export default ServicesIntro;
