import React from "react";

function ServicesCard({
  servicesArray,
  setServicesArray,
  setShowModal,
  setServicesTitle,
  setServicesDescription,
  setServicesImage,
  setShowSaveBtn,
  setShowUpdateBtn,
  setIdHolder
}) {
  function handleDeleteService(data) {
    const newService = JSON.parse(localStorage.getItem("ServicesDB")).filter(
      (item) => data.id !== item.id
    );
    setServicesArray(newService);
    localStorage.setItem("ServicesDB", JSON.stringify(newService));
  }

  function handleUpdateService(data) {
    setShowModal(true);
    setShowSaveBtn(false);
    setShowUpdateBtn(true);
    setServicesTitle(data.title);
    setServicesDescription(data.description);
    setServicesImage(data.image);
    setIdHolder(data.id);
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-gap-5">
        {servicesArray.map((item, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <div className="card my-5 w-75 rounded-4">
              <div className="card-img-top">
                <img className="w-100 rounded-top-4" src={item.image} alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleUpdateService(item)}
                >
                  Update Service
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteService(item)}
                >
                  Delete Service
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicesCard;
