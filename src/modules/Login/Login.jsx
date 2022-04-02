import React, { useState } from 'react'
import Axios from "axios";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import config from '../../config/config';

const axios = Axios.create({ baseURL: config.baseUrl })

const Login = () => { 
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);

  const sendLogin = async (formData) => {
    try { 
      const response = await axios.post("/login", {
        username: formData.email,
        password: formData.password
      });
      console.log(response); // we should get the jwt token from the response
      toast.success("you have been successfully logged in");
      navigate('/', {replace: true});
    } catch (err) {
      toast.error("failed to log in please try again");
    }
  }

  return (
    <div className="Login Box">
    {/* <Typography variant="h3" className="HeadLine">
      LOGIN
    </Typography> */}
    <form onSubmit={handleSubmit(sendLogin)}>
      <Form.Label>Email address</Form.Label>
      <Form.Control
        required
        type="email"
        name="email"
        placeholder="Enter email"
        {...register('email', { required: true })}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        required
        type={passwordShown ? "text" : "password"}
        name="password"
        placeholder="Enter password"
        {...register('password', { required: true })}
      />
      <button
        type='button'
        onClick={() => setPasswordShown(!passwordShown)}      
      >
        togglePassword
      </button>
      <button
        variant="outlined"
        type="submit"
        className="login_button"
        size="large"
      >
        login
      </button>
    </form>
  </div>
  )
}

export default Login;