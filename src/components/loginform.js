import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/loginform.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUserContext } from './UserContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { state, dispatch } = useUserContext();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const storedUsers = state.users || [];

    const user = storedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Dispatch the LOGIN action to update the isLoggedIn status
      dispatch({ type: 'LOGIN', payload: true });

      navigate('/home');
    } else {
      navigate('/Unauthorized');
    }
  };

  const handleLogout = () => {
    // Dispatch the action to handle logout
    dispatch({ type: 'LOGOUT' });
    // navigate('/loginform');
  };

  return (
    <div className="containers">
      <br></br>
      <h1>LoginForm</h1>
      <br></br>
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
          onClick={handleLogin}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="/register">Register</a>
          </p>
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

export default LoginForm;
