import React from 'react'
import ItemImage from './ItemImage'

const DefaultFields = ({title, inputValues, setInputValues, brands}) => {

  const inputs = [
    {title: 'Title', id: 'itemTitle', type: 'text'},
    {title: 'Price', id: 'itemPrice', type: 'number', min: 0, step: 0.01},
    {title: 'Discount Price', id: 'itemDiscount', type: 'number', min: 0, step: 0.01},
  ]
  
  return(
    <div className='default-field'>
      <div className='default-field-text'>
        <h3>Add new {title}</h3>
        
        {inputs.map(({title, id, ...other}) => (
          <div className='form-wrapper' key={id}>
            <label htmlFor='itemTitle'>{`${title}:`}</label>
            <input onChange={setInputValues} value={inputValues[id] || ''} id={id} {...other} />
          </div>
        ))}

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