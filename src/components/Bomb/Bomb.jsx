import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import S from './bombStyled';
import useTimer from '../../hooks/useTimer';

const Bomb = ({ startTime, isStart = false, isStopped = false }) => {
  const [changingSpeed, setChangingSpeed] = useState(10);
  const [intervalId, setIntervalId] = useState(0);
  const [isTicking, setIsTicking] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [timer, handleStart, handleStop, handleReset, status, seconds] =
    useTimer(startTime, changingSpeed);

  useEffect(() => {
    if (isStart && !isTicking) {
      handleStart();
      setIsTicking(true);
      const id = setInterval(() => {
        setChangingSpeed(Math.floor(Math.random() * (11 - 1) + 1));
      }, Math.floor(Math.random() * (10000 - 1000) + 1000));
      setIntervalId(id);
    }

    if (isStopped && isTicking) {
      handleStop();
      clearInterval(intervalId);
      setIntervalId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart, isTicking, isStopped]);

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
    </S.BombContainer>
  );
};

Bomb.propTypes = {
  startTime: PropTypes.number,
  isStart: PropTypes.bool,
  isStopped: PropTypes.bool,
};

export default Bomb;
