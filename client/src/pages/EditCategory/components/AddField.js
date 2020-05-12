import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFieldValidation, newValueValidation } from '../../../utils/addFieldValidation';
import { editField, addField } from '../../../redux/dataFetchSaga/actions'

export const AddField = ({showForm, setShowForm, addField, data, editField}) => {
  const [type, setType] = useState('text')
  const [values, setValues] = useState([])
  const [fieldName, setFieldName] = useState('')
  const [measure, setMeasure] = useState('')
  const [fieldValue, setFieldValue] = useState('')
  
  const fetchValidation = () => {
    return addFieldValidation(type, values, fieldName)
  }

  useEffect(() => {
    if(!data) return
    setFieldName(data.fieldName)
    setValues(data.values)
    setMeasure(data.measure)
    setType(data.type)
    // eslint-disable-next-line
  }, [])

  const submitHandler = e => {
    e.preventDefault()
    if(fetchValidation()) return
    const fieldData = {
      fieldName,
      type,
      measure,
      values
    }
    if(!data) return addField(fieldData)
    fieldData.id = data.id
    editField(fieldData)  
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

  if(!showForm) return <td colSpan={3}><button onClick={() => setShowForm('new')} className='config-btn'>Add field</button></td>

  return (
    <td colSpan={3}>

    <form className='add-field-form' onSubmit={submitHandler}>
      <div className='form-wrapper'>
        <label htmlFor='add-field-name'>Field Name:</label>
        <input value={fieldName} onChange={e => setFieldName(e.target.value)} id='add-field-name' />
      </div>
      <div className='form-wrapper'>
        <label htmlFor='add-measure'>Unit of measure:</label>
        <input value={measure} onChange={e => setMeasure(e.target.value)} id='add-measure' />
      </div>

      <div className='form-wrapper'>
        <label htmlFor='add-type'>Type:</label>
        <select value={type} onChange={selectorHandle} id='add-type'>
          <option value='number'>Number</option>
          <option value='text'>Text</option>
          <option value='selector'>Selector</option>
        </select>
      </div>
      
      {type === 'selector' && (
        <>
          <p>Possible values is {values.join(', ')}</p>
          <div className='form-wrapper'>
            <label htmlFor='add-value'>Add value</label>
            <div>
              <input value={fieldValue} onChange={e => setFieldValue(e.target.value)} id='add-value' />
              <button disabled={newValueValidation(fieldValue)} onClick={addValueHandle}>Add</button>
            </div>
          </div>
        </>)}

      <div className='button-wrapper'>
        <button className='config-btn btn-red' onClick={cancelHandler} >Cancel</button>
        <button className='config-btn btn-blue' disabled={fetchValidation()} type="submit">Confirm</button>
      </div>
    </form>
    </td>
  );
};

const mapDispathtoProps = {
  addField, editField
}

export default connect(null, mapDispathtoProps)(AddField);