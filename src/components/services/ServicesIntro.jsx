import React from "react";

function ServicesIntro({ handleShowModal }) {
  return (
    <div className="services">
      <div className="text-end">
        <button
          type="button"
          className="btn btn-info me-5 mt-3"
          onClick={handleShowModal}
        >
          Add Service
        </button>
      </div>
      <div className="sloganServices default-text-color">Services</div>
    </div>
  );
}

export default ServicesIntro;
