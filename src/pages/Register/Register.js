import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [registerEnabled, setRegisterEnabled] = useState(false);

  const handleUserName = (event) => {
    setUsername(event.target.value);
    if (username.length < 6) {
      setRegisterEnabled(false);
    } else {
      setRegisterEnabled(true);
    }
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if ((email !== "") & regex.test(email)) {
      setRegisterEnabled(true);
    } else {
      setRegisterEnabled(false);
    }
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (password.length < 6) {
      setRegisterEnabled(false);
    } else {
      setRegisterEnabled(true);
    }
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
      email: email,
    }
    try {
        const respose =await axios.post("http://localhost:9000/auth/register",data);
        console.log(respose)
        navigate("/login")
        setError("");
       } catch (error) {
         setError(error.response.data.message);
       }
  };

  return (
    <>
      <Container>
        <Row>
          <div className="login-box shadow rounded">
            <div className="text-center mt-2">
              <h1>Register</h1>
            </div>
            <Form onSubmit={handleRegister}>
              <FloatingLabel controlId="Input" label="email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleEmail}
                  value={email}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="Username"
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Username"
                  onChange={handleUserName}
                  value={username}
                />
              </FloatingLabel>
              <FloatingLabel controlId="Password" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
                  value={password}
                />
              </FloatingLabel>
              { error &&
         <div className="text-danger mb-3">
            {error}
          </div>
      }
              <div className="mt-3">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={!registerEnabled}
                >
                  Register
                </Button>
              </div>
            </Form>
            <Link to={"../login"} className="link">
              Already an User
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Register;
