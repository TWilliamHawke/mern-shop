import React, { useState, useEffect } from 'react';
import AddField from './components/AddField';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner';
import PathLinks from '../../components/PathLinks';
import { withRouter } from 'react-router-dom';
import { saveTemplate, getFields } from '../../redux/dataFetchSaga/actions'
import { saveTemplateRedirrect, clearTemplateData } from '../../redux/templateReducer/actions';
import Fields from './components/Fields'

import './edit-category.scss'



export const EditCategory = ({ getFields, fields, saveTemplate, noContent, match,
  location, saveSuccess, history, clearTemplateData }) => {

  const [addField, setAddField] = useState(false)
  const [selectedFields, setSelectedFields] = useState({})

  useEffect(() => {
    if(!saveSuccess) return
    const {name} = match.params
    history.push(`/catalog/${name}/addItem/`)

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
    if(noContent) {
      setAddField(false)
      getFields(match.params.name)  
    } else {
      //set checked inputs in table
      const data = fields.reduce((obj, field) => ({
        ...obj,
        [field._id]: field.enable
      }), {})
  
      setSelectedFields(data)
    }

    // eslint-disable-next-line
  }, [noContent])

  useEffect(() => () => clearTemplateData(), [clearTemplateData])

  
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


  if(noContent) return <Spinner />
  
  return (
    <div className='full-page'>
      <PathLinks action='EditCategory' />
      EditCategory
      <h2>{location?.state}</h2>
      <table>
        <tbody>
          <tr>
            <td colSpan={3}>
              <p>Possible Companies:</p>
              <div className='form-wrapper'>
                <label htmlFor='add-comp'>Add company</label>
                <div>
                  <input id='add-comp' />
                  <button>add</button>
                </div>
              </div>
            </td>
          </tr>
          <Fields data={fields} addFieldId={addField} setAddField={setAddField} checkHandle={checkHandle} selectedFields={selectedFields} />
          <AddField setShowForm={setAddField} showForm={addField === 'new'} />
        </tbody>
      </table>

      <button className='btn-submit' onClick={saveHandler}>Save</button>
    </div>
  );
};

const mapStateToProps = ({template: {fields, noContent, saveSuccess}}) => ({
  fields, noContent, saveSuccess
})

export default connect(mapStateToProps, { getFields, saveTemplate, saveTemplateRedirrect, clearTemplateData })(withRouter(EditCategory));