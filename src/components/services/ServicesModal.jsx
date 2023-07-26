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
          <Modal.Title>Add Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Service Title</label>
              <input
                type="text"
                className="form-control"
                ref={inputAddServiceTitle}
                value={servicesTitle}
                onChange={handleServiceTitle}
              />
            </div>
            <div className="form-group">
              <label>Service Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={servicesDescription}
                onChange={handleServiceDescription}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Service Image Link</label><br />
              {/* <input
                type="text"
                className="form-control"
                value={servicesImage}
                onChange={handleServiceImage}
              /> */}
              <input type="file" name="" id="" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {showSaveBtn && (
            <Button variant="primary" onClick={handleSave}>
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
