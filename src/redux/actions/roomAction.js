import {
  IS_ROUND_OVER,
  IS_WAITING_ROOM,
  IS_GAME_STARTED,
} from '../actionTypes/roomActionType';

export const setIsRoundOver = (bool) => ({
  type: IS_ROUND_OVER,
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
