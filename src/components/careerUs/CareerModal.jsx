import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CareerModal = ({
  showModal,
  handleClose,
  careerSalary,
  careerDate,
  careerTitle,
  careerDescription,
  careerImage,
  handleCareer1Title,
  handleCareer1Description,
  handleCareer1Salary,
  handleCareer1Date,
  handleCareer1Image,
  handleSave1,
  showSaveBtn1,
  showUpdateBtn1,
  handleUpdate1

}) => {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Career Title</label>
              <input
                type="text"
                className="form-control"
                value={careerTitle}
                onChange={handleCareer1Title}
              />
            </div>
            <div className="form-group">
              <label>Career Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={careerDescription}
                onChange={handleCareer1Description}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Salary Range</label>
              <input
                type="text"
                className="form-control"
                value={careerSalary}
                onChange={handleCareer1Salary}
              />
            </div>
            <div className="form-group">
              <label>Date Posted</label>
              <input type="date" className="form-control" value={careerDate} onChange={handleCareer1Date} />
            </div>
            <div className="form-group">
              <label>Service Image Link</label>
              <input type="file" className="form-control" defaultValue={careerImage} onChange={handleCareer1Image} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         {showSaveBtn1 && (
             <Button variant="success" onClick={handleSave1}>
             Save 
           </Button>
         )}
          {showUpdateBtn1 && (
             <Button variant="warning" onClick={handleUpdate1}>
             Update
           </Button>
         )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CareerModal;
