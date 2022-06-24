import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import ThreeDotLoaderMoving from '../../components/ThreeDotsLoader/ThreeDotsLoader';
import connectionSelector from '../../redux/selectors/connectionSelector';
import S from './styledRooms';

const Rooms = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const clientObj = useSelector(connectionSelector.clientObj);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const socket = new WebSocket(
      `ws://147.182.239.36:8080/bomb?token=${clientObj.ClientToken}` // token is currently not working ! understand how to use the useSelector
    );
    // console.log('trying');
    socket.onopen = (msg) => {
      console.log('onopen', msg);
      setIsOpen(true);
    };
    socket.onerror = (error) => {
      console.log('onerror', error);
      setIsOpen(false);
    };

    socket.onmessage = (msg) => {
      // console.log('onmessage', msg);
      const data = JSON.parse(msg.data);
      try {
        console.log(data);
      } catch (err) {
        // whatever you wish to do with the err
        console.log(err);
      }
      return () => socket.close();
    };
  }, [clientObj]);

  if (!isOpen) {
    return <ThreeDotLoaderMoving />;
  }

  return (
    <S.Wrappper>
      <Card roundPrice="30$" numOfPlayers="4" />
      <Card roundPrice="30$" numOfPlayers="2" />
      <Card roundPrice="30$" numOfPlayers="7" />
    </S.Wrappper>
  );
};

export default Rooms;
