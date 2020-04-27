import React from 'react';
import './error-message.scss'


const ErrorMessages = ({errors = []}) => {

  if(!errors.length) return null
  
  return (
    <div className='error-message-list'>
      {errors.map(error => (
        <p className='error-message'>{error}</p>
      ))}
    </div>
  );
};

export default ErrorMessages;