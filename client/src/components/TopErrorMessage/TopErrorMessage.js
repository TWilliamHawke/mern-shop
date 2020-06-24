import React from 'react';
import './top-error-meeesge.scss'
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import { useHistory, useLocation } from 'react-router-dom'
import { useErrorsData } from 'src/hooks/useErrorsData';

 export const TopErrorMessage = () => {
   const history = useHistory()
   const {errors, clearErrors} = useErrorsData()
   const location = useLocation()

  if(!errors.length) return null

  const gotoHandler = () => {
    history.push('/')
    clearErrors()
  }

  return (
    <div className='top-error'>
      <ErrorMessages errors={errors} />
      <div className='button-wrapper'>
        <button onClick={clearErrors}>Close</button>
        {location?.pathname !== '/' && <button onClick={gotoHandler}>Go to Main page</button>}
      </div>
    </div>
  );
};


export default TopErrorMessage;