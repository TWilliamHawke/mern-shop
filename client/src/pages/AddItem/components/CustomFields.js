import React from 'react';
import { useHistory } from 'react-router-dom';
import { SingleField } from './SingleField'

const CustomFields = ({ data, inputValues, setItemData }) => {
  const history = useHistory()

  const gotoEditTemplate = (e) => {
    e.preventDefault()
    history.push({
      pathname: 'edit',
      state: data.name
    })
  }

  return (
    <div className='custom-fields'>
      <span>Custom Fields</span>
      <button onClick={gotoEditTemplate} className='config-btn'>Edit template</button>
      {data.fields.map(({_id: id, ...other}) => 
      <SingleField
        key={id} id={id}
        fieldData={other}
        inputValues={inputValues}
        setInputValues={setItemData} />
      )}
    </div>
  );
};

export default CustomFields;