import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks';
import { connect } from 'react-redux';
import {getItem, addToCart} from '../../redux/dataFetchSaga/actions'
import Spinner from '../../components/Spinner'
import useUserType from '../../hooks/useUserType'
import ItemInfo from './components/ItemInfo'
import './item-page.scss'
import convertPrice from '../../utils/convertPrice';

export const ItemPage = ({match, getItem, itemData, history, userType, addToCart, loading}) => {

  // const catName = categories[match?.params.name]
  const {isAdmin, isGuest} = useUserType(userType)
  

  useEffect(() => {
    getItem(match?.params.item)
    // eslint-disable-next-line
  }, [match?.params.item])

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

  if(!itemData) return <Spinner />

  const {title, image, price, other} = itemData
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
          <button onClick={gotoEditItem} className='config-btn'>Edit</button> :
          <button onClick={addToCartHandler} disabled={loading} className='config-btn'>Add to Cart</button>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({items: {itemData}, auth: {userType}, global: {loading}}) => ({
  itemData, userType, loading
})

export default connect(mapStateToProps, {getItem, addToCart})(withRouter(ItemPage));