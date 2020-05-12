import React, { useState, useEffect } from 'react';
import AddField from './components/AddField';
import { connect } from 'react-redux';
import { getFields } from '../../redux/templateConfigSaga/actions'
import Spinner from '../../components/Spinner';
import PathLinks from '../../components/PathLinks';
import { withRouter } from 'react-router-dom';
import { saveTemplate } from '../../redux/dataFetchSaga/actions'
import { saveTemplateRedirrect } from '../../redux/templateReducer/actions';

import './edit-category.scss'



export const EditCategory = ({getFields, fields, saveTemplate, noContent, match,
  location, saveSuccess, history, saveTemplateRedirrect}) => {

  const [addField, setAddField] = useState(false)
  const [selectedFields, setSelectedFields] = useState({})

  useEffect(() => {
    if(!saveSuccess) return
    const {name} = match.params
    history.push(`/catalog/${name}/addItem/`)

    return () => {
      saveTemplateRedirrect()
    }
    // eslint-disable-next-line
  }, [saveSuccess])

  const checkHandle = (e) => {
    const {id} = e.target
    setSelectedFields({
      ...selectedFields,
      [id]: !selectedFields[id]
    })
  }

  useEffect(() => {
    if(noContent) return

    //set checked inputs in table
    const data = fields.reduce((obj, field) => {
      return {
        ...obj,
        [field._id]: field.enable
      }}, {})

    setSelectedFields(data)

    // eslint-disable-next-line
  }, [noContent])

  useEffect(() => {
    if(!noContent) return
    setAddField(false)
    getFields(match.params.name)

  }, [getFields, noContent, match.params.name])

  if(noContent) return <Spinner />

  const saveHandler = () => {
    const fields = Object.entries(selectedFields)
      .filter(field => field[1])
      .map(field => field[0])
      
    saveTemplate({
      name: location.state,
      path: match.params.name,
      fields
    })
  }

  return (
    <div>
      EditCategory
      <PathLinks action='EditCategory' />
      <table>
        <tbody>
          {fields.map(({fieldName, _id: id, ...other}) => {
            if(addField === id) return <tr key={id}><AddField data={{fieldName, id, ...other}} showForm={addField === id} setShowForm={setAddField} /></tr>
            return (
              <tr key={id}>
                <td><label htmlFor={id}>{fieldName}</label></td>
                <td><input value='1' onChange={checkHandle} checked={!!selectedFields[id]} type='checkbox' id={id} /></td>
                <td><button className='config-btn' onClick={() => setAddField(id)}>Edit</button></td>
              </tr>
            )
          })}
          <tr>
            <AddField setShowForm={setAddField} showForm={addField === 'new'} />
          </tr>
        </tbody>
      </table>

      <button className='btn-submit' onClick={saveHandler}>Save</button>
    </div>
  );
};

const mapStateToProps = ({template: {fields, noContent, saveSuccess}}) => ({
  fields, noContent, saveSuccess
})

export default connect(mapStateToProps, { getFields, saveTemplate, saveTemplateRedirrect })(withRouter(EditCategory));