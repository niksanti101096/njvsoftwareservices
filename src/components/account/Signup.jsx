import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function Signup({ showModalSignup, handleCloseSignup }) {
  const data = localStorage.getItem("AccountsDB")
    ? JSON.parse(localStorage.getItem("AccountsDB"))
    : [];
  const accountsData = useState(data);
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

  function handleSignup(e) {
    e.preventDefault();
    if (fullname !== "" && username !== "" && password !== "") {
      Swal.fire({
        icon: "success",
        title: "Account has been created",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Proceed",
        cancelButtonColor: "#75cb75"
      });
      const id = Date.now();
      const newAccount = {
        id: id,
        fullname: fullname,
        username: username,
        password: password,
        admin: true,
      };
      localStorage.setItem("AccountsDB", JSON.stringify([...data, newAccount]));
      handleCloseSignup();
      setFullname("");
      setUsername("");
      setPassword("");
    }
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
            <div className="form-group mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                value={fullname}
                onChange={handleFullname}
              />
            </div>
            <div className="form-group my-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="form-group my-3">
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
          <Button variant="secondary" onClick={handleSignup}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;
