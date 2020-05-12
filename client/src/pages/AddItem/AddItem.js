import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks'
import { connect } from 'react-redux'
import { loadTemplate } from '../../redux/dataFetchSaga/actions'
import Spinner from '../../components/Spinner'
import ItemImage from './components/ItemImage'

import './add-item.scss'
import CustomFields from './components/CustomFields';
 
export const AddItem = ({loadTemplate, match, category}) => {
  const [customData, setCustomData] = useState({})
  const [itemData, setItemData] = useState({
    itemTitle: '',
    itemPrice: '',
    itemDiscount: '',
    itemDescr: '',
  })

  useEffect(() => {
    loadTemplate(match.params.name)
  }, [loadTemplate, match.params.name])
  
  const inputHandler = e => {
    const {id, value} = e.target
    setItemData({
      ...itemData,
      [id]: value
    })
  }

  const saveItemHandler = e => {
    e.preventDefault()
    console.log(itemData)
    console.log(customData)
  }

  if(!category) return <Spinner />

  return (
    <div>
      AddItem
      <PathLinks action='Add Item' />
      <form className='add-item-form' onSubmit={saveItemHandler}>
        <div className='default-field'>
          <div className='default-field-text'>
            <h3>Add new {category.name}</h3>
            <div className='form-wrapper'>
              <label htmlFor='itemTitle'>Title:</label>
              <input onChange={inputHandler} value={itemData.itemTitle || ''} type='text' id='itemTitle' />
            </div>
            <div className='form-wrapper'>
              <label htmlFor='itemPrice'>Price:</label>
              <input onChange={inputHandler} value={itemData.itemPrice || ''}  type='number' min={0} step={0.01} id='itemPrice' />
            </div>
            <div className='form-wrapper'>
              <label htmlFor='itemDiscount'>Discount Price:</label>
              <input onChange={inputHandler} value={itemData.itemDiscount || ''}  type='number' min={0} step={0.01} id='itemDiscount' />
            </div>
          </div>
          <ItemImage />
        </div>

        <CustomFields imputValues={customData} setItemData={setCustomData} data={category} />
      
        <fieldset>
          <label htmlFor='itemDescr'>Description</label>
          <textarea onChange={inputHandler} value={itemData.itemDescr || ''}  rows={6} id='itemDescr'/>
        </fieldset>
        <button type='submit' className='btn-submit'>Save Item</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({item: {category}}) => ({
  category
})

export default connect(mapStateToProps, {loadTemplate})(withRouter(AddItem));