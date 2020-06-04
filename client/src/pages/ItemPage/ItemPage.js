import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks';
import { connect } from 'react-redux';
import {getItem, addToCart, addPopular, removePoupular} from '../../redux/dataFetchSaga/actions'
import { clearItemData } from '../../redux/itemReducer/actions'
import Spinner from '../../components/Spinner'
import useUserType from '../../hooks/useUserType'
import ItemInfo from './components/ItemInfo'
import './item-page.scss'
import convertPrice from '../../utils/convertPrice';

export const ItemPage = ({match, getItem, itemData, history, userType, addToCart, loading, addPopular, removePoupular, clearItemData}) => {

  // const catName = categories[match?.params.name]
  const {isAdmin, isGuest} = useUserType(userType)
  

  useEffect(() => {
    getItem(match?.params.item)

    // eslint-disable-next-line
  }, [match?.params.item])

  useEffect(() => () => clearItemData(), [clearItemData])

  const gotoEditItem = () => {
    history.push({
      pathname: 'edit',
      state: itemData
    })
  }

  const addToCartHandler = () => {
    if(isGuest) return history.push('/login')
    if(loading) return
    addToCart(itemData._id)
  }

  const popularHandler = () => {
    if(loading) return
    const id = itemData._id.toString()
    if(!popular) return addPopular(id)
    return removePoupular(id)
  }

  if(!itemData) return <Spinner />

  const {title, image, price, other, popular} = itemData
  const convPrice = convertPrice(price)

  return (
    <div className='full-page'>
      <PathLinks itemTitle={title} />
      
      <div className='item-data'>
        <div className='item-data-image'>
          <img src={image} alt='' />
        </div>
        <div className='item-data-info'>
          <h1>{title}</h1>
          <ItemInfo data={other} />
          <p className='item-data-price'>{convPrice}</p>
          {isAdmin ?
          <button onClick={gotoEditItem} className='config-btn btn-blue'>Edit</button> :
          <button onClick={addToCartHandler} disabled={loading} className='config-btn'>Add to Cart</button>}
          {isAdmin && !popular && <button onClick={popularHandler} disabled={loading} className='config-btn btn-blue item-data-btn'>Add to Popular</button>}
          {isAdmin && popular && <button onClick={popularHandler} disabled={loading} className='config-btn btn-blue item-data-btn'>Remove Popular</button>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({items: {itemData}, auth: {userType}, global: {loading}}) => ({
  itemData, userType, loading
})

export default connect(mapStateToProps, {getItem, addToCart, addPopular, removePoupular, clearItemData})(withRouter(ItemPage));