import React from 'react';
import AuthForm from '../../components/AuthForm';
import { loginUser} from '../../actions/syncActions'
import { connect } from 'react-redux';

export const LoginPage = ({loginUser}) => {
  return (
    <div>
      <h2>Login</h2>
      <AuthForm buttonName='Login' fetchForm={loginUser} />
    </div>
  );
};

const mapDispatchToProps = {
  loginUser
}

export default connect(null, mapDispatchToProps)(LoginPage);