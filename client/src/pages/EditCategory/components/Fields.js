import React from 'react'
import AddField from './AddField'
import { tfMeasure } from '../../../utils/textTransforms'

const Fields = ({data, addFieldId, setAddField, checkHandle, selectedFields}) => {
  return(
    <>
      {data.map(({_id: id, ...otherVal}) => {
        if(addFieldId === id) return <AddField key={id} data={{id, ...otherVal}} showForm={addFieldId === id} setShowForm={setAddField} />

        const {fieldName, measure, type, multiple} = otherVal
        const count = type === 'selector' ? multiple ? ' (select few)' : ' (select one)' : ''
        
        return (
          <tr key={id}>
            <td><label htmlFor={id}>{`${fieldName}${count}${tfMeasure(measure)}`}</label></td>
            <td><input value='1' onChange={checkHandle} checked={!!selectedFields[id]} type='checkbox' id={id} /></td>
            <td><button className='config-btn' onClick={() => setAddField(id)}>Edit</button></td>
          </tr>
        )
      })}
    </>
  )
}


export default Fields