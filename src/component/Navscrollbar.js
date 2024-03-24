import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as RLink } from "react-router-dom";

function Navscrollbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navbar-scroll" style={{position:"fixed"}}>
        <Container>
          <Navbar.Brand>HISTORICAL PLACES</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-nav-bar"></Navbar.Toggle>
          <Navbar.Collapse id="responsice-nav-bar">
            <Nav className="me-auto overflow-auto" style={{ maxHeight: '200px' }}>
              <Nav.Link>
                <RLink to="/">Home</RLink>
              </Nav.Link>
              <Nav.Link>
                <Link to="about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="tourpackages">TourPackages</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="privacypolicy">PrivacyPolicy</Link>
              </Nav.Link>
              <Nav.Link>
                <RLink to="/termstouse">TermsToUse</RLink>
              </Nav.Link>
              <Nav.Link>
                <RLink to="/contact">Contact</RLink>
              </Nav.Link>
              <Nav.Link>
                <RLink to="/enquiry">Enquiry</RLink>
              </Nav.Link>
              <Nav.Link>
                <RLink to="/login">Login</RLink>
              </Nav.Link>
              <Nav.Link>
                <RLink to="/profile">Profile</RLink>
              </Nav.Link>
              <Nav.Link>
                <RLink to="/mybooking">MyBooking</RLink>
              </Nav.Link>
              <Nav.Link>
                <RLink to="/bookingdetails">BookingDetails</RLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navscrollbar;
