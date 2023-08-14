import React, { useState, useContext } from "react";
import './modal.css';
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";

const Modal = ({ userId }) => {
    const [modal, setModal] = useState(false);
    const { user } = useContext(AuthContext);
    const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const handleAvatarClick = (avatarNumber) => {
        axios.post(`http://localhost:8000/update-avatar/${userId}`, { avatarNumber })
            .then(response => {
                console.log(response.data.message);
                setSelectedAvatar(avatarNumber);
                toggleModal(); // Close the modal after selecting an avatar
            })
            .catch(error => {
                console.error(error);
            });
    };
    console.log(selectedAvatar)

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Change Avatar
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Choose Your Avatar</h2>
                        <p>
                            <div className="avatar">
                                <img src={process.env.PUBLIC_URL +"/images/1-user.jpg"} alt="Female User" className="avatar-img" onClick={() => handleAvatarClick(1)} />
                                <img src={process.env.PUBLIC_URL +"/images/2-user.jpg"} alt="Male User" className="avatar-img" onClick={() => handleAvatarClick(2)} />
                                <img src={process.env.PUBLIC_URL +"/images/3-user.jpg"} alt="Boy User" className="avatar-img" onClick={() => handleAvatarClick(3)} />
                                <img src={process.env.PUBLIC_URL +"/images/4-user.jpg"} alt="Female with Glasses User" className="avatar-img" onClick={() => handleAvatarClick(4)} />
                                <img src={process.env.PUBLIC_URL +"/images/5-user.jpg"} alt="Female Profile User" className="avatar-img" onClick={() => handleAvatarClick(5)} />
                            </div>
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
export default Modal;