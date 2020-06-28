import React, { useState, MouseEvent, FC } from 'react'
import { newValueValidation } from 'src/utils/addFieldValidation';

type PropTypes = {
  setValues: (t: string[]) => void
  values: string[]
  name: string
}

const Values: FC<PropTypes> = ({values, setValues, name}) => {

  const [fieldValue, setFieldValue] = useState('')

  const addHandler = (e: MouseEvent) => {
    e.preventDefault()
    const valArray = [...values, fieldValue]
    setValues(valArray)
    setFieldValue('')
  }

  return(
    <>
      <p>Possible {name} is {values.join(', ')}</p>
      <div className='form-wrapper'>
        <label htmlFor='add-value'>Add value</label>
        <div>
          <input value={fieldValue} onChange={e => setFieldValue(e.target.value)} id='add-value' />
          <button disabled={newValueValidation(fieldValue)} onClick={addHandler}>Add</button>
        </div>
      </div>
    </>)
}


export default Values