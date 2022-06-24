import { SET_CLIENT_OBJ } from '../actionTypes/connectionActionType';

const INITIAL_STATE = {
  clientObj: null,
};

export const connectionReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case SET_CLIENT_OBJ:
      return {
        ...state,
        clientObj: action.payload,
      };
    default:
      return state;
  }
};
