import { motion } from "framer-motion";
import React from "react";

function ContactMain() {
  return (
    <div className="container d-flex justify-content-center align-content-center contact">
      <form className="w-50">
        <fieldset>
        <legend>Send us a message</legend>
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              Full name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactMain;
