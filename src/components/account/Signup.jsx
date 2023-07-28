import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Signup({ showModalSignup, handleCloseSignup }) {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFullname(e) {
    setFullname(e.target.value);
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <Modal
        show={showModalSignup}
        onHide={handleCloseSignup}
        backdrop={"static"}
      >
        <Modal.Header closeButton>
          <Modal.Title>Account Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                value={fullname}
                onChange={handleFullname}
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={handlePassword}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;
