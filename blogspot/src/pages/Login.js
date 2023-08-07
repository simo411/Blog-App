import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login successful") {
          const user = { m_id: data.user.m_id, name: data.user.name, username: data.user.username, email: data.user.email, avatar: data.user.avatar };
          const token = 'token';
          localStorage.setItem('authToken', token); // Stored the token in local storage
          setUser(user); // Updated the user context with the logged-in user object
          history.push('/home');
        } else {
          setShowAlert(true);
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        // Handling error state
      });
  };




  return (
    <div className="login">
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>username:</label>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {showAlert && <p className="red-alert"> *Invalid username or password. Please try again. </p>}
        <Link to="/register">New here?</Link>
      </div>
    </div>
  );
};

export default Login;