import React, { FC, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { SingleField } from './SingleField'
import { CategoryTemplateType } from 'src/types/templateDataType';

type PropTypes = {
  data: CategoryTemplateType
  inputValues: Record<string, string>
  setItemData: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

const CustomFields: FC<PropTypes> = ({ data, inputValues, setItemData }) => {
  const history = useHistory()

  const gotoEditTemplate = (e: MouseEvent) => {
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