import React, { useEffect } from 'react';
import './filters.scss'
import { connect } from 'react-redux';
import { getFilters} from 'src/redux/dataFetchSaga/actions'
import FilterField from '../FilterField';

export const Filter = ({getFilters, category, filters}) => {

  console.log(filters)

  useEffect(() => {
    getFilters(category)
    // eslint-disable-next-line
  }, [])
  
  if(!filters) return null
  const {minValue, maxValue, brands, fields} = filters
  return (
    <div className='filters'>
      <h3>Filter</h3>
      <p>Min value: {minValue}</p>
      <p>Max value: {maxValue}</p>
      <p><b>Brands</b></p>
      {brands.map(brand => <p key={brand}>{brand}</p>)}
      {fields.map(field => <FilterField key={field._id} data={field} />)}
      <button>Find</button>
    </div>
  );
};

const mapStateToProps = ({items: {filters}}) => ({
  filters
})

export default connect(mapStateToProps, {getFilters})(Filter);