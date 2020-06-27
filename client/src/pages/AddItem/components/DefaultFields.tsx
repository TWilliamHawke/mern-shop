import React, { FC } from 'react'
import ItemImage from './ItemImage'
import { DefaultInputs } from './DefaultInputs'
import { InputHandlerType } from '../hooks/useItemTemplate'

type PropTypes = {
  title: string
  brands: string[]
  setInputValues: InputHandlerType
  inputValues: Record<string, string | number | undefined>
}

const DefaultFields: FC<PropTypes> = ({title, inputValues, setInputValues, brands}) => {
  
  return(
    <div className='default-field'>
      <div className='default-field-text'>
        <h3>Add new {title}</h3>
        
        <DefaultInputs setInputValues={setInputValues} inputValues={inputValues} />

        <div className='form-wrapper'>
          <label htmlFor='brand'>Manufacturer</label>
          <select onChange={setInputValues} value={inputValues.brand || brands[0]} id={'brand'}>
            {brands.map((val, idx) => <option key={idx} value={val}>{val}</option>)}
          </select>
        </div>

      </div>
      <ItemImage />
    </div>

  )
}

export default DefaultFields