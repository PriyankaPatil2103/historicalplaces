import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reduxwork/UserSlice";
import "../AllCss/Login.css";

function Login() {
  const dispatcher = useDispatch();
  const [UserEmailId, setEmailid] = useState("");
  const [UserPassword, setUserpassword] = useState("");
  const navi = useNavigate();

  const addlogin = () => {
    const logindata = {
      UserEmailId: UserEmailId,
      UserPassword: UserPassword,
    };

    axios
      .post("http://localhost:5000/api/dologin", logindata)
      .then((result) => {
        console.log("DATA", result.data);
        if (result.data.success) {
          dispatcher(login(result.data.Data));
          navi("/");
        } else {
          alert("Login Fail");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container fluid className="main-log-container">
        <div className="log-form-container">
          <Form>
            <Form.Group>
              <Form.Label>User EmailId</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your EmailId"
                onChange={(e) => setEmailid(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>User Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setUserpassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button onClick={() => addlogin()}>Login</Button>

            <Form.Group>
              <span onClick={() => navi("/registration")}>
                Don't have an account? Register here.
              </span>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
