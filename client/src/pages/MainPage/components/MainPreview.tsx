import React, { FC } from 'react';
import convertPrice from 'src/utils/convertPrice'
import './mainPreview.scss'
import { Link } from 'react-router-dom'
import { ItemDataType } from 'src/types/itemsDataType';

type PropTypes = {
  data: ItemDataType
}

const MainPreview: FC<PropTypes> = ({ data }) => {

  const price = convertPrice(data.price)
  return (
    <Link to={`catalog/${data.catName}/${data._id}/`}>
      <div className='main-preview'>
        <div className='main-preview-img'>
          <img src={data.image} alt={data.title} />
        </div>
        <p className='main-preview-title'>{data.title}</p>
        <p className='main-preview-price'>{price}</p>
      </div>
    </Link>
  );
};

export default MainPreview;