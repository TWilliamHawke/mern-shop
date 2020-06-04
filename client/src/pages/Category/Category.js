import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PathLinks from '../../components/PathLinks/PathLinks';
import Rows from '../../components/Rows'
import Filter from './components/Filter/Filter';
import Items from './components/Items/Items';
import { getFilters } from '../../redux/dataFetchSaga/actions'
import { clearFilters } from '../../redux/itemReducer/actions'
import Spinner from '../../components/Spinner'

import './category.scss'
import { connect } from 'react-redux';

const Category = ({categories, categoryData, filters, getFilters, clearFilters}) => {
  const {name} = useParams()
  const header = categories[name]

  useEffect(() => {
    getFilters(name)
  }, [getFilters, name])

  useEffect(() => () => clearFilters(), [clearFilters])

  if(!filters) return <Spinner />

  return (
    <div className='full-page'>
      <PathLinks />
      <Rows
        left={<Filter filters={filters} />}
        right={<Items header={header} categoryData={categoryData} />}
       />
    </div>
  );
};

const mapStateToProps = ({global: {categories}, items: {categoryData, filters}}) => ({
  categories, categoryData, filters
})

export default connect(mapStateToProps, {getFilters, clearFilters})(Category);