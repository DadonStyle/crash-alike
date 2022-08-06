import {
  IS_ROUND_OVER,
  IS_WAITING_ROOM,
  IS_GAME_STARTED,
} from '../actionTypes/roomActionType';

const INITIAL_STATE = {
  isRoundOver: false,
  isWaitingRoom: false,
  isGameStarted: false,
};

export const roomReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case IS_ROUND_OVER:
      return {
        ...state,
        isRoundOver: action.payload,
      };
    case IS_WAITING_ROOM:
      return {
        ...state,
        isWaitingRoom: action.payload,
      };
    case IS_GAME_STARTED:
      return {
        ...state,
        isGameStarted: action.payload,
      };
    default:
      return state;
  }
};
