import React from 'react';
import InputMask from 'react-input-mask'

const AuthInput = ({data, values, onInput}) => {
  const {name, label, type} = data
  const mask = name === 'phone' ? "+7(999)999-99-99" : undefined

  return (
    <fieldset>
      <label htmlFor={`auth${name}`} >
        {label}
      </label>
      <InputMask 
        mask={mask}
        id={`auth${name}`}
        type={type} 
        name={name}
        value={values[name]}
        onChange={onInput} 
        placeholder={`Enter your ${name}`} />
    </fieldset>

  )
}

export default AuthInput