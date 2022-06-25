import React, { useState } from 'react';
import { twoDigits } from '../services/utillService';
import useInterval from './useInterval';

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};

const useTimer = (totalSeconds, intervalSpeed = 10) => {
  const INITIAL_COUNT = totalSeconds;
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState(STATUS.STOPPED);

  const millisecontsDisplay = secondsRemaining % 100;
  const secondsCalc = (secondsRemaining - millisecontsDisplay) / 100;
  const secondsToDisplay = secondsCalc % 60;
  const minutesRemaining = (secondsCalc - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  // const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
  };

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    // passing null stops the interval
    status === STATUS.STARTED ? intervalSpeed : null
  );

  const seconds = twoDigits(secondsToDisplay);

  const timer = (
    <div style={{ padding: 20 }}>
      {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}:
      {secondsRemaining.toString().slice(-2)}
    </div>
  );

  return [timer, handleStart, handleStop, handleReset, status, seconds];
};

export default useTimer;
