import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemPreview = ({itemData, history}) => {

  const gotoItem = () => {
    history.push({pathname: `${itemData._id}`, state: itemData.title})
  }

  console.log(itemData)
  return (
    <div onClick={gotoItem} className='preview-wrapper'>
      <div className='preview-img-wrapper'>
        <img alt='fro good' src={itemData.image}></img>
      </div>
      <p>{itemData.title}</p>
      <p>{itemData.price}</p>
    </div>
  );
};

export default withRouter(ItemPreview);