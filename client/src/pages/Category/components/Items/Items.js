import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategory } from '../../../../redux/dataFetchSaga/actions'
import Spinner from '../../../../components/Spinner';
import ItemPreview from '../ItemPreview';
import useUserType from 'src/hooks/useUserType'

export const Items = ({header, history, getCategory, match, categoryData, userType}) => {

  console.log(userType)
  const {isAdmin} = useUserType(userType)

  useEffect(() => {
    getCategory(match.params.name)

    // eslint-disable-next-line
  }, [])

  if(!categoryData) return <Spinner />

  return (
    <>
      <h2>{header}</h2>
      {!categoryData.length && <p>Category is empty</p>}
      <div className='category-wrapper'>
        {categoryData.map(item => <ItemPreview key={item._id} itemData={item} />)}
        {isAdmin && <div className='preview-wrapper plus-wrapper' onClick={() => history.push({pathname: 'addItem/', state: header})}>
          <div className='add-item-plus'></div>
          Add new {header}
        </div>}
      </div>
    </>
  );
};

const mapStateToProps = ({items: {categoryData}, auth: {userType}}) => ({
  categoryData, userType
})

export default connect(mapStateToProps, {getCategory})(withRouter(Items));