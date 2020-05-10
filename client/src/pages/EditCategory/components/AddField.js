import React, { useState } from 'react';
import { addField } from '../../../redux/templateConfigSaga/actions'
import { connect } from 'react-redux';
import { addFieldValidation, newValueValidation } from '../../../utils/addFieldValidation';

export const AddField = ({showForm, setShowForm, addField}) => {
  const [type, setType] = useState('text')
  const [values, setValues] = useState([])
  const [fieldName, setFieldName] = useState('')
  const [measure, setMeasure] = useState('')
  const [fieldValue, setFieldValue] = useState('')
  
  const fetchValidation = () => {
    return addFieldValidation(type, values, fieldName)
  }

  const submitHandler = e => {
    e.preventDefault()
    if(fetchValidation()) return
    addField({
      fieldName,
      type,
      measure,
      values
    })  
  }  

  const cancelHandler = e => {
    e.preventDefault()
    setShowForm(false)
  }  

  const selectorHandle = e => {
    setType(e.target.value)
    if(e.target.value !== 'selector') setValues([])
  }

  const addValueHandle = e => {
    e.preventDefault()
    const valsArray = [...values, fieldValue]
    setValues(valsArray)
    setFieldValue('')
  }

  if(!showForm) return <td colSpan={3}><button onClick={() => setShowForm(true)} className='config-btn'>Add field</button></td>

  return (
    <td colSpan={3}>

    <form onSubmit={submitHandler}>
      <fieldset>
        <label htmlFor='add-field-name'>Field Name:</label>
        <input value={fieldName} onChange={e => setFieldName(e.target.value)} id='add-field-name' />
      </fieldset>
      <fieldset>
        <label htmlFor='add-measure'>Unit of measure:</label>
        <input value={measure} onChange={e => setMeasure(e.target.value)} id='add-measure' />
      </fieldset>

      <fieldset>
        <label htmlFor='add-type'>Type:</label>
        <select value={type} onChange={selectorHandle} id='add-type'>
          <option value='number'>Number</option>
          <option value='text'>Text</option>
          <option value='selector'>Selector</option>
        </select>
      </fieldset>
      
      {type === 'selector' && (
      <fieldset>
        <p>Possible values is {values.join(', ')}</p>
        <label htmlFor='add-value'>Add value</label>
        <input value={fieldValue} onChange={e => setFieldValue(e.target.value)} id='add-value' />
        <button disabled={newValueValidation(fieldValue)} onClick={addValueHandle}>Add</button>
      </fieldset>)}

      <div className='button-wrapper'>
        <button className='config-btn btn-red' onClick={cancelHandler} >Cancel</button>
        <button className='config-btn btn-blue' disabled={fetchValidation()} type="submit">Confirm</button>
      </div>
    </form>
    </td>
  );
};

const mapDispathtoProps = {
  addField
}

export default connect(null, mapDispathtoProps)(AddField);