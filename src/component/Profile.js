import axios from "axios";
import React from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import '../AllCss/Profile.css';
import Issue from "./ProfileTabs/Issue";
import Remarkissue from "./ProfileTabs/Remarkissue";

function Profile() {
  axios.post();
  return (
    <div className="page1">
      <Row>
        <Tabs className="react-bootstrap__Tabs "
          fill
          variant="tabs"
          defaultActiveKey="MyProfile"
          style={{ marginTop: "20px" }}
        >
          <Tab className="react-bootstrap__TabContent" eventKey="MyProfile" title="MyProfile">
            The my profile component
          </Tab>
          <Tab className="react-bootstrap__TabContent" eventKey="changepassword" title="Changepassword">
            the content of changepassword component
          </Tab>
          <Tab className="react-bootstrap__TabContent" eventKey="Issue" title="Issue">
            <Issue/>
          </Tab>
          <Tab eventKey="Remarkissue" title="Issue">
            <Remarkissue/>
          </Tab>
        </Tabs>
      </Row>
    </div>
  );
}

export default Profile;
