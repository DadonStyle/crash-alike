import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ThreeDotLoaderMoving from '../../components/ThreeDotsLoader/ThreeDotsLoader';

const WebsocketConnection = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector((state) => state.connection.jwtToken);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const socket = new WebSocket(
      `ws://147.182.239.36:8080/bomb?token=${token}` // token is currently not working ! understand how to use the useSelector
    );
    console.log('trying');
    socket.onopen = (msg) => {
      console.log('onopen', msg);
      setIsOpen(true);
      console.log('open');
    };
    socket.onerror = (error) => {
      console.log('onerror', error);
      setIsOpen(true);
      console.log(error);
    };

    socket.onmessage = (msg) => {
      console.log('onmessage', msg);
      const data = JSON.parse(msg.data);
      try {
        console.log(data);
      } catch (err) {
        // whatever you wish to do with the err
        console.log(err);
      }
      return () => socket.close();
    };
  }, []);

  if (!isOpen) {
    return <ThreeDotLoaderMoving />;
  }

  return <div>WebsocketConnection</div>;
};

export default WebsocketConnection;
