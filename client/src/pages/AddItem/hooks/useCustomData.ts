import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { AppState } from "src/redux/store"
import { TemplateStore } from "src/redux/templateReducer/templateReducer"
import { FieldData } from "src/types/templateDataType"

type UseCustomDataType = {
  customData: {[key: string]: string}
  setCustomData: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

export const useCustomData = (oldItemData: FieldData[] | undefined): UseCustomDataType => {
  const [customData, setCustomData] = useState({})
  const {category} = useSelector<AppState, TemplateStore>(store => store.template)
  
  useEffect(() => { //fill custom fields if we edit item
    if(!category) return
    const selectors = category.fields
    const vals: {[key: string]: string} = {}
    const oldData: {[key: string]: string} = {}

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