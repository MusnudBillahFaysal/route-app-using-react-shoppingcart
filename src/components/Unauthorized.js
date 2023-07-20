import React from 'react';

import { Link } from 'react-router-dom';
const Unauthorized = () => {
  return (
    <div className="containers">
      <h1>Unauthorized</h1>
      <p>You are not authorized to access this page.</p>
      <p>
        Already have an account? <Link to="/register">Go to Register</Link>
      </p>
    </div>
  );
};

export default Unauthorized;
