import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Create a new user object with the provided username and password
    const newUser = { username, password };

    // Add the new user to the existing users array
    const updatedUsers = [...existingUsers, newUser];

    // Store the updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    navigate('/');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="cover">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/">Go to Login</Link>
      </p>
    </div>
  );
};

export default Register;
