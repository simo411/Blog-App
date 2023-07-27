import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, username, email, password };

    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
    .then((response) => response.json())
    .then((data) => {
      // Redirect to a different page after successful registration 
      history.push('/login');
    })
    .catch((error) => {
      console.error('Error registering user:', error);
    });
  }

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
