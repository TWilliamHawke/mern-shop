import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import convertPrice from '../../../utils/convertPrice';
import { ItemDataType } from 'src/types/itemsDataType';

type PropTypes = {
  itemData: ItemDataType
}

const ItemPreview: FC<PropTypes> = ({itemData}) => {

  const {image, price, title} = itemData

  const convPrice = convertPrice(price)

  return (
    <Link to={{pathname: `/catalog/${itemData.catName}/${itemData._id}/`, state: itemData.title}} >
      <div className='preview-wrapper'>
        <div className='preview-img-wrapper'>
          <img alt='fro good' src={image}></img>
        </div>
        <p className='preview-title'>{title}</p>
        <p className='preview-price'>{convPrice}</p>
      </div>
    </Link>
  );
};

export default ItemPreview;