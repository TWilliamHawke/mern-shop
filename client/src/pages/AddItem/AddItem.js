import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks'
import { connect } from 'react-redux'
import { loadTemplate } from '../../redux/dataFetchSaga/actions'
import Spinner from '../../components/Spinner'

import './add-item.scss'
import CustomFields from './components/CustomFields';
import DefaultFields from './components/DefaultFields';
 
export const AddItem = ({loadTemplate, match, category, imageUrl, imageId}) => {
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
    const data = {
      ...itemData,
      imageId,
      imageUrl,
      category: category._id,
      other: customData
    }
    console.log(data)
  }

  if(!category) return <Spinner />

  return (
    <>
      <PathLinks action='Add Item' />
      <form className='add-item-form' onSubmit={saveItemHandler}>
        <DefaultFields title={category.name} setInputValues={inputHandler} inputValues={itemData} />
        <CustomFields imputValues={customData} setItemData={setCustomData} data={category} />
        
        <div className='custom-fields'>
          <fieldset>
            <label htmlFor='itemDescr'>Description</label>
            <textarea onChange={inputHandler} value={itemData.itemDescr || ''}  rows={6} id='itemDescr'/>
          </fieldset>
        </div>
        <button type='submit' className='btn-submit'>Save Item</button>
      </form>
    </>
  );
};

const mapStateToProps = ({template: {category, imageUrl, imageId}}) => ({
  category, imageUrl, imageId
})

export default connect(mapStateToProps, {loadTemplate})(withRouter(AddItem));