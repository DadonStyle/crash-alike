import { SET_CLIENT_OBJ } from '../actionTypes/connectionActionType';

export const setClientObj = (obj) => ({
  type: SET_CLIENT_OBJ,
  payload: obj,
});
