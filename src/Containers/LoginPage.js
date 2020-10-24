import React from 'react';
import Login from '../Components/Login';

const LoginPage = () => {
  const onLogin = (type) => {
    console.log(type);
  }

  return (
    <Login onLogin={onLogin} />
  )
}

export default LoginPage;