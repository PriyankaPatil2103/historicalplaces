import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PackageDetails() {
  const { PkgId } = useParams();
  const [Showmodel, setShowmodel] = useState(false);
  const [packageData, setpackageData] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [ToDate, setTodate] = useState("");
  const [FromDate, setFromdate] = useState("");
  const [Comment, setComment] = useState("");
  const { UserData } = useSelector((state) => state);
  let i=1;
  function onShow() {
    setIsShow(true);
  }
  function onHide() {
    setIsShow(false);
  }

  useEffect(() => {
    const orData = {
      PkgId: PkgId,
    };
    axios
      .post("http://localhost:5000/api/getpackagebyid", orData)
      .then((result) => {
        setpackageData(result.data);
        console.log("DATA", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});

  const addBooking = () => {
    const bookingdata = {
      PackageId: PkgId,
      UserId: UserData._id,
      ToDate: ToDate,
      FromDate: FromDate,
      Comment: Comment,
    };
    axios
      .post("http://localhost:5000/api/addbooking", bookingdata)
      .then((result) => {
        console.log("DATA", result.data);
        alert("Package Booked Successfully");
        setShowmodel(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to book package. Please try again.");
      });
  };
  return (
    <div className="page1">
      PackageDetails
      {/* <h3>{PkgId}</h3> */}
      <Container fluid className="package-container">
        <div className="package-container2">
          <Row>
            <Col>
              <img
                className="custom-image"
                style={{ width: "500px", height: "300px" }}
                src={`http://localhost:5000${packageData.PackageImage}`}
              ></img>
            </Col>
            <Col>
              <h4 className="package-name">{packageData?.PackageName}</h4>
              <h6>#PKG{i++}</h6>
              <Col className="package-type">
                <h5>Package Type:{packageData?.PackageType}</h5>
                <h5>Package Location:{packageData?.PackageLocation}</h5>
                <h5>Package Features:{packageData?.PackageFeatures}</h5>
                <h5>Package Details:{packageData?.PackageDetails}</h5>
              </Col>
            </Col>
          </Row>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              style={{ height: "50px", width: "150px" }}
              onClick={() => setShowmodel(true)}
            >
              Book Package
            </Button>
          </div>
        </div>
      </Container>
      <Modal show={Showmodel} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>SignIn With Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setFromdate(e.target.value)}
          ></Form.Control>
          <Form.Label>To</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setTodate(e.target.value)}
          ></Form.Control>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="textarea"
            onChange={(e) => setComment(e.target.value)}
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button onClick={addBooking}>Submit</Button>
          <Button onClick={() => setShowmodel(false)}>closeButton</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PackageDetails;
