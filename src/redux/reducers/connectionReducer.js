import { SET_CLIENT_OBJ, SET_SOCKET, ADD_MSG_ARR } from '../actionTypes/connectionActionType';

const INITIAL_STATE = {
  clientObj: {},
  socket: null,
  msgArr: [],
};

export const connectionReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case SET_CLIENT_OBJ:
      return {
        ...state,
        clientObj: action.payload,
      };
    case SET_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case ADD_MSG_ARR:
      return {
        ...state,
        msgArr: state.msgArr.concat(action.payload),
      };
    default:
      return state;
  }
};
