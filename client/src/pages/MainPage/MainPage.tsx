import React, { FC } from 'react';
import Rows from '../../components/Rows/Rows';
import Categories from './components/Categories/Categories';
import MainContent from './components/MainContent';

const MainPage: FC = () => {
  return (
    <div className='full-page'>
      <Rows left={<Categories />} right={<MainContent />} />
    </div>
  );
};

export default MainPage;