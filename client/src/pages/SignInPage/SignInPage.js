import React from 'react';
import AuthForm from 'src/components/AuthForm'
import {createUser} from '../../redux/authSaga/actions'
import { connect } from 'react-redux';

export const SignInPage = ({createUser}) => {
  return (
    <div className='auth-page'>
      <h2>Sign In</h2>
      <AuthForm buttonName='Sign in' fetchForm={createUser}/>
    </div>
  );
};

const mapDispatchToProps = {
  createUser
}

export default connect(null, mapDispatchToProps)(SignInPage);