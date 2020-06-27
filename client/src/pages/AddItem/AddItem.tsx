import React, { FC } from 'react';
import PathLinks from '../../components/PathLinks'
import Spinner from '../../components/Spinner'
import CustomFields from './components/CustomFields';
import DefaultFields from './components/DefaultFields';

import { useItemTemplate } from './hooks/useItemTemplate'
import { useCustomData } from './hooks/useCustomData';
import { useSaveItemHandler } from './hooks/useSaveItemHandler';

import './add-item.scss'
 
export const AddItem: FC = () => {
  const { inputHandler, itemData, oldItemData, category } = useItemTemplate()
  const { customData, setCustomData } = useCustomData(oldItemData?.other)
  const { saveItemHandler } = useSaveItemHandler({customData, itemData, oldItemData})

    
  if(!category) return <Spinner />

  return (
    <>
      <div className='add-item-wrapper'>
        <PathLinks itemTitle={oldItemData?.title} action={oldItemData ? 'Edit' : 'Add Item'} />
      </div>
      <form className='add-item-form' onSubmit={saveItemHandler}>
        <DefaultFields
          title={category.name}
          brands={category.brands}
          setInputValues={inputHandler}
          inputValues={itemData} />
        <CustomFields
          inputValues={customData}
          setItemData={setCustomData}
          data={category} />
        <button type='submit' className='btn-submit'>Save Item</button>
      </form>
    </>
  );
};


export default AddItem;