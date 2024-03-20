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
    <div className='form-container'>
      <Container className='form-body'>
                 <Form>
                    <h3>Registration Form</h3>
                    <Form.Group>
                        <Form.Label form-label>User FullName</Form.Label>
                        <Form.Control type='text' placeholder='Enter Your FullName'
                        onChange={(e)=>setUserfullname(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>UserMobileNo</Form.Label>
                        <Form.Control type='number' placeholder='Enter Your MobileNo'
                        onChange={(e)=>setUsermobileno(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>UserEmailId</Form.Label>
                        <Form.Control type='email' placeholder='Enter Your EmailId'
                        onChange={(e)=>setEmailid(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>User Address</Form.Label>
                        <Form.Control type='text' placeholder='Enter Your Address'
                        onChange={(e)=>setUseraddress}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>User Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Your Password'
                        onChange={(e)=>setUserpassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button onClick={()=>addUser()}>Register</Button>
                    </Form.Group>
                    <Form.Group>
                        <span onClick={()=>navi("/login")}>Already have an account</span>
                    </Form.Group>
                 </Form>
        </Container>
    </div>
  )
}

export default Registration