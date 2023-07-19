import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginform.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user object with the matching username and password
    const user = storedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Set the login status to 'true' in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    } else {
      navigate('/register');
    }
  };

  const handleLogout = () => {
    // Clear the login status from localStorage
    localStorage.removeItem('isLoggedIn');
    // Perform any additional logout logic if needed
    // Redirect the user to the login page or any other appropriate page
    navigate('/loginform');
  };

  return (
    <div className="cover">
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
      <h1>If not account</h1>
      <button onClick={handleLogout}>Register</button>
    </div>
  );
};

export default LoginForm;
