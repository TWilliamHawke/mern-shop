import React, { FC, ChangeEvent } from 'react';
import InputMask from 'react-input-mask'

type PropTypes = {
  data: {
    name: string,
    label: string
    type: string
    hide: boolean
  }
  values: Record<string, string>
  onInput: (e: ChangeEvent<HTMLInputElement>) => void
}

const AuthInput: FC<PropTypes> = ({data, values, onInput}) => {
  const {name, label, type} = data
  const mask = name === 'phone' ? "+7(999)-999-99-99" : ''

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