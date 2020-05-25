import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategory } from '../../../../redux/dataFetchSaga/actions'
import Spinner from '../../../../components/Spinner';
import ItemPreview from '../ItemPreview';

export const Items = ({header, history, getCategory, match, categoryData}) => {

  useEffect(() => {
    getCategory(match.params.name)

    // eslint-disable-next-line
  }, [])

  if(!categoryData) return <Spinner />

  return (
    <>
      <h2>{header}</h2>
      <div  className='catagory-wrapper'>
        {categoryData.map(item => <ItemPreview key={item._id} itemData={item} />)}
        <div className='preview-wrapper plus-wrapper' onClick={() => history.push({pathname: 'addItem/', state: header})}>
          <div className='add-item-plus'></div>
          Add new {header}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({items: {categoryData}}) => ({
  categoryData
})

export default connect(mapStateToProps, {getCategory})(withRouter(Items));