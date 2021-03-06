import React, { useState, useEffect, FC, FormEvent, MouseEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addFieldValidation } from 'src/utils/addFieldValidation';
import { editField, addField } from 'src/redux/templateSaga/actions'
import Values from './Values'
import { FieldType } from 'src/types/templateDataType';
import { EditFieldData } from 'src/types/fetchDataTypes';

type PropTypes = {
  data?: FieldType<string>
  setShowForm: (a: boolean | string) => void
  showForm: boolean
}

export const AddField: FC<PropTypes> = ({showForm, setShowForm, data }) => {
  const [type, setType] = useState('text')
  const [values, setValues] = useState<string[]>([])
  const [fieldName, setFieldName] = useState('')
  const [measure, setMeasure] = useState('')
  const [multiple, setMultiple] = useState(false)
  const dispatch = useDispatch()
  
  const fetchValidation = () => {
    return addFieldValidation(type, values, fieldName)
  }

  useEffect(() => {//set input values on mount
    if(!data) return

    setFieldName(data.fieldName)
    setValues(data.values)
    setMeasure(data.measure)
    setType(data.type)
    setMultiple(data.multiple || false)
    
    // eslint-disable-next-line
  }, [])

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if(fetchValidation()) return
    const fieldData: EditFieldData = {
      fieldName, type, measure, values, multiple
    }
    if(!data) return dispatch(addField(fieldData))
    fieldData.id = data._id
    dispatch(editField(fieldData))
  }  

  const cancelHandler = (e: MouseEvent) => {//hide form
    e.preventDefault()
    setShowForm(false)
  }  

  const selectorHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value)
    if(e.target.value !== 'selector') setValues([])
  }

  if(!showForm) return (
  <tr>
    <td colSpan={3}>
      <button
        onClick={() => setShowForm('new')}
        className='config-btn'>
        Add field
      </button>
    </td>
  </tr>
  )

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
            <Values name='values' values={values} setValues={setValues} />
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

export default AddField;