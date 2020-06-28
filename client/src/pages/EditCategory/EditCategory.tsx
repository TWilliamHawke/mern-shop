import React, { FC } from 'react';
import { AddField } from './components/AddField';
import Spinner from '../../components/Spinner';
import PathLinks from '../../components/PathLinks';
import { useLocation } from 'react-router-dom';
import Fields from './components/Fields'

import Values from './components/Values';
import { useEditCategory } from './hooks/useEditCategory';

import './edit-category.scss'


export const EditCategory: FC = () => {
  const location = useLocation()
  const {
    noContent,
    saveHandler,
    addField,
    brands,
    setBrands,
    checkHandle,
    fields,
    setAddField,
    selectedFields
  } = useEditCategory()

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
              <Values name='Brands' setValues={setBrands} values={brands} />
            </td>
          </tr>
          <Fields
            data={fields}
            addFieldId={addField}
            setAddField={setAddField}
            checkHandle={checkHandle}
            selectedFields={selectedFields} />
          <AddField
            setShowForm={setAddField}
            showForm={addField === 'new'} />
        </tbody>
      </table>

      <button className='btn-submit' onClick={saveHandler}>Save</button>
    </div>
  );
};


export default EditCategory;