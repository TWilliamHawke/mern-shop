import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom'
import AuthInput from './AuthInput';

import './auth-form.scss'
import { connect } from 'react-redux';


const AuthForm = ({ buttonName, fetchForm, loading }) => {
  const { path }= useRouteMatch()
  const [isEmail, setIsEmail] = useState(true)
  const [formValues, setFormValues] = useState({
    phone: '',
    email: '',
    userName: '',
    password: ''
  })

  const inputs = [
    {type: 'text', name: 'phone', label: 'Phone', hide: isEmail},
    {type: 'email', name: 'email', label: 'Email', hide: !isEmail},
    {type: 'text', name: 'userName', label: 'Username', hide: path === '/login'},
    {type: 'password', name: 'password', label: 'Password'},
  ]

  const inputHandle = e => {
    e.preventDefault()
    let {name, value} = e.target

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const radioHandle = () => {
    setIsEmail(isEmail => !isEmail)
  }

  const submitHandle = e => {
    e.preventDefault()
    fetchForm(formValues)
  }

  return (
    <form className='auth-form' onSubmit={submitHandle}>
      <fieldset className='auth-form__radio'>
        <input type='radio' value='email'
          onChange={radioHandle}
          checked={isEmail}
          id='radioEmail'/>
        <label htmlFor='radioEmail'>Email</label>
        <span>/</span>
        <input type='radio'
          value='phone'
          onChange={radioHandle}
          checked={!isEmail}
          id='radioPhone'/>
        <label htmlFor='radioPhone'>Phone</label>
      </fieldset>
      {inputs.map((input) => {
        const {hide, name} = input
        if(hide) return null
        return(
          <AuthInput key={name} data={input} values={formValues} onInput={inputHandle}  />
        )})}
      <button disabled={loading} type='submit'>{buttonName}</button>
    </form>
  );
};

const mapStatetoProps = ({auth: {loading}}) => ({
  loading
})

export default connect(mapStatetoProps)(AuthForm);