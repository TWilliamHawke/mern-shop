import React, { useEffect } from 'react';
import PathLinks from '../../components/PathLinks/PathLinks';
import Rows from '../../components/Rows'
import Filter from './components/Filter/Filter';
import Items from './components/Items/Items';
import { getFilters } from '../../redux/dataFetchSaga/actions'
import { clearFilters } from '../../redux/itemReducer/actions'
import Spinner from '../../components/Spinner'

import './category.scss'
import { connect } from 'react-redux';
import { useCategories } from 'src/hooks/useCategories';

const Category = ({ categoryData, filters, getFilters, clearFilters }) => {
  const { catName, params } = useCategories()
  const { name } = params

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
        right={<Items header={catName} categoryData={categoryData} />}
       />
    </div>
  );
};

const mapStateToProps = ({items: {categoryData, filters}}) => ({
  categoryData, filters
})

export default connect(mapStateToProps, {getFilters, clearFilters})(Category);