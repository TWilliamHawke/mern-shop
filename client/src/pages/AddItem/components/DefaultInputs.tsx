import React, { FC } from 'react';
import {InputHandlerType} from '../hooks/useItemTemplate'

type PropTypes = {
  setInputValues: InputHandlerType
  inputValues: Record<string, string | number | undefined>
}

export const DefaultInputs: FC<PropTypes> = ({setInputValues, inputValues}) => {
  const inputs = [
    {title: 'Title', id: 'itemTitle', type: 'text'},
    {title: 'Price', id: 'itemPrice', type: 'number', min: 0, step: 0.01},
    {title: 'Discount Price', id: 'itemDiscount', type: 'number', min: 0, step: 0.01},
  ]

  type test = (typeof inputs[0])['id']

  return (
    <>
      {inputs.map(({ title, id, ...other }) => (
        <div className='form-wrapper' key={id}>
          <label htmlFor='itemTitle'>{`${title}:`}</label>
          <input onChange={setInputValues} value={inputValues[id] || ''} id={id} {...other} />
        </div>
      ))}
    </>
  )
}
