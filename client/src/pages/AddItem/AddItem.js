import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks'
import { connect } from 'react-redux'
import { loadTemplate, addItem } from '../../redux/dataFetchSaga/actions'
import Spinner from '../../components/Spinner'
import CustomFields from './components/CustomFields';
import DefaultFields from './components/DefaultFields';
import { clearTemplateData } from '../../redux/templateReducer/actions';

import './add-item.scss'
 
export const AddItem = ({loadTemplate, match, category, imageUrl, imageId, addItem, saveItemSuccess, history, clearTemplateData}) => {
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
    setItemData({
      ...itemData,
      brand: category.brands[0]
    })
    // eslint-disable-next-line
  }, [category, setItemData])

  useEffect(() => {
    loadTemplate(match.params.name)
    console.log(11)
    return () => clearTemplateData()

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
      category: category._id,
      other: customData
    }
    addItem(data)
  }

  if(!category) return <Spinner />

  return (
    <>
      <PathLinks action='Add Item' />
      <form className='add-item-form' onSubmit={saveItemHandler}>
        <DefaultFields title={category.name} brands={category.brands} setInputValues={inputHandler} inputValues={itemData} />
        <CustomFields imputValues={customData} setItemData={setCustomData} data={category} />
        <button type='submit' className='btn-submit'>Save Item</button>
      </form>
    </>
  );
};

const mapStateToProps = ({template: {category, imageUrl, imageId, saveItemSuccess}}) => ({
  category, imageUrl, imageId, saveItemSuccess
})

export default connect(mapStateToProps, {loadTemplate, addItem, clearTemplateData})(withRouter(AddItem));