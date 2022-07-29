import React, { useMemo, useState } from 'react';
import { twoDigits, oneDigits } from '../services/utillService';
import useInterval from './useInterval';

const STATUS = {
  NOT_STARTED: 'not started',
  STARTED: 'started',
  STOPPED: 'stopped',
  EXPLODED: 'exploded',
};

const useTimer = (totalSeconds, intervalSpeed = 10, isOneDigit = false) => {
  const INITIAL_COUNT = totalSeconds;
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState(STATUS.NOT_STARTED);

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
    setStatus(STATUS.NOT_STARTED);
    setSecondsRemaining(INITIAL_COUNT);
  };

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.EXPLODED);
      }
    },
    // passing null stops the interval
    status === STATUS.STARTED ? intervalSpeed : null
  );

  const seconds = useMemo(
    () => twoDigits(secondsToDisplay),
    [secondsToDisplay]
  );

  const miliSeconds = useMemo(
    () => twoDigits(millisecontsDisplay),
    [millisecontsDisplay]
  );

  const timer = !isOneDigit ? (
    <div style={{ padding: 20 }}>
      {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}:
      {secondsRemaining.toString().slice(-2)}
    </div>
  ) : (
    <div style={{ padding: 20 }}>
      {secondsToDisplay}:{oneDigits(secondsRemaining.toString().slice(-2))}
    </div>
  );

  return [
    timer,
    handleStart,
    handleStop,
    handleReset,
    status,
    seconds,
    miliSeconds,
  ];
};

export default useTimer;
