import React from 'react';
import AuthForm from '../../components/AuthForm';
import { loginUser} from '../../redux/authSaga/actions'
import { connect } from 'react-redux';

export const LoginPage = ({loginUser}) => {
  return (
    <div className='auth-page'>
      <h2>Login</h2>
      <AuthForm buttonName='Login' fetchForm={loginUser} />
    </div>
  );
};

const mapDispatchToProps = {
  loginUser
}

export default connect(null, mapDispatchToProps)(LoginPage);