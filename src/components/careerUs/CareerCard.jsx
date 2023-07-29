import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const CareerCard = ({
  salary,
  title,
  desc,
  date,
  id,
  setCareerArray,
  setCareerIdHolder,
  setCareerTitle,
  setCareerSalary,
  setCareerDate,
  setCareerDescription,
  setShowModal,
  setShowSaveBtn1,
  setShowUpdateBtn1
}) => {
  function handleDelete(id) {
    const career = JSON.parse(localStorage.getItem("Career1DB")).filter(
      (item) => id !== item.id
    );
    setCareerArray(career);
    localStorage.setItem("Career1DB", JSON.stringify(career));
  }
  function handleUpdate(salary, title, desc, date, id) {
    setShowModal(true)
    setCareerTitle(title)
    setCareerDate(date)
    setCareerSalary(salary)
    setCareerDescription(desc)
    setCareerIdHolder(id)
    setShowSaveBtn1(false)
    setShowUpdateBtn1(true)
  }
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" />
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
      <Button className="w-100 rounded-0" variant="success">
        Apply Now!
      </Button>
      <Button
        className="w-100 rounded-0"
        variant="warning"
        onClick={() => handleUpdate(salary, title, desc, date, id)}
      >
        Update
      </Button>
      <Button
        className="w-100 rounded-0"
        variant="danger"
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default CareerCard;
