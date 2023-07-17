import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic, such as creating a new user and storing their credentials

    // For example, you can store the username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Optionally, you can redirect the user to the login page after successful registration
    // Replace '/login' with the actual login page route in your application
    // history.push('/login');
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
