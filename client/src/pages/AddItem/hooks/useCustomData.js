import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

export const useCustomData = (oldItemData) => {
  const [customData, setCustomData] = useState({})
  const {category} = useSelector(store => store.template)
  
  useEffect(() => {
    if(!category) return
    const selectors = category.fields
    const vals = {}
    const oldData = {}
    if(Array.isArray(oldItemData)) {
      oldItemData.forEach(({field, value}) => {
        oldData[field._id] = value
      })
    }
    selectors.forEach(({_id: id, values}) => vals[id] = oldData[id] || values[0] || '')
    setCustomData(prev => ({
      ...prev,
      ...vals
    }))
    // eslint-disable-next-line
  }, [category])


  return { customData, setCustomData }

}