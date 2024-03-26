import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function BookingDetails() {
    const {BookingId}=useParams();
    const [bookingData,setbookingData]=useState({});

    useEffect(() => {
        const bookdata = {
          BookingId: BookingId,
        };
        axios
          .post("http://localhost:5000/api/getbookingbyid", bookdata)
          .then((result) => {
            setbookingData(result.data);
            console.log("DATA", result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, {});
     const updateBookingStatus=()=>{
      const booked={
        bid:BookingId,
        Status:'Cancel'
      }
      axios.post("http://localhost:5000/api/updatebookingstatus",booked)
      .then((result) => {
        console.log("Data",result);
        window.location.reload(false)
      }).catch((err) => {
        
      });
     }
  return (
    <div>
      Booking Details
      {/* <h3>{BookingId}</h3> */}
      <Container className="container">
        <Row>
          <Col lg={6} sm={12} md={6} className="user-details">
            <h3>User Details</h3>
            <h4>UserName: {bookingData?.UserId?.UserFullName}</h4>
            <h4>UserEmailId: {bookingData?.UserId?.UserEmailId}</h4>
            <h4>User MobileNo: {bookingData?.UserId?.UserMobileNumber}</h4>
          </Col>
        </Row>
        
          <Button onClick={()=>updateBookingStatus}>Cancel</Button>
       
     </Container>
    </div>
  )
}

export default BookingDetails