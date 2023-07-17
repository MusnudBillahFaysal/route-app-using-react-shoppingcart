import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginform';
import Home from './components/Home';
import Productlist from './components/Productlist';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Register from './components/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Productlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
