import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PathLinks from '../../components/PathLinks';
import { connect } from 'react-redux';
import {getItem} from '../../redux/dataFetchSaga/actions'
import Spinner from '../../components/Spinner'

const ItemPage = ({match, getItem, itemData}) => {

  useEffect(() => {
    getItem(match.params.item)
    // eslint-disable-next-line
  }, [match.params.item])

  if(!itemData) return <Spinner />

  console.log(itemData)
  return (
    <div className='full-page'>
      <PathLinks action={itemData.title} />
      <h1>{itemData.title}</h1>
      <img src={itemData.image} alt='' />
      ItemPage
    </div>
  );
};

const mapStateToProps = ({items: {itemData}}) => ({
  itemData
})

export default connect(mapStateToProps, {getItem})(withRouter(ItemPage));