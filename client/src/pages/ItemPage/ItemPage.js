import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks';
import { connect } from 'react-redux';
import {getItem} from '../../redux/dataFetchSaga/actions'
import Spinner from '../../components/Spinner'
import useUserType from '../../hooks/useUserType'
import ItemInfo from './components/ItemInfo'
import './item-page.scss'
import convertPrice from '../../utils/convertPrice';

export const ItemPage = ({match, getItem, itemData, history, userType}) => {

  // const catName = categories[match?.params.name]
  const {isAdmin} = useUserType(userType)
  

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
          <button className='config-btn'>Add to Cart</button>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({items: {itemData}, auth: {userType}}) => ({
  itemData, userType
})

export default connect(mapStateToProps, {getItem})(withRouter(ItemPage));