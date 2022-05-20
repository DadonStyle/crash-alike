import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../../modules/Login/Login';
import Register from '../../modules/Register/Register';
import Header from '../../modules/Header/Header';
import Rooms from '../../modules/Rooms/Rooms';

const MyRoutes = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/rooms" element={<Rooms />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </Router>
);

export default MyRoutes;
