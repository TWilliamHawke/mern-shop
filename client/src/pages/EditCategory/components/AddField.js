import React from 'react';
import { addField } from '../../../redux/templateConfigSaga/actions'
import { connect } from 'react-redux';

export const AddField = ({showForm, setShowForm, addField}) => {

  const submitHandler = e => {
    e.preventDefault()
    addField('someData')
    console.log('submit')
  }

  const cancelHandler = e => {
    e.preventDefault()
    setShowForm(false)
  }


  if(!showForm) return <button onClick={() => setShowForm(true)} className='config-btn'>Add field</button>

  return (
    <form className='auth-form' onSubmit={submitHandler}>
      <fieldset>
        <label htmlFor='add-field-name'>Field Name:</label>
        <input id='add-field-name' />
      </fieldset>
      <fieldset>
        <label htmlFor='add-measure'>Unit of measure:</label>
        <input id='add-measure' />
      </fieldset>
      <fieldset>
        <label htmlFor='add-type'>Type:</label>
        <select id='add-type'>
          <option value='number'>Number</option>
          <option value='text'>Text</option>
        </select>
      </fieldset>
      <button type="submit">Confirm</button>
      <button onClick={cancelHandler} >Cancel</button>
    </form>
  );
};

const mapDispathtoProps = {
  addField
}

export default connect(null, mapDispathtoProps)(AddField);