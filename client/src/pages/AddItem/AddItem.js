import React from 'react';
import { withRouter } from 'react-router-dom';

export const AddItem = ({history, location}) => {
  const {state} = location
  console.log(history, location)
  return (
    <div>
      AddItem
      category: {state}
      <button onClick={() => history.push('edit')} className='config-btn'>Edit template</button>
    </div>
  );
};

export default withRouter(AddItem);