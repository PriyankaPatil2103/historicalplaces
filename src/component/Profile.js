import axios from "axios";
import React from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import '../AllCss/Profile.css';
import Issue from "./ProfileTabs/Issue";
import Remarkissue from "./ProfileTabs/Remarkissue";
import MyProfile from './ProfileTabs/MyProfile';
import Changepassword from "./ProfileTabs/Changepassword";
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
          <Tab className="react-bootstrap__TabContent" eventKey="Profile" title="Profile">
          <MyProfile/>
          </Tab>
          <Tab className="react-bootstrap__TabContent" eventKey="Changepassword" title="Changepassword">
            <Changepassword/>
          </Tab>
          <Tab className="react-bootstrap__TabContent" eventKey="Issue" title="Issue">
            <Issue/>
          </Tab>
          <Tab eventKey="Remarkissue" title="Remarkissue">
            <Remarkissue/>
          </Tab>
        </Tabs>
      </Row>
    </div>
  );
}

export default Profile;
