import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <div>
        <Navbar className='navbar' collapseOnSelect variant='dark' bg='dark' expand='lg'>
            <Container>
                <Navbar.Brand>HISTORICAL PLACES</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-nav-bar'></Navbar.Toggle>
                <Navbar.Collapse id='responsive-nav-bar'>
                <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/tourpackages">Tour Packages</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </Nav.Link>
             <Nav.Link>
                <Link to="/termstouse">Terms To Use</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/bookingdetails">BookingDetails</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/booking">Booking</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact Us</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/enquiry">Enquiry</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Login">Login</Link>
              </Nav.Link>
            </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default MyNavbar