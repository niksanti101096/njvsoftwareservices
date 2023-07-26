import React, { useEffect, useRef, useState } from "react";
import ServicesCard from "./ServicesCard";
import ServicesModal from "./ServicesModal";

function ServicesMain() {
  const servicesData = localStorage.getItem("ServicesDB")
    ? JSON.parse(localStorage.getItem("ServicesDB"))
    : [];

  const [servicesArray, setServicesArray] = useState(servicesData);
  const [servicesTitle, setServicesTitle] = useState("");
  const [servicesDescription, setServicesDescription] = useState("");
  const [servicesImage, setServicesImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(true);
  const [showUpdateBtn, setShowUpdateBtn] = useState(false);
  const [idHolder, setIdHolder] = useState();

  const inputAddServiceTitle = useRef();

  const handleClose = () => {
    setShowModal(false);
    setServicesTitle("");
    setServicesDescription("");
    setServicesImage("");
  };
  const handleShowModal = () => {
    setShowModal(true);
    setShowSaveBtn(true);
    setShowUpdateBtn(false);
    setTimeout(() => {
      inputAddServiceTitle.current.focus();
    }, 100);
  };

  function handleServiceTitle(e) {
    setServicesTitle(e.target.value);
  }

  function handleServiceDescription(e) {
    setServicesDescription(e.target.value);
  }

  function handleServiceImage(e) {
    setServicesImage(e.target.value);
  }

  function handleSave(e) {
    e.preventDefault();
    if (
      servicesTitle !== "" &&
      servicesDescription !== "" &&
      servicesImage !== ""
    ) {
      const serviceId = Date.now();

      const newService = {
        id: serviceId,
        title: servicesTitle,
        description: servicesDescription,
        image: servicesImage,
      };
      setServicesArray([...servicesArray, newService]);
      setServicesTitle("");
      setServicesDescription("");
      setServicesImage("");
      setShowModal(false);
    } else {
      alert("Please fill all fields");
    }
  }
  function handleUpdate(e) {
    e.preventDefault();
    if (
      servicesTitle !== "" &&
      servicesDescription !== "" &&
      servicesImage !== ""
    ) {
      const newService = {
        id: idHolder,
        title: servicesTitle,
        description: servicesDescription,
        image: servicesImage,
      };
      setServicesArray([
        ...servicesArray.filter((service) => service.id !== idHolder),
        newService,
      ]);
      setServicesTitle("");
      setServicesDescription("");
      setServicesImage("");
      setShowModal(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("ServicesDB", JSON.stringify(servicesArray));
  }, [servicesArray]);

  return (
    <div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-info"
          onClick={handleShowModal}
        >
          Add Service
        </button>
        <button type="button" className="btn btn-danger ms-3">
          Remove Services
        </button>
      </div>
      <ServicesModal
        showModal={showModal}
        handleClose={handleClose}
        inputAddServiceTitle={inputAddServiceTitle}
        handleSave={handleSave}
        servicesTitle={servicesTitle}
        servicesDescription={servicesDescription}
        servicesImage={servicesImage}
        handleServiceTitle={handleServiceTitle}
        handleServiceDescription={handleServiceDescription}
        handleServiceImage={handleServiceImage}
        showSaveBtn={showSaveBtn}
        showUpdateBtn={showUpdateBtn}
        handleUpdate={handleUpdate}
      />
      <ServicesCard
        servicesArray={servicesArray}
        setServicesArray={setServicesArray}
        setShowModal={setShowModal}
        setServicesTitle={setServicesTitle}
        setServicesDescription={setServicesDescription}
        setServicesImage={setServicesImage}
        setShowSaveBtn={setShowSaveBtn}
        setShowUpdateBtn={setShowUpdateBtn}
        setIdHolder={setIdHolder}
      />
    </div>
  );
}

export default ServicesMain;
