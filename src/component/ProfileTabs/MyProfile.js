import React from 'react';
import { useSelector } from 'react-redux';
import "../ProfileTabs/Myprofile.css";
import { Button } from 'react-bootstrap';
function MyProfile() {
    const { UserData } = useSelector((state) => state);

    return (
        <div className='profile-container'>
            <h1 className='profile-heading'>User Profile</h1>
            <div className="user-details">
                <h3 className='detail-heading'>User Details</h3>
                <div className='detail-item'>
                <span className="detail-label">Username:</span>
                <span className="detail-value">{UserData.UserFullName}</span>

                </div>
                <div className='detail-item'>
                <span className="detail-label">Email:</span>
                <span className="detail-value">{UserData.UserEmailId}</span>
                </div>
                <div className='detail-item'>
                <span className="detail-label">Mobile No:</span>
                <span className="detail-value">{UserData.UserMobileNumber}</span>
                </div>
                <div className='detail-item'>
                    <Button>Logout</Button>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
