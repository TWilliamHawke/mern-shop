import React from 'react';
import { withRouter } from 'react-router-dom';
import convertPrice from '../../../utils/convertPrice';

const ItemPreview = ({itemData, history}) => {

  const gotoItem = () => {
    history.push({pathname: `${itemData._id}/`, state: itemData.title})
  }

  const {image, price, title} = itemData

  const convPrice = convertPrice(price)

  return (
    <div onClick={gotoItem} className='preview-wrapper'>
      <div className='preview-img-wrapper'>
        <img alt='fro good' src={image}></img>
      </div>
      <p className='preview-title'>{title}</p>
      <p className='preview-price'>{convPrice}</p>
    </div>
  );
};

export default withRouter(ItemPreview);