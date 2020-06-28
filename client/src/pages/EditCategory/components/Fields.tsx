import React, { FC, ChangeEvent } from 'react'
import AddField from './AddField'
import { tfMeasure } from '../../../utils/textTransforms'
import { FieldType } from 'src/types/templateDataType'

type PropTypes = {
  data: FieldType<string>[]
  addFieldId: boolean | string
  setAddField: (a: string | boolean) => void
  checkHandle: (e: ChangeEvent) => void
  selectedFields: Record<string, boolean>
}

const Fields: FC<PropTypes> = ({data, addFieldId, setAddField, checkHandle, selectedFields}) => {
  return(
    <>
      {data.map(({_id: id, ...otherVal}) => {
        if(addFieldId === id) return <AddField key={id} data={{_id: id, ...otherVal}} showForm={addFieldId === id} setShowForm={setAddField} />

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