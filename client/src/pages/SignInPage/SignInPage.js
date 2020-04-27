import React from 'react';
import AuthForm from 'src/components/AuthForm'
import {createUser} from '../../actions/syncActions'
import { connect } from 'react-redux';

export const SignInPage = ({createUser}) => {
  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm buttonName='Sign in' fetchForm={createUser}/>
    </div>
  );
};

const mapDispatchToProps = {
  createUser
}

export default connect(null, mapDispatchToProps)(SignInPage);