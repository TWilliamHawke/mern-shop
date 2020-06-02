import React, { useState } from 'react';
import './filters.scss'
import { connect } from 'react-redux';
import { getCategory } from 'src/redux/dataFetchSaga/actions'
import FilterField from '../FilterField';

export const Filter = ({filters, getCategory}) => {
  const [checkedFilters, setCheckedFilters] = useState({})
  const [minmaxValue, setMinMaxValue] = useState({min: '', max: ''})
  const [checkedBrands, setCheckedBrands] = useState({})

  const minValueHandler = e => {
    setMinMaxValue({
      ...minmaxValue,
      [e.target.dataset.value]: e.target.value
    })
  }

  const brandsHandler = e => {
    setCheckedBrands({
      ...checkedBrands,
      [e.target.id]: e.target.checked
    })
  }

  const applyFilters = () => {
    const data = {
      cat: filters._id,
      min: minmaxValue.min || minValue,
      max: minmaxValue.max || maxValue,
      checkedBrands,
      checkedFilters,
    }
    getCategory(data)
  }
  
  if(!filters) return null
  const {minValue, maxValue, brands, fields} = filters
  return (
    <div className='filters'>
      <h3>Filter</h3>
      <p>Min value: <input type='number' data-value='min' onChange={minValueHandler} value={minmaxValue.min} placeholder={minValue} /></p>
      <p>Max value: <input type='number' data-value='max' onChange={minValueHandler} value={minmaxValue.max}  placeholder={maxValue} /></p>
      <h5>Brands</h5>
      {brands.map(brand => <p key={brand}>
        <input value='1' onChange={brandsHandler} checked={!!checkedBrands[brand]} type='checkbox' id={brand} />
        <label htmlFor={brand}>{brand}</label>
      </p>)}
      {fields.map(field => <FilterField key={field._id} data={field} selected={checkedFilters} handler={setCheckedFilters} />)}
      <button onClick={applyFilters}>Find</button>
    </div>
  );
};

// const mapStateToProps = ({items: {filters}}) => ({
//   filters
// })

export default connect(null, {getCategory})(Filter);