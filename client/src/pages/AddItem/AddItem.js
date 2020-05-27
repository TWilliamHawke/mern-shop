import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks'
import { connect } from 'react-redux'
import { loadTemplate, addItem, editItem } from '../../redux/dataFetchSaga/actions'
import Spinner from '../../components/Spinner'
import CustomFields from './components/CustomFields';
import DefaultFields from './components/DefaultFields';
import { clearTemplateData } from '../../redux/templateReducer/actions';

import './add-item.scss'
 
export const AddItem = ({loadTemplate, match, category, imageUrl, editItem,
    imageId, addItem, saveItemSuccess, history, clearTemplateData, oldItemData}) => {
  const [customData, setCustomData] = useState({})
  const [itemData, setItemData] = useState({
    itemTitle: '',
    itemPrice: '',
    itemDiscount: '',
  })

  useEffect(() => {
    if(!saveItemSuccess) return
    history.push(`/catalog/${match.params.name}/`)
    // eslint-disable-next-line
  }, [saveItemSuccess])

  useEffect(() => {
    if(!category) return
    if(!oldItemData) return setItemData({
      ...itemData,
      brand: category.brands[0]
    })
    const {title, price, discountPrice, brand} = oldItemData

    setItemData({
      itemTitle: title,
      itemPrice: price,
      itemDiscount: discountPrice,
      brand,
    })

    // eslint-disable-next-line
  }, [category, oldItemData])

  useEffect(() => {
    loadTemplate({cat: match.params.name, item: match.params.item})
    return () => clearTemplateData()
    // eslint-disable-next-line
  }, [loadTemplate, match.params.name, clearTemplateData])
  
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
      catName: match.params.name,
      category: category._id,
      other: customData
    }
    if(!match.params.item) return addItem(data)
    data.id = match.params.item
    if(oldItemData.image !== imageUrl) {
      data.oldImg = oldItemData.image
    }
    editItem(data)
  }

  if(!category) return <Spinner />

  return (
    <>
      <PathLinks itemTitle={oldItemData?.title} action={oldItemData ? 'Edit' : 'Add Item'} />
      <form className='add-item-form' onSubmit={saveItemHandler}>
        <DefaultFields title={category.name} brands={category.brands} setInputValues={inputHandler} inputValues={itemData} />
        <CustomFields oldItemData={oldItemData?.other} imputValues={customData} setItemData={setCustomData} data={category} />
        <button type='submit' className='btn-submit'>Save Item</button>
      </form>
    </>
  );
};

const mapStateToProps = ({template: {category, imageUrl, imageId, saveItemSuccess, itemData}}) => ({
  category, imageUrl, imageId, saveItemSuccess, oldItemData: itemData
})

export default connect(mapStateToProps, {loadTemplate, addItem, clearTemplateData, editItem})(withRouter(AddItem));