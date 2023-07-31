import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
      alert("hoy");
      if (accountsData.length > 0) {
        accountsData.map((item) => {
          if (item.username === username) {
            alert("Username already in use!");
          } else {
            const newAccount = {
              fullname: fullname,
              username: username,
              password: password,
              admin: true,
            };
            localStorage.setItem(
              "AccountsDB",
              JSON.stringify([...data, newAccount])
            );
            handleCloseSignup();
          }
          return null;
        });
      } else {
        const newAccount = {
          fullname: fullname,
          username: username,
          password: password,
          admin: true,
        };
        localStorage.setItem(
          "AccountsDB",
          JSON.stringify([...data, newAccount])
        );
        handleCloseSignup();
      }
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
          <Button variant="secondary" onClick={handleSignup}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;
