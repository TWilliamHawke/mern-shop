import React from 'react';
import AuthForm from 'src/components/AuthForm'

const SignInPage = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm buttonName='Sign in' fetchForm={() => {}}/>
    </div>
  );
};

export default SignInPage;