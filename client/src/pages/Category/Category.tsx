import React, { FC } from 'react';
import PathLinks from '../../components/PathLinks/PathLinks';
import Rows from '../../components/Rows'
import Filter from './components/Filter/Filter';
import Items from './components/Items/Items';
import Spinner from '../../components/Spinner'

import './category.scss'
import { useCategories } from 'src/hooks/useCategories';
import { useCategoryData } from './hooks/useCategoryData';

const Category: FC = () => {
  const { catName } = useCategories()

  const {categoryData, filters, getCategory} = useCategoryData()


  if(!filters) return <Spinner />

  return (
    <div className='full-page'>
      <PathLinks />
      <Rows
        left={<Filter filters={filters} getCategory={getCategory} />}
        right={<Items header={catName} categoryData={categoryData} />}
       />
    </div>
  );
};

export default Category;