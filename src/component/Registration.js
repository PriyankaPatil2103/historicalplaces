import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { register } from '../reduxwork/UserSlice';
import { useNavigate } from 'react-router-dom';
import '../AllCss/Registration.css';

function Registration() {
   
    const [UserFullName,setUserfullname]=useState("");
    const [UserMobileNo,setUsermobileno]=useState("");
    const [UserEmailId,setEmailid]=useState("");
    const [UserAddress,setUseraddress]=useState("");
    const [UserPassword,setUserpassword]=useState("");
    const dispathcer=useDispatch();
    const navi=useNavigate();

    const addUser=()=>{
        const user={
        UserFullName:UserFullName,
        UserMobileNo:UserMobileNo,
        UserEmailId:UserEmailId,
        UserAddress:UserAddress,
        UserPassword:UserPassword,
        };
        axios
        .post("http://localhost:5000/api/adduser",user)
        .then((result) => {
            console.log("DATA",result.data);
            alert("Registration Success");
            dispathcer(register(result.data));
        }).catch((err) => {
            console.log(err);
        });
    };
  return (
    <div className='registration-container'>
      <Container  className=' registration-container bg-img'>
                 <Container className='log-container'>
                 <Form className='container'>
                    <h3>Registration Form</h3>
                    <Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label form-label>User FullName</Form.Label>
                        <Form.Control className='form-control' type='text' placeholder='Enter Your FullName'
                        onChange={(e)=>setUserfullname(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridMobileno">
                        <Form.Label>UserMobileNo</Form.Label>
                        <Form.Control type='number' placeholder='Enter Your MobileNo'
                        onChange={(e)=>setUsermobileno(e.target.value)}></Form.Control>
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>UserEmailId</Form.Label>
                        <Form.Control type='email' placeholder='Enter Your EmailId'
                        onChange={(e)=>setEmailid(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>User Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Your Password'
                        onChange={(e)=>setUserpassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>User Address</Form.Label>
                        <Form.Control type='text' placeholder='Enter Your Address'
                        onChange={(e)=>setUseraddress}></Form.Control>
                    </Form.Group>
                    </Row>
                    <Form.Group className='mb-3'>
                        <Button className='btn' onClick={()=>addUser()}>Register</Button>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <span className='registration-container span' onClick={()=>navi("/login")}>Already have an account</span>
                    </Form.Group>
                 </Form>
                 </Container>
        </Container>
    </div>
  )
}

export default Registration