import React, { useEffect, useRef, useState } from "react";
import ServicesCard from "./ServicesCard";
import ServicesModal from "./ServicesModal";
import ServicesIntro from "./ServicesIntro";
import Swal from "sweetalert2";

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
  const [imageHolder, setImageHolder] = useState("");

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
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setServicesImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleSave(e) {
    e.preventDefault();
    if (servicesTitle !== "" && servicesDescription !== "") {
      Swal.fire({
        title: `Are you sure you want to add ${servicesTitle}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!",
      }).then((result) => {
        if (result.isConfirmed) {
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
          Swal.fire("Added!", "The service has been added", "success");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please check your inputs",
      });
    }
  }
  function handleUpdate(e) {
    e.preventDefault();
    if (servicesTitle !== "" && servicesDescription !== "") {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          if (servicesImage === "") {
            const updateData = servicesArray.map((item) => {
              if (item.id === idHolder) {
                return {
                  ...item,
                  title: servicesTitle,
                  description: servicesDescription,
                  image: imageHolder,
                };
              } else {
                return item;
              }
            });
            setServicesArray(updateData);
          } else {
            const updateData = servicesArray.map((item) => {
              if (item.id === idHolder) {
                return {
                  ...item,
                  title: servicesTitle,
                  description: servicesDescription,
                  image: servicesImage,
                };
              } else {
                return item;
              }
            });
            setServicesArray(updateData);
          }

          setServicesTitle("");
          setServicesDescription("");
          setServicesImage("");
          setShowModal(false);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          setServicesTitle("");
          setServicesDescription("");
          setServicesImage("");
          setShowModal(false);
        }
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("ServicesDB", JSON.stringify(servicesArray));
  }, [servicesArray]);

  return (
    <div>
      <ServicesIntro handleShowModal={handleShowModal} />
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
        setShowSaveBtn={setShowSaveBtn}
        setShowUpdateBtn={setShowUpdateBtn}
        setIdHolder={setIdHolder}
        setImageHolder={setImageHolder}
      />
    </div>
  );
}

export default ServicesMain;
