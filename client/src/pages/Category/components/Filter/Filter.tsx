import React, { useState, FC, ChangeEvent } from 'react';
import './filters.scss'
import FilterField from '../FilterField';
import { FiltersType } from 'src/types/itemsDataType';
import { TfFilterToStringInput, CheckedFiltersType } from 'src/types/actionHelpersTypes';

type PropTypes = {
  filters: FiltersType
  getCategory: (d: TfFilterToStringInput) => void
}

export const Filter: FC<PropTypes> = ({filters, getCategory}) => {
  const [checkedFilters, setCheckedFilters] = useState<CheckedFiltersType>({})
  const [minmaxValue, setMinMaxValue] = useState({min: '', max: ''})
  const [checkedBrands, setCheckedBrands] = useState<Record<string, boolean>>({})

  const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    const value = e.target.dataset.value || ''
    setMinMaxValue(oldValue => ({
      ...oldValue,
      [value]: e.target.value
    }))
  }

  const brandsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedBrands(oldData => ({
      ...oldData,
      [e.target.id]: e.target.checked
    }))
  }

  const applyFilters = () => {
    const data: TfFilterToStringInput = {
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

  const brandsJSX = brands.map(brand => <p key={brand}>
    <input value='1' onChange={brandsHandler} checked={!!checkedBrands[brand]} type='checkbox' id={brand} />
    <label htmlFor={brand}>{brand}</label>
  </p>)

  const fieldsJSX = fields.map(field => (
    <FilterField
      key={field._id}
      data={field}
      selected={checkedFilters}
      handler={setCheckedFilters} />
  ))

  return (
    <div className='filters'>
      <h3>Filter</h3>
      <p>
        Min value:
        <input type='number'
          data-value='min'
          onChange={minValueHandler}
          value={minmaxValue.min}
          placeholder={minValue} />
      </p>
      <p>Max value:
        <input type='number'
          data-value='max'
          onChange={minValueHandler}
          value={minmaxValue.max}
          placeholder={maxValue} />
      </p>
      <h5>Brands</h5>
      {brandsJSX}
      {fieldsJSX}
      <button onClick={applyFilters}>Find</button>
    </div>
  );
};

// const mapStateToProps = ({items: {filters}}) => ({
//   filters
// })

export default Filter;