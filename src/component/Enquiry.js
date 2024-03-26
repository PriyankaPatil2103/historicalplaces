import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../AllCss/Enquiry.css';
import enq from '../images/enq.png';
import axios from 'axios';
function Enquiry() {
  const [FullName,setFullname]=useState("");
  const [EmailId,setEmailid]=useState("");
  const [MobileNo,setMobileno]=useState("");
  const [Subject,setSubject]=useState("");
  const [Description,setDesecription]=useState("");

  const addenquiry=()=>{
    const enquiry={
      FullName:FullName,
      EmailId:EmailId,
      MobileNo:MobileNo,
      Subject:Subject,
      Description:Description

    }
    axios.post("http://localhost:5000/api/addenquiry",enquiry)
    .then((result) => {
      console.log("DATA",result.data)
      alert("Enquiry Successfully submited")
      window.location.reload(false);

    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className='div'>
      <Container>
        <Row>
        <Col>
        <h1 className='h1'>Enquiry Form</h1>
          <Form>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your name'
            onChange={(e)=>setFullname(e.target.value)}></Form.Control>
            <Form.Label>EmailId</Form.Label>
            <Form.Control type='email' placeholder='Enter your emailId'
            onChange={(e)=>setEmailid(e.target.value)}></Form.Control>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type='number' placeholder='Enter your mobile number'
            onChange={(e)=>setMobileno(e.target.value)}></Form.Control>
            <Form.Label>Subject</Form.Label>
            <Form.Control type='text'
            onChange={(e)=>setSubject(e.target.value)} ></Form.Control>
            <Form.Label>Description</Form.Label>
            <Form.Control type='textarea'
            onChange={(e)=>setDesecription(e.target.value)}></Form.Control>
            <Button onClick={()=>addenquiry()}>Submit</Button>
          </Form>

        </Col>
        <Col>
               <img className="img" style={{width:"600px", height:"400px"}}src={enq}></img>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Enquiry