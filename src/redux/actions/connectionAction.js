import { JWT_TOKEN } from '../actionTypes/connectionActionType';

export const setJwtToken = (token) => (dispatch) => {
  dispatch({
    type: JWT_TOKEN,
    payload: token,
  });
};
