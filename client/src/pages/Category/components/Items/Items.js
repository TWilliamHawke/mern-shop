import React from 'react';
import { useHistory } from 'react-router-dom';
//import Spinner from 'src/components/Spinner';
import ItemPreview from '../ItemPreview';
import useUserType from 'src/hooks/useUserType'

export const Items = ({ header, categoryData }) => {
  const history = useHistory()
  const { isAdmin } = useUserType()

  return (
    <>
      <h2>{header}</h2>
      {!categoryData.length && <p>Category is empty</p>}
      <div className='category-wrapper'>
        {categoryData.map(item => <ItemPreview key={item._id} itemData={item} />)}
        {isAdmin && <div className='preview-wrapper plus-wrapper' onClick={() => history.push({pathname: 'addItem/', state: header})}>
          <div className='add-item-plus'></div>
          Add new {header}
        </div>}
      </div>
    </>
  );
};

export default Items;