/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate =useNavigate();

  const handleUserName = (event)=>{
    setUsername(event.target.value);
  }
  const handlePassword = (event)=>{
    setPassword(event.target.value);
  }
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const data ={
        'username':username,
        'password':password
    }
    try {
        const response = await axios.post("http://localhost:9000/auth/login",data);
        setError("");
        setUsername("");
        setPassword("");

        console.log(response.data);

        sessionStorage.setItem('token',response.data.token);
        sessionStorage.setItem('username',response.data.username);
        sessionStorage.setItem('user_id',response.data.id);
        axios.defaults.headers.common['Authorization'] =`Bearer ${response.data.token}`
        navigate("/home")
    } catch (error) {
        setError("Username or password is incorrect");
    }
  }

  return (
    <>
      <Container>
          <div className="back">
              <div className="login-box shadow rounded">
            <div className="text-center mt-2 mb-4">
              <h3>User LogIn</h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="Input" label="username" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="username"
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
           

              {error && (
                <div className="text-danger">
                  <p>{error}</p>
                </div>
              )}
              <div className="d-grid mt-3">
                <Button type="submit" variant="primary">
                  LogIn
                </Button>
              </div>
            </Form>
          </div> 
          </div>
       
       
      </Container>
    </>
  );
};

export default Login;
