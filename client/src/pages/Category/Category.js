import React from 'react';
import { useParams } from 'react-router-dom';
import PathLinks from '../../components/PathLinks/PathLinks';
import Rows from '../../components/Rows'
import Filter from './components/Filter/Filter';
import Items from './components/Items/Items';

import './category.scss'
import { connect } from 'react-redux';

const Category = ({categories}) => {
  const {name} = useParams()
  const header = categories[name]

  return (
    <div className='full-page'>
      <PathLinks />
      <Rows
        left={<Filter />}
        right={<Items header={header} />}
       />
    </div>
  );
};

const mapStateToProps = ({global: {categories}}) => ({
  categories
})

export default connect(mapStateToProps)(Category);