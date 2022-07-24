import {
  IS_COUNT_DOWN,
  IS_WAITING_ROOM,
  IS_GAME_STARTED,
} from '../actionTypes/roomActionType';

export const setIsCountDown = (bool) => ({
  type: IS_COUNT_DOWN,
  payload: bool,
});

export const setIsWaitingRoom = (bool) => ({
  type: IS_WAITING_ROOM,
  payload: bool,
});

export const setIsGameStarted = (bool) => ({
  type: IS_GAME_STARTED,
  payload: bool,
});
