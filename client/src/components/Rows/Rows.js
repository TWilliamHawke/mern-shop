import React from 'react';
import ErrorBoundary from '../ErrorBoundary'
import './rows.scss'

const Rows = ({left, right}) => {
  return (
    <div className='row-wrapper'>
      <div className='row-left'>
        <ErrorBoundary>
          {left}
        </ErrorBoundary>
      </div>
      <div className='row-right'>
        <ErrorBoundary>
          {right}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Rows;