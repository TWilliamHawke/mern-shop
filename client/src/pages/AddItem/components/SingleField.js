import React from 'react';
import { tfMeasure } from 'src/utils/textTransforms';

export const SingleField = ({id, fieldData, inputValues, setInputValues}) => {
  const {fieldName, measure, type, values} = fieldData

  const changeHandler = e => {
    const {id, value} = e.target
    setInputValues({
      ...inputValues,
      [id]: value
    })
  }

  return (
    <div className='form-wrapper'>
    <label htmlFor={id} >{`${fieldName} ${tfMeasure(measure)}:`}</label>
    {type === 'selector' ? 
      <select onChange={changeHandler} value={inputValues[id] || values[0]} id={id}>
        {values.map((val, idx) => <option key={idx} value={val}>{val}</option>)}
      </select> :
      <input onChange={changeHandler} value={inputValues[id] || ''} id={id} type={type} />}
  </div>

  )
}