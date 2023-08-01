import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ServicesModal({
  showModal,
  handleClose,
  inputAddServiceTitle,
  handleSave,
  servicesTitle,
  servicesDescription,
  servicesImage,
  handleServiceTitle,
  handleServiceDescription,
  handleServiceImage,
  showSaveBtn,
  showUpdateBtn,
  handleUpdate
}) {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className=" text-light">Add Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group mb-4">
              <label className=" text-light">Service Title</label>
              <input
                type="text"
                className="form-control"
                ref={inputAddServiceTitle}
                value={servicesTitle}
                onChange={handleServiceTitle}
              />
            </div>
            <div className="form-group my-4">
              <label className=" text-light">Service Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={servicesDescription}
                onChange={handleServiceDescription}
              ></textarea>
            </div>
            <div className="form-group my-4">
              <label className=" text-light">Service Image Link</label>
              <input
                type="file"
                className="form-control"
                defaultValue={servicesImage}
                onChange={handleServiceImage}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {showSaveBtn && (
            <Button variant="success" onClick={handleSave}>
              Save Service
            </Button>
          )}
          {showUpdateBtn && (
            <Button variant="warning" onClick={handleUpdate}>
              Update Service
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ServicesModal;
