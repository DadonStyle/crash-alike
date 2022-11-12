import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
// import { Input } from '@mui/material';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import config from '../../config/config';
import { errorHandler } from '../../services/errorHandler';
import { setClientObj } from '../../redux/actions/connectionAction';
import { setIsLogin } from '../../redux/actions/pageAction';
import Button from '../../components/Button/Button';
import S from './styled';

const axios = Axios.create({ baseURL: config.baseUrl });

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const id = 1; // hardcoded for now

  const sendLogin = async (formData) => {
    try {
      const response = await axios.post('/login', {
        username: formData.email,
        password: formData.password,
      });
      dispatch(setClientObj(response.data));
      toast.success('you have been successfully logged in');
      navigate(`/playRoom/:${id}`, { replace: true });
    } catch (err) {
      console.log('raw err', err.response.data);
      const errResponse = errorHandler(err.response.data);
      toast.error(errResponse);
    }
  };

  useEffect(() => {
    dispatch(setIsLogin(true));

    return () => dispatch(setIsLogin(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Wrappper>
      <form onSubmit={handleSubmit(sendLogin)}>
        <S.FormEmail>
          <S.FormLabelWrapper>Email address</S.FormLabelWrapper>
          <S.FormControlWrapper
            required
            type="email"
            name="email"
            placeholder="Enter email"
            className="right12"
            {...register('email', { required: true })}
          />
        </S.FormEmail>
        <S.FormPassword>
          <S.FormLabelWrapper>Password</S.FormLabelWrapper>
          <S.FormControlWrapper
            required
            type={passwordShown ? 'text' : 'password'}
            name="password"
            placeholder="Enter password"
            {...register('password', { required: true })}
          />
          {passwordShown ? (
            <FaEye onClick={() => setPasswordShown(!passwordShown)} />
          ) : (
            <FaRegEyeSlash onClick={() => setPasswordShown(!passwordShown)} />
          )}
        </S.FormPassword>
        <Button type="submit">Login</Button>
        <Button onClick={() => navigate('/register', { replace: true })}>
          Sign Up
        </Button>
      </form>
    </S.Wrappper>
  );
};

export default Login;
