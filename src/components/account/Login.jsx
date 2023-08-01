import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function Login({ showModalLogin, handleCloseLogin }) {
  const data = localStorage.getItem("AccountsDB")
    ? JSON.parse(localStorage.getItem("AccountsDB"))
    : [];
  const [accountsData, setAccountsData] = useState(data);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    accountsData.forEach((data) => {
      console.log(data.username);
      console.log(username);
      if (data.username === username && data.password === password) {
        sessionStorage.clear("CurrentAccount");
        sessionStorage.setItem("CurrentAccount", JSON.stringify(data));
        handleCloseLogin();
        Swal.fire({
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid username or password",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  return (
    <>
      <Modal
        show={showModalLogin}
        onHide={handleCloseLogin}
        backdrop={"static"}
      >
        <Modal.Header closeButton>
          <Modal.Title>Account Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group mb-3">
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
          <Button variant="secondary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
