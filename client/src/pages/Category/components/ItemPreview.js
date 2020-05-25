import React from 'react';

const ItemPreview = ({itemData}) => {
  console.log(itemData)
  return (
    <div className='preview-wrapper'>
      <div className='preview-img-wrapper'>
        <img alt='fro good' src={itemData.image}></img>
      </div>
      {itemData.title}
      {itemData.price}
    </div>
  );
};

export default ItemPreview;