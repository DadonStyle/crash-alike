import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import io from 'socket.io-client';
import S from './stylingApp';

// const clinet = new W3CWebSocket('ws://147.182.239.36:8080/bomb');

const App = () => {
  const token = useSelector((state) => state.connection.jwtToken);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const socket = new WebSocket(
      `ws://147.182.239.36:8080/bomb?token=${token}` // token is currently not working ! understand how to use the useSelector
    );
    console.log('trying');
    socket.onopen = () => {
      console.log('open');
    };
    socket.onerror = (error) => {
      console.log(error);
    };

    socket.onmessage = function (msg) {
      const data = JSON.parse(msg.data);
      try {
        console.log(data);
      } catch (err) {
        // whatever you wish to do with the err
        console.log(err);
      }
      return () => socket.close();
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
};

export default App;
