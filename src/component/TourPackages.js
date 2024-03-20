import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Tourpackage.css';
function TourPackages() {
  const [packageData, setpackageData] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallpackage")
      .then((result) => {
        console.log("DATA", result.data);
        setpackageData(result.data);
      })
      .catch((err) => {});
  });
  return (
    <div>
      <Container>
        <Row>
          {packageData.map((pkg) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card >
                  <Card.Img className="image"
                    src={`http://localhost:5000${pkg.PackageImage}`}
                  ></Card.Img>
                  <Card.Title>{pkg.PackageName}</Card.Title>
                  <Card.Text>{pkg.PackageType}</Card.Text>
                  <Card.Text>{pkg.PackageLocation}</Card.Text>
                  <Card.Text>{pkg.PackageFeatures}</Card.Text>
                  <Card.Footer>
                    <Button variant="primary" onClick={() => navi(`/PackageDetails/${pkg._id}`)}>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default TourPackages;
