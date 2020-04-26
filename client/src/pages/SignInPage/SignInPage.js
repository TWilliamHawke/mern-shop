import React from 'react';
import AuthForm from 'src/components/AuthForm'
import {createUserRequest} from '../../actions/syncActions'
import { connect } from 'react-redux';

const SignInPage = ({createUserRequest}) => {
  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm buttonName='Sign in' fetchForm={createUserRequest}/>
    </div>
  );
};

const mapDispatchToProps = {
  createUserRequest
}

export default connect(null, mapDispatchToProps)(SignInPage);