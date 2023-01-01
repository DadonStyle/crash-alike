import React from 'react';
import { useSelector } from 'react-redux';
// import Card from '../../components/Card/Card';
import ThreeDotLoaderMoving from '../../components/ThreeDotsLoader/ThreeDotsLoader';
import useWebSocket from '../../hooks/useWebSocket';
import connectionSelector from '../../redux/selectors/connectionSelector';
import WaitingRoom from './WaitingRoom/WaitingRoom';
import S from './styled';

const Rooms = () => {
  useWebSocket();
  const socket = useSelector(connectionSelector.socket);

  if (!socket) {
    return <S.Wrappper><ThreeDotLoaderMoving /></S.Wrappper>;
  }

  return (
    <S.Wrappper>
      <WaitingRoom />
      {/* <Card roundPrice="30$" numOfPlayers="4" />
      <Card roundPrice="30$" numOfPlayers="2" />
      <Card roundPrice="30$" numOfPlayers="7" /> */}
    </S.Wrappper>
  );
};

export default Rooms;
