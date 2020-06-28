import React, { FC } from 'react';
import AuthInput from './components/AuthInput';
import { ErrorMessages } from 'src/components/ErrorMessages'
import { useAuthData } from './hooks/useAuthData';
import './auth-page.scss'

type PropType = {
  header: string
}

export const AuthPage: FC<PropType> = ({header}) => {
  const {errors, hideSuccessMessage, inputHandle, radioHandle, submitHandle, isEmail, disableFetch, formValues, successMessage} = useAuthData(header)


  const inputs = [
    {type: 'text', name: 'phone', label: 'Phone', hide: isEmail},
    {type: 'email', name: 'email', label: 'Email', hide: !isEmail},
    {type: 'text', name: 'userName', label: 'Username', hide: header === 'Login'},
    {type: 'password', name: 'password', label: 'Password', hide: false},
  ]


  return (
    <div className='auth-page'>
      <h2>{header}</h2>
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
        <button disabled={disableFetch} className='btn-submit' type='submit'>{header}</button>
      </form>
    </div>
  );

}