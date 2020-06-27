import React, { FC, ChangeEvent } from 'react';
import { tfMeasure } from 'src/utils/textTransforms';
import { FieldCutType } from 'src/types/templateDataType';

type PropTypes = {
  id: string
  fieldData: FieldCutType<string>
  inputValues: Record<string, string>
  setInputValues: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

export const SingleField: FC<PropTypes> = ({id, fieldData, inputValues, setInputValues}) => {
  const {fieldName, measure, type, values} = fieldData

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {id, value} = e.target
    setInputValues({
      ...inputValues,
      [id]: value
    })
  }

  const selectOptions = values.map(
    (val, idx) => <option key={idx} value={val}>{val}</option>
  )

  return (
    <div className='form-wrapper'>
    <label htmlFor={id} >{`${fieldName} ${tfMeasure(measure)}:`}</label>
    {type === 'selector' ? 
      <select onChange={changeHandler} value={inputValues[id] || values[0]} id={id}>
        {selectOptions}
      </select> :
      <input onChange={changeHandler} value={inputValues[id] || ''} id={id} type={type} />}
  </div>

  )
}