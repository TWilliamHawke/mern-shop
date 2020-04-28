import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom'
import AuthInput from './AuthInput';
import { hideSuccessMessage, redirectSuccess } from '../../redux/authReducer/actions'
import ErrorMessages from '../ErrorMessages/ErrorMessages'

import './auth-form.scss'
import { connect } from 'react-redux';


export const AuthForm = ({ buttonName, fetchForm, loading, successMessage, hideSuccessMessage, redirectSuccess, allowRedirect, errors }) => {
  const { path }= useRouteMatch()
  const history = useHistory()
  const [isEmail, setIsEmail] = useState(true)
  const [formValues, setFormValues] = useState({
    phone: '',
    email: '',
    userName: '',
    password: ''
  })
  
  useEffect(() => {
    if(!allowRedirect) return
    history.push('/login')
    redirectSuccess()
    // eslint-disable-next-line
  }, [allowRedirect, path])

  useEffect (() => {
    return () => {
      if(path !== '/login' || !successMessage) return
      hideSuccessMessage()
    }
  // eslint-disable-next-line
  }, [hideSuccessMessage, path])
  
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
      <ErrorMessages errors={errors} />
      {successMessage && <div
        className='success-message'>Account has been created
        <button onClick={hideSuccessMessage}>Close</button>
      </div>}
      <button disabled={loading} type='submit'>{buttonName}</button>
    </form>
  );
};

const mapDispatchToProps = {
  hideSuccessMessage,
  redirectSuccess
}

const mapStatetoProps = ({auth: {loading, successMessage, allowRedirect, errors}}) => ({
  loading, successMessage, redirectSuccess, allowRedirect, errors
})

export default connect(mapStatetoProps, mapDispatchToProps)(AuthForm);