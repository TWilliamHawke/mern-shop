import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom'

import './auth-form.scss'

const AuthForm = ({ buttonName }) => {
  const { path }= useRouteMatch()
  const [login, setLogin] = useState('')
  const [userName, setUserName] = useState('')
  const [loginType, setLoginType] = useState('email')

  const radioHandle = e => {
    setLoginType(e.target.value)
  }

  return (
    <form className='auth-form'>
      <h3>{path}</h3>
      <div>
        <input type='radio' value='email'
          onChange={radioHandle}
          checked={loginType === 'email'}
          id='radioEmail'/>
        <label htmlFor='radioEmail'>Email</label>
        <span>/</span>
        <input type='radio'
          value='phone'
          onChange={radioHandle}
          checked={loginType === 'phone'}
          id='radioPhone'/>
        <label htmlFor='radioPhone'>Phone</label>
      </div>
      <input 
        onChange={e => setLogin(e.target.value)} 
        placeholder={`enter your ${loginType}`}
        value={login} 
        type={loginType}  />
      <input 
        onChange={e => setUserName(e.target.value)} 
        placeholder={`enter userNme`}
        value={userName} 
        type={path === '/login' ? 'hidden' : 'text'} />
      <button type='submit'>{buttonName}</button>
    </form>
  );
};

export default AuthForm;