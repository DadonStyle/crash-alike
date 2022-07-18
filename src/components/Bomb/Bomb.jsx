import React, { useEffect, useState } from 'react';
import S from './bombStyled';
import useTimer from '../../hooks/useTimer';

const Bomb = () => {
  const [changingSpeed, setChangingSpeed] = useState(10);
  const [intervalId, setIntervalId] = useState(0);
  const START_TIME = 2000;

  const bombIsTicking = false; // will change after timer hit 0;

  // eslint-disable-next-line no-unused-vars
  const [timer, handleStart, handleStop, handleReset, status, seconds] =
    useTimer(START_TIME, changingSpeed);

  useEffect(() => {
    handleStart();

    const id = setInterval(() => {
      setChangingSpeed(Math.floor(Math.random() * (11 - 1) + 1));
    }, Math.floor(Math.random() * (10000 - 1000) + 1000));
    setIntervalId(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (seconds < Math.floor(Math.random() * (6 - 3) + 1)) {
      clearInterval(intervalId);
      setChangingSpeed(Math.floor(Math.random() * (11 - 1) + 1));
    }
  }, [intervalId, seconds]);
  // changingSpeed
  return (
    <S.BombContainer>
      <div style={{ fontWeight: 700, color: 'black' }}>Bomb {timer}</div>
      <span>{}</span>
      <button type="button" onClick={handleStop}>
        {bombIsTicking ? 'Hit' : 'Bet'}
      </button>
    </S.BombContainer>
  );
};

export default Bomb;
