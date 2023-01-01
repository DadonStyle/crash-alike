import { SET_CLIENT_OBJ, SET_SOCKET, ADD_MSG_ARR } from '../actionTypes/connectionActionType';

export const setClientObj = (obj) => ({
  type: SET_CLIENT_OBJ,
  payload: obj,
});

export const setSocket = (obj) => ({
  type: SET_SOCKET,
  payload: obj,
});

export const addMsgArr = (obj) => ({
  type: ADD_MSG_ARR,
  payload: obj,
});
