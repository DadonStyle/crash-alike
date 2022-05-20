import { IS_REGISTER, IS_LOGIN } from '../actionTypes/pageActionType';

export const setIsRegister = (bool) => ({
  type: IS_REGISTER,
  payload: bool,
});

export const setIsLogin = (bool) => ({
  type: IS_LOGIN,
  payload: bool,
});
