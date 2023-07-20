// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './loginform.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = () => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Find the user object with the matching username and password
//     const user = storedUsers.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       // Set the login status to 'true' in localStorage
//       localStorage.setItem('isLoggedIn', 'true');
//       navigate('/home');
//     } else {
//       navigate('/Unauthorized');
//     }
//   };

//   const handleLogout = () => {
//     // Clear the login status from localStorage
//     localStorage.removeItem('isLoggedIn');
//     // Perform any additional logout logic if needed
//     // Redirect the user to the login page or any other appropriate page
//     navigate('/Unauthorized');
//   };

//   return (
//     <div className="cover">
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={handleUsernameChange}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/loginform.css';

import 'bootstrap/dist/css/bootstrap.min.css';

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
      navigate('/Unauthorized');
    }
  };

  const handleLogout = () => {
    // Clear the login status from localStorage
    localStorage.removeItem('isLoggedIn');
    // Perform any additional logout logic if needed
    // Redirect the user to the login page or any other appropriate page
    navigate('/Unauthorized');
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

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label" htmlFor="form2Example31">
                Remember me
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
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
