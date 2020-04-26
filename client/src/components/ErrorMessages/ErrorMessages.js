import React from 'react';
import './error-message.scss'


const ErrorMessages = ({errors = []}) => {
  return (
    <div>
      {errors.map(error => (
        <p className='error-message'>{error}</p>
      ))}
    </div>
  );
};

export default ErrorMessages;