import React, { FC } from 'react';
import MainPreview from './MainPreview';
import { usePopularData } from '../hooks/usePopularData';

export const MainContent: FC = () => {

  const { popular } = usePopularData()

  return (
    <div>
      <h2>Most popular</h2>
      <div className="main-popular-wrapper">
        {popular.map(item => {
          return <MainPreview key={item._id} data={item} />
        })}

      </div>
    </div>
  );
};

export default MainContent;