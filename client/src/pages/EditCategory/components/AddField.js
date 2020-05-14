import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFieldValidation } from 'src/utils/addFieldValidation';
import { editField, addField } from 'src/redux/dataFetchSaga/actions'
import Values from './Values'

export const AddField = ({showForm, setShowForm, addField, data, editField}) => {
  const [type, setType] = useState('text')
  const [values, setValues] = useState([])
  const [fieldName, setFieldName] = useState('')
  const [measure, setMeasure] = useState('')
  const [multiple, setMultiple] = useState(false)
  
  const fetchValidation = () => {
    return addFieldValidation(type, values, fieldName)
  }

  //set input values on mount
  useEffect(() => {
    if(!data) return
    setFieldName(data.fieldName)
    setValues(data.values)
    setMeasure(data.measure)
    setType(data.type)
    setMultiple(data.multiple || false)
    // eslint-disable-next-line
  }, [])

  const submitHandler = e => {
    e.preventDefault()
    if(fetchValidation()) return
    const fieldData = {
      fieldName, type, measure, values, multiple
    }
    if(!data) return addField(fieldData)
    fieldData.id = data.id
    editField(fieldData)  
  }  

  const cancelHandler = e => {
    //hide form
    e.preventDefault()
    setShowForm(false)
  }  

  const selectorHandle = e => {
    setType(e.target.value)
    if(e.target.value !== 'selector') setValues([])
  }

  const addValueHandle = fieldValue => {
    //only if type = selector or checkbox
    const valsArray = [...values, fieldValue]
    setValues(valsArray)
  }

  if(!showForm) return <tr><td colSpan={3}><button onClick={() => setShowForm('new')} className='config-btn'>Add field</button></td></tr>

  return (
    <tr>
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
            <div className='form-wrapper' >
              <label htmlFor='add-multiple'>Multiple values</label>
              <input onChange={() => setMultiple(!multiple)} checked={!!multiple} value='1' id='add-multiple' type='checkbox' />
              <div className='no-data'></div>
            </div>
            <Values name='values' values={values} addValue={addValueHandle} />
          </>
        )}

        <div className='button-wrapper'>
          <button className='config-btn btn-red' onClick={cancelHandler} >Cancel</button>
          <button className='config-btn btn-blue' disabled={fetchValidation()} type="submit">Confirm</button>
        </div>
      </form>
    </td>
    </tr>
  );
};

const mapDispathtoProps = {
  addField, editField
}

export default connect(null, mapDispathtoProps)(AddField);