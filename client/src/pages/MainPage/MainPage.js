import React from 'react';
import Rows from '../../components/Rows/Rows';
import Categories from './components/Categories/Categories';

const MainPage = () => {
  return (
    <div className='full-page'>
      <Rows left={<Categories />} right='content' />
    </div>
  );
};

export default MainPage;