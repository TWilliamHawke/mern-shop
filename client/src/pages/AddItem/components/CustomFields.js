import React from 'react';
import { withRouter } from 'react-router-dom';

const CustomFields = ({history, data, values, changeHandler}) => {

  const gotoEditTemplate = (e) => {
    e.preventDefault()
    history.push({
      pathname: 'edit',
      state: data.name
    })
  }

  console.log(data)

  return (
    <div>
      <span>Custom Fields</span>
      <button onClick={gotoEditTemplate} className='config-btn'>Edit template</button>
      {data.fields.map(({_id: id, fieldName, measure, type}) => {
        return(
          <div key={id} className='form-wrapper'>
            <label htmlFor={id} >{`${fieldName}(${measure}):`}</label>
            <input onChange={changeHandler} value={values[id] || ''} id={id} type={type} />
          </div>
        )
      })}
    </div>
  );
};

export default withRouter(CustomFields);