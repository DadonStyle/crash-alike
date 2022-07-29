import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import S from './bombStyled';
import useTimer from '../../hooks/useTimer';

const Bomb = ({ startTime, isBombTick = false, setHitTime, isHit = false }) => {
  const [changingSpeed, setChangingSpeed] = useState(10);
  const [intervalId, setIntervalId] = useState(0);
  const [isTicking, setIsTicking] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [
    timer,
    handleStart,
    // eslint-disable-next-line no-unused-vars
    handleStop,
    // eslint-disable-next-line no-unused-vars
    handleReset,
    // eslint-disable-next-line no-unused-vars
    status,
    seconds,
    miliSeconds,
  ] = useTimer(startTime, changingSpeed);

  useEffect(() => {
    if (isBombTick && !isTicking) {
      handleStart();
      setIsTicking(true);
      const id = setInterval(() => {
        setChangingSpeed(Math.floor(Math.random() * (11 - 1) + 1));
      }, Math.floor(Math.random() * (10000 - 1000) + 1000));
      setIntervalId(id);
    }
    if (isTicking && isHit) {
      // handleStop();
      setHitTime(`${seconds}:${miliSeconds}`);
      toast.success(`${seconds}:${miliSeconds}`);
      // clearInterval(intervalId);
      // setIntervalId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBombTick, isTicking, isHit]);

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
    </S.BombContainer>
  );
};

Bomb.propTypes = {
  startTime: PropTypes.number,
  isBombTick: PropTypes.bool,
  setHitTime: PropTypes.func,
  isHit: PropTypes.bool,
};

export default Bomb;
