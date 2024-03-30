import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";

function Changepassword() {
  // const { userid } = useParams();
  const [Password, setPassword] = useState("");
  const [MobileNo, setMobileNo] = useState("");

  const updateUserPassword = () => {
    const userData = {
      // Uid: userid,
      newMobileNo: MobileNo,
      newPassword: Password,
    };
    console.log(userData)
    axios
      .post("http://localhost:5000/api/updatepassword", userData)
      .then((result) => {
        console.log("DATA", result);
        alert("Password Updated.!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>User Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter new mobile number"
                onChange={(e) => setMobileNo(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>User New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button onClick={() => updateUserPassword()}>Update</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Changepassword;
