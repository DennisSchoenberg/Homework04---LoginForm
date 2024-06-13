
import React from 'react';
import Input from '../input/Input';
import MyButton from '../myButton/MyButton';
import './LoginForm.css';

function LoginForm() {
  return (
    <form className="login-form">
      <Input name="username" type="text" placeholder="Enter your username" label="Username" />
      <Input name="password" type="password" placeholder="Enter your password" label="Password" />
      <MyButton name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;
