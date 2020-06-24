import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { tfMeasure } from '../../../utils/textTransforms';

const CustomFields = ({history, data, imputValues, setItemData, oldItemData}) => {

  const gotoEditTemplate = (e) => {
    e.preventDefault()
    history.push({
      pathname: 'edit',
      state: data.name
    })
  }

  const changeHandler = e => {
    const {id, value} = e.target
    setItemData({
      ...imputValues,
      [id]: value
    })
  }

  console.log(oldItemData)
  useEffect(() => {
    const selectors = data.fields
    const vals = {}
    const oldData = {}
    if(Array.isArray(oldItemData)) {
      oldItemData.forEach(({field, value}) => {
        oldData[field._id] = value
      })
    }
    selectors.forEach(({_id: id, values}) => vals[id] = oldData[id] || values[0] || '')
    setItemData({
      ...imputValues,
      ...vals
    })
    // eslint-disable-next-line
  }, [data])

  return (
    <div className='custom-fields'>
      <span>Custom Fields</span>
      <button onClick={gotoEditTemplate} className='config-btn'>Edit template</button>
      {data.fields.map(({_id: id, fieldName, measure, type, values}) => {
        
        return(
          <div key={id} className='form-wrapper'>
            <label htmlFor={id} >{`${fieldName} ${tfMeasure(measure)}:`}</label>
            {type === 'selector' ? 
              <select onChange={changeHandler} value={imputValues[id] || values[0]} id={id}>
                {values.map((val, idx) => <option key={idx} value={val}>{val}</option>)}
              </select> :
              <input onChange={changeHandler} value={imputValues[id] || ''} id={id} type={type} />}
          </div>
        )
      })}
    </div>
  );
};

export default withRouter(CustomFields);