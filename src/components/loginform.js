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
      // Redirect the user to the Home page if the login is successful
      navigate('/home');
    } else {
      // Redirect the user to an unauthorized page if the login fails
      navigate('/unauthorized');
    }
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
    </div>
  );
};

export default LoginForm;
