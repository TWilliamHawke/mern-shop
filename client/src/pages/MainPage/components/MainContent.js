import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPopular } from '../../../redux/dataFetchSaga/actions'
import MainPreview from './MainPreview';

export const MainContent = ({getPopular, popular}) => {
  useEffect(() => {
    getPopular()

    // eslint-disable-next-line
  }, [])

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

const mapStateToProps = ({global: {popular}}) => ({
  popular
})

export default connect(mapStateToProps, {getPopular})(MainContent);