import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import Spinner from 'src/components/Spinner';
import ItemPreview from '../ItemPreview';
import useUserType from 'src/hooks/useUserType'

export const Items = ({header, history, categoryData, userType}) => {

  const {isAdmin} = useUserType(userType)

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

const mapStateToProps = ({auth: {userType}}) => ({
  userType
})

export default connect(mapStateToProps)(withRouter(Items));