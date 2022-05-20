import { IS_REGISTER, IS_LOGIN } from '../actionTypes/pageActionType';

const INITIAL_STATE = {
  isLogin: false,
  isRegister: false,
};

export const pageReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case IS_REGISTER:
      return {
        ...state,
        isRegister: action.payload,
      };
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
