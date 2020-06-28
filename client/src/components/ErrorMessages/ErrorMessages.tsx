import React, { FC } from 'react';
import './error-message.scss'
import { ErrorOutputType } from 'src/types/authDataTypes';

type PropType = {
  errors: ErrorOutputType
}

export const ErrorMessages: FC<PropType> = ({errors = []}) => {

  if(!errors.length) return null
  
  return (
    <div className='error-message-list'>
      {errors.map((error, idx) => (
        <p key={idx} className='error-message'>{error}</p>
      ))}
    </div>
  );
};

export default ErrorMessages;