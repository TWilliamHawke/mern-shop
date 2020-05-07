import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks'
import { connect } from 'react-redux'
import { loadImage } from '../../redux/itemSaga/actions'

import './add-item.scss'
 
export const AddItem = ({history, location, loadImage, imageUrl}) => {
  const [itemData, setItemData] = useState({})
  const {state} = location
  
  const gotoEditTemplate = () => {
    history.push({
      pathname: 'edit',
      state
    })
  }

  const inputHandler = e => {
    const {id, value} = e.target
    setItemData({
      ...itemData,
      [id]: value
    })
  }

  const imageHandler = e => {
    const file = e.target.files[0]
    if(!file) return
    const formData = new FormData();
    formData.append('itemImg', file)
    loadImage(formData)
  }
  return (
    <div>
      AddItem
      <PathLinks />
      category: {state}
      <form className='add-item-form'>
        <div className='form-wrapper'>
          <label htmlFor='itemTitle'>Title</label>
          <input onChange={inputHandler} value={itemData.itemTitle || ''} type='text' id='itemTitle' />
        </div>
        <div className='form-wrapper'>
          <label htmlFor='itemPrice'>Price</label>
          <input onChange={inputHandler} value={itemData.itemPrice || ''}  type='number' min={0} step={0.01} id='itemPrice' />
        </div>
        <div className='item-image'>
          <input id='itemImg' type='file' accept=".png, .jpg, .jpeg" onChange={imageHandler} />
          <label htmlFor='itemImg'>
            <img alt='item' src={imageUrl} />
          </label>
        </div>
        <fieldset>
          <label htmlFor='itemDescr'>Description</label>
          <textarea onChange={inputHandler} value={itemData.itemDescr || ''}  rows={6} id='itemDescr'/>
        </fieldset>
      </form>
      <button onClick={gotoEditTemplate} className='config-btn'>Edit template</button>
    </div>
  );
};

const mapStateToProps = ({item: {imageUrl}}) => ({
  imageUrl
})

export default connect(mapStateToProps, {loadImage})(withRouter(AddItem));