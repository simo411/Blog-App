// Profile.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="profile-header">
        <h2>Profile</h2>
        <div className="user-icon-container">
          <FaUser className="user-icon" />
        </div>
      </div>
      <div className="profile-details">
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.m_id}</p>
      </div>
    </div>
  );
};

export default Profile;
