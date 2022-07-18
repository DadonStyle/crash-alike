import React, { useEffect } from 'react';
import Bomb from '../../components/Bomb/Bomb';
import S from './styledPlayRoom';

const PlayRoom = () => {
  useEffect(() => {}, []);

  return (
    <S.Wrappper>
      <h1>waiting room / start timer</h1>
      Joined list
      <Bomb />
      Prize Pool + UI BTN
    </S.Wrappper>
  );
};

export default PlayRoom;
