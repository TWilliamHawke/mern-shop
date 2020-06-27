import React, { ReactNode, FC } from 'react';
import ErrorBoundary from '../ErrorBoundary'
import './rows.scss'

type PropType = {
  left: ReactNode
  right: ReactNode
}

const Rows: FC<PropType> = ({left, right}) => {
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