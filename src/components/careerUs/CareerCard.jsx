import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const CareerCard = ({props, setCareerArray}) => {
  let { imgSrc, title, desc, salary, date, id } = props.data;
  function handleDelete(id) {
    const career = JSON.parse(localStorage.getItem("Career1DB")).filter(
      (item) => id !== item.id
    );
    setCareerArray(career)
    localStorage.setItem("Career1DB", JSON.stringify(career))
  }
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgSrc} />
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
        {" "}
        Apply Now!
      </Button>
      <Button
        className="w-100 rounded-0"
        variant="danger"
        onClick={() => handleDelete(id)}
      >
        {" "}
        Delete{" "}
      </Button>
    </Card>
  );
};

export default CareerCard;
