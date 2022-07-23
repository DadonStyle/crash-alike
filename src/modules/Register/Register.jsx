import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import config from '../../config/config';
import { setIsRegister } from '../../redux/actions/pageAction';
import { errorHandler } from '../../services/errorHandler';
import Button from '../../components/Button/Button';
import S from './styledRegister';

const axios = Axios.create({ baseURL: config.baseUrl });

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const sendRegister = async (formData) => {
    try {
      const response = await axios.post('register', {
        email: formData.email,
        nick: formData.nick,
        password: formData.password,
        // search how to make it an object
      });
      console.log(response); // check if this response is needed
      toast.success('you have been successfully registered');
      navigate('/', { replace: true });
    } catch (err) {
      const errResponse = errorHandler(err.response.data);
      console.log(errResponse);
      toast.error(errResponse);
    }
  };

  useEffect(() => {
    dispatch(setIsRegister(true));

    return () => dispatch(setIsRegister(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Wrappper>
      <form onSubmit={handleSubmit(sendRegister)}>
        <S.FormEmail>
          <S.FormLabelWrapper>Email address</S.FormLabelWrapper>
          <S.FormControlWrapper
            required
            type="email"
            name="email"
            placeholder="Desired email"
            {...register('email', { required: true })}
          />
        </S.FormEmail>

        <S.FormNickName>
          <S.FormLabelWrapper>Nickname</S.FormLabelWrapper>
          <S.FormControlWrapper
            required
            type="text"
            placeholder="Desired nickname"
            {...register('nick', { required: true })}
          />
        </S.FormNickName>

        <S.FormPassword>
          <S.FormLabelWrapper>Password</S.FormLabelWrapper>
          <S.FormControlWrapper
            required
            className="marginLeft"
            type={passwordShown ? 'text' : 'password'}
            name="password"
            placeholder="Desired password"
            {...register('password', { required: true })}
          />
          {passwordShown ? (
            <FaEye onClick={() => setPasswordShown(!passwordShown)} />
          ) : (
            <FaRegEyeSlash onClick={() => setPasswordShown(!passwordShown)} />
          )}
        </S.FormPassword>
        <Button type="submit">Register</Button>
      </form>
    </S.Wrappper>
  );
};

export default Register;
