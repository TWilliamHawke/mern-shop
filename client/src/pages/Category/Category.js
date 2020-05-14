import React from 'react';
import { useLocation } from 'react-router-dom';
import PathLinks from '../../components/PathLinks/PathLinks';
import Rows from '../../components/Rows'
import Filter from './components/Filter/Filter';
import Items from './components/Items/Items';

const Category = () => {
  const {state} = useLocation()
  return (

    <div className='full-page'>
      <PathLinks />
      <Rows
        left={<Filter />}
        right={<Items header={state} />}
       />
    </div>
  );
};

export default Category;