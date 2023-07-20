import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CSS/loginform.css';

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
    <div className="containers">
      <h1>Register</h1>
      <form className="login-form">
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br></br>

          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />{' '}
          <br></br>
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleRegister}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f fa-lg"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google fa-lg"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter fa-lg"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github fa-lg"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
