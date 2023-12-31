import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Productlist from './components/Productlist';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Register from './components/Register';
import Unauthorized from './components/Unauthorized';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/loginform';
import CheckoutForm from './components/CheckoutForm';
import { UserProvider } from './components/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      {' '}
      {/* Wrap the entire structure with UserProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Productlist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkoutform" element={<CheckoutForm />} />
          {/* <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
