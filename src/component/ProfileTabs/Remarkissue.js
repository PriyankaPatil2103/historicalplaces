import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import '../ProfileTabs/Rissue.css';
function Remarkissue() {
    const [issueData,setissueData]=useState([]);
    let i=1;

    useEffect(()=>{
    axios.get("http://localhost:5000/api/getallissue")
    .then((result) => {
        console.log("DATA",result.data)
        setissueData(result.data);
    }).catch((err) => {
        console.log(err)
    });
});
  return (
    <div className='container1 '>
          <Container className='container-1'>
            <Row>
                <Col sm={12} md={6} lg={3}>
                    <Table striped border hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Issue</th>
                                <th>Description</th>
                                <th>Admin Remark</th>
                                <th>Posting Date</th>
                            </tr>
                        </thead>
                        {issueData.map((issue)=>{
                            return(
                                <tbody>
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{issue.Issue}</td>
                                        <td>{issue.Description}</td>
                                        <td>{issue.AdminRemark}</td>
                                        <td>{issue.PostingDate}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </Table>
                </Col>
            </Row>
          </Container>
    </div>
  )
}

export default Remarkissue