import React, { useEffect } from 'react';
import Bomb from '../../components/Bomb/Bomb';
import S from './styledPlayRoom';

const PlayRoom = () => {
  useEffect(() => {}, []);

  return (
    <S.Wrappper>
      Chat
      <Bomb />
      Times
    </S.Wrappper>
  );
};

export default PlayRoom;
