import React, { useState } from 'react'
import Axios from "axios";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import config from '../../config/config';

const axios = Axios.create({ baseURL: config.baseUrl })

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);

  const sendRegister = async (formData) => {
    try { 
      const response = await axios.post("register", {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        nick: formData.nick,
        password: formData.password,
    });
      console.log(response); // check if this response is needed
      toast.success("you have been successfully logged in");
      navigate('/', {replace: true});
    } catch (err) {
      toast.error("failed to log in please try again");
    }
  }

  return (
    <div className= "Register Box">
    <form onSubmit={handleSubmit(sendRegister)}>
      <Form.Label>Email address</Form.Label>
      <Form.Control
        required
        type="email"
        placeholder="Enter email"
        {...register('email', { required: true })}
      />
      <Form.Label>First Name</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter your first name"
        {...register('firstName', { required: true })}
      />
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter your last name"
        {...register('lastName', { required: true })}
      />
      <Form.Label>Nickname</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter your desired nickname"
        {...register('nick', { required: true })}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        required
        type={passwordShown ? "text" : "password"}
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
        className="Register_button"
        size="large"
      >
       Register
      </button>
    </form>
  </div>
  )
}

export default Register;