import React from 'react'
import '../AllCss/About.css';
import { Container } from 'react-bootstrap';
import { FaMobileAlt } from "react-icons/fa";

function About() {
  return (
    <div className='page'>
      {/* <FaMobileAlt
      align-item={"center"} 
      size={28}
      style={{ paddingRight: 5 }}
    /> */}
      <Container className='about-container'>
      <h1 className='about-heading"'>About us</h1>
      <h2 className='about-subheading'>Welcome to Tourisom Management System..!</h2>
      <h5 className='about-description'>Since then, our courteous and committed team members have always ensured a pleasant and enjoyable tour for the clients. This arduous effort has enabled Shreya Tour & Travels to be recognized as a dependable Travel Solutions provider with three offices Delhi. We have got packages to suit the discerning traveler's budget and savor. Book your dream vacation online. Supported quality and proposals of our travel consultants, 
        we have a tendency to welcome you to decide on from holidays packages and customize them according to your plan.</h5>
        </Container>
      </div>
  )
}

export default About