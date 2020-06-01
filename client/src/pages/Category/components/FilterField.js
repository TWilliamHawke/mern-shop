import React from 'react';

const FilterField = ({data}) => {
  console.log(data)
  return (
    <>
      <b>{data.fieldName}</b>
      {data.values.sort((a, b) => a-b).map(({value, id}) => <p key={id}>{value}</p>)}
    </>
  );
};

export default FilterField;