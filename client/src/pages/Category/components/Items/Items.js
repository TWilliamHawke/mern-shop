import React from 'react';
import { useHistory } from 'react-router-dom';


const Items = ({header}) => {
  const history = useHistory()
  return (
    <div>
      <h2>{header}</h2>
      <button onClick={() => history.push({pathname: 'addItem/', state: header})}>Add item </button>
    </div>
  );
};

export default Items;