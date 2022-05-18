import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../../App';
import Login from '../../modules/Login/Login';
import WebsocketConnection from '../../modules/websocketConnection/WebsocketConnection';
import Register from '../../modules/Register/Register';
// import S from './styledRoute';

const MyRoutes = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/websocket" element={<WebsocketConnection />} />
      <Route exact path="/home" element={<App />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </div>
);

export default MyRoutes;
