import { JWT_TOKEN } from '../actionTypes/connectionActionType';

export const setJwtToken = (token) => ({
  type: JWT_TOKEN,
  payload: token,
});
