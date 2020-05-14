import React from 'react';
import './top-error-meeesge.scss'
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import { connect } from 'react-redux';
import { clearGlobalErrors } from '../../redux/globalReducer/actions'
import { withRouter } from 'react-router-dom'

 export const TopErrorMessage = ({errors = [], clearGlobalErrors, location, history}) => {

  if(!errors.length) return null

  const gotoHandler = () => {
    history.push('/')
    clearGlobalErrors()
  }

  return (
    <div className='top-error'>
      <ErrorMessages errors={errors} />
      <div className='button-wrapper'>
        <button onClick={clearGlobalErrors}>Close</button>
        {location?.pathname !== '/' && <button onClick={gotoHandler}>Go to Main page</button>}
      </div>
    </div>
  );
};


const mapStateToProps = ({global: {errors}}) => ({
  errors
})

export default connect(mapStateToProps, {clearGlobalErrors})(withRouter(TopErrorMessage));