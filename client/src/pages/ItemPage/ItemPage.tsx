import React, { FC } from 'react';
import PathLinks from '../../components/PathLinks';
import Spinner from '../../components/Spinner'
import ItemInfo from './components/ItemInfo'
import './item-page.scss'
import convertPrice from '../../utils/convertPrice';
import { useItemData } from './hooks/useItemData';

export const ItemPage: FC = () => {

  const {
    addToCartHandler,
    gotoEditItem,
    isAdmin,
    itemData,
    popularHandler,
    loading
  } = useItemData()

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

export default ItemPage;