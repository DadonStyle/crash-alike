import React from 'react'
// import { Button, Typography } from "@material-ui/core";
// import axios from "axios";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import react toastify
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// import { useState } from "react";

const Login = () => { 
  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  // const [passwordShown, setPasswordShown] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };

  // const send = async () => {
  //   try {
  //     const response = await axios.post( 
  //       "base URL" + "/login" + "/" + "user and password" // check the order
  //     );
  //     // notify.success("you have been successfully logged in !!!"); change to react toastify
  //     navigate.push("/home");
  //   } catch (err) {
  //     // notify.error(err.response.data); change to react toastify
  //   }
  // }

  const demo = () => {console.log("works")}

  return (
    <div className="Login Box">
    {/* <Typography variant="h3" className="HeadLine">
      LOGIN
    </Typography> */}
    <form onSubmit={handleSubmit(demo)}>
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
        type="password"
        // type={passwordShown ? "text" : "password"}
        name="password"
        placeholder="Enter password"
        {...register('password', { required: true })}
      />
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

export default Login