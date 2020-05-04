import React from 'react';
import Rows from '../../components/Rows/Rows';
import Categories from './components/Categories/Categories';

const MainPage = () => {
  return (
    <Rows left={<Categories />} right='content' />
  );
};

export default MainPage;