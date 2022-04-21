import { JWT_TOKEN } from '../actionTypes/connectionActionType';

const INITIAL_STATE = {
  jwtToken: null,
};

const connectionReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case JWT_TOKEN:
      return {
        ...state,
        jwtToken: action.payload,
      };
    default:
      return state;
  }
};

export default connectionReducer;
