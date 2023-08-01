import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const CareerCard = ({
  salary,
  title,
  desc,
  date,
  id,
  image,
  setCareerArray,
  setCareerIdHolder,
  setCareerTitle,
  setCareerSalary,
  setCareerDate,
  setCareerDescription,
  setShowModal,
  setShowSaveBtn1,
  setShowUpdateBtn1,
  setImageHolder,
}) => {
  const role = sessionStorage.getItem("CurrentAccount")
    ? JSON.parse(sessionStorage.getItem("CurrentAccount"))
    : [{ fullname: "User", admin: false }];
  function handleDelete(id, title) {
    Swal.fire({
      title: `Are you sure you want to delete "${title}" from the careers?`,
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Wait! I've changed my mind.`,
    }).then((result) => {
      if (result.isConfirmed) {
        const career = JSON.parse(localStorage.getItem("Career1DB")).filter(
          (item) => id !== item.id
        );
        setCareerArray(career);
        localStorage.setItem("Career1DB", JSON.stringify(career));
        Swal.fire("Service has been deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Service has been saved", "", "info");
      }
    });
  }
  function handleUpdate(salary, title, desc, date, id, image) {
    setShowModal(true);
    setCareerTitle(title);
    setCareerDate(date);
    setCareerSalary(salary);
    setCareerDescription(desc);
    setCareerIdHolder(id);
    setShowSaveBtn1(false);
    setShowUpdateBtn1(true);
    setImageHolder(image);
  }
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Title>
          <h6>{desc}</h6>
        </Card.Title>
        <Card.Title className="display-6 fs-6">{salary}</Card.Title>
        <Card.Title>
          <h6>{date}</h6>
        </Card.Title>
      </Card.Body>
      <Button className="w-100 rounded-0 btnApply">Apply Now!</Button>
      {role.admin && (
        <Button
          className="w-100 rounded-0 btnUpdate"
          //variant="warning"
          onClick={() => handleUpdate(salary, title, desc, date, id, image)}
        >
          Update
        </Button>
      )}
      {role.admin && (
        <Button
          className="w-100 rounded-0"
          variant="danger"
          onClick={() => handleDelete(id, title)}
        >
          Delete
        </Button>
      )}
    </Card>
  );
};

export default CareerCard;
