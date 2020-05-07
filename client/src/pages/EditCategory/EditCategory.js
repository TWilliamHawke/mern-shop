import React, { useState, useEffect } from 'react';
import AddField from './components/AddField';
import { connect } from 'react-redux';
import { getFields } from '../../redux/templateConfigSaga/actions'
import Spinner from '../../components/Spinner';
import PathLinks from '../../components/PathLinks';

export const EditCategory = ({getFields, fields, noContent}) => {
  const [addField, setAddField] = useState(false)
  const [selectedFields, setSelectedFields] = useState({})

  const checkHandle = (e) => {
    const {id} = e.target
    setSelectedFields({
      ...selectedFields,
      [id]: !selectedFields[id]
    })
  }
  
  useEffect(() => {
    getFields()
    console.log(fields)
    // eslint-disable-next-line
  }, [getFields])

  if(noContent) return <Spinner />

  return (
    <div>
      EditCategory
      <PathLinks />
      {fields.map(({fieldName, _id: id}) => {
        if(addField === id) return <AddField key={id} />
        return (
          <fieldset key={id}>
            <label htmlFor={id}>{fieldName}</label>
            <input value='1' onChange={checkHandle} checked={!!selectedFields[id]} type='checkbox' id={id} />
            <button onClick={() => setAddField(id)}>Edit</button>
          </fieldset>
        )
      })}

      <AddField setShowForm={setAddField} showForm={addField} />
      <button>Save</button>
    </div>
  );
};

const mapStateToProps = ({template: {fields, noContent}}) => ({
  fields, noContent
})

export default connect(mapStateToProps, { getFields })(EditCategory);