import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { Link } from 'react-router-dom';
import S from './stylingApp';

const clinet = new W3CWebSocket('ws://147.182.239.36:8080/bomb');

function App() {
  useEffect(() => {
    clinet.opopen = () => {
      console.log('web connected');
    };
  });

  return (
    <div>
      <S.Title>AAA</S.Title>
      <Link to="/login">login</Link> |
      <Link to="/websocket">WebsocketConnection</Link>
      <Link to="/register">register</Link>
    </div>
  );
}

export default App;
