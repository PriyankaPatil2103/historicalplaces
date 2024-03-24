import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form} from "react-bootstrap";
import "../ProfileTabs/Issue.css";
function Issue() {
    const [UserIssues,setIssues]=useState("")
    const [Description,setDescription]=useState("");
    const [AdminRemark,setAdminRemark]=useState("");

    const addIssue=()=>{
        const issue={
            Issue:UserIssues,
            Description:Description,
            AdminRemark:AdminRemark
        };
    axios.post("http://localhost:5000/api/addissue",issue)
    .then((result) => {
        console.log("DATA",result.data);
        alert("Issues Added");
    }).catch((err) => {
        console.log(err)
    });
}

  return (
    <div>
         <Container className='container'>
        <Form>
                <Form.Group className="form-group">
                  <Form.Label className='form-label'>Issues:</Form.Label>
                  <Form.Control type="text"
                  onChange={(e)=>setIssues(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={(e)=>setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Admin Remark:</Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="Remark"
                    onChange={(e)=>setAdminRemark(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button onClick={()=>addIssue()}>Add Issues</Button>
                </Form.Group>
              </Form>
        </Container>

    </div>
  )
}

export default Issue