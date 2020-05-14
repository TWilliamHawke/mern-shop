import React, { useState } from 'react'
import { newValueValidation } from 'src/utils/addFieldValidation';


const Values = ({values, setValues, name}) => {

  const [fieldValue, setFieldValue] = useState('')

  const addHandler = e => {
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