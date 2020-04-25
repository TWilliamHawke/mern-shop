import React from 'react';
import AuthForm from '../../components/AuthForm';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <AuthForm buttonName='Login' />
    </div>
  );
};

export default LoginPage;