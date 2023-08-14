// Profile.js
import React, { useContext , useEffect, useState} from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaUser } from 'react-icons/fa';
import Modal from '../Components/Modal';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(user.avatar);

  useEffect(() => {
    setAvatar(user.avatar);
  }, [user]);

  return (
    <div className="profile">
      <div className="profile-header">
        <h2>Profile</h2>
        <div className="user-icon-container">
        {avatar !== null ? (
            <img src={process.env.PUBLIC_URL +`/images/${avatar}-user.jpg`} alt="Avatar" className="avatar-icon" />
          ) : (
            <FaUser className="user-icon" />
          )}
        </div>
      </div>
      <div className="profile-details">
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.m_id}</p>
        <Modal userId = {user.m_id} />
      </div>
    </div>
  );
};

export default Profile;
