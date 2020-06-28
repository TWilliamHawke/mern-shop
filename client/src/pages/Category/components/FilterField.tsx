import React, { FC, ChangeEvent } from 'react';
import { tfMeasure } from '../../../utils/textTransforms';
import { FiltersFieldType } from 'src/types/itemsDataType';
import { CheckedFiltersType } from 'src/types/actionHelpersTypes';

type PropTypes = {
  data: FiltersFieldType
  selected: CheckedFiltersType
  handler: (a: CheckedFiltersType) => void
}

const FilterField: FC<PropTypes> = ({data, selected, handler}) => {

  const filterhandler = (e: ChangeEvent<HTMLInputElement>) => {
    handler({
      ...selected,
      [data.fieldName]: {
        ...selected[data.fieldName],
        [e.target.id]: e.target.checked
      }
    })
  }

  return (
    <>
      <h5>{data.fieldName}{tfMeasure(data.measure)}</h5>
      {data.values.sort((a, b) => +a.value- +b.value).map(({value, id}) => 
        <p key={id}>
          <input value='1' onChange={filterhandler} checked={!!selected?.[data.fieldName]?.[id]} type='checkbox' id={id} />
          <label htmlFor={id}>
            {value}
          </label>
        </p>    
        )}
    </>
  );
};

export default FilterField;