import { useSelector, useDispatch } from "react-redux"
import { AppState } from "src/redux/store"
import { TemplateStore } from "src/redux/templateReducer/templateReducer"
import { useEffect, useState, ChangeEvent } from "react"
import { useHistory, useParams, useLocation } from "react-router-dom"
import { ParamsType } from "src/types/hookTypes"
import { getFields, saveTemplate } from "src/redux/dataFetchSaga/actions"
import { clearTemplateData } from "src/redux/templateReducer/actions"
import { FieldType } from "src/types/templateDataType"

type UseEditCategoryType = {
  noContent: boolean
  saveHandler: () => void
  addField: boolean | string
  brands: string[]
  setBrands: (t: string[]) => void
  checkHandle: (e: ChangeEvent) => void
  fields: FieldType<string>[]
  setAddField: React.Dispatch<React.SetStateAction<boolean | string>>
  selectedFields: Record<string, boolean>
}

export const useEditCategory = (): UseEditCategoryType => {
  const [addField, setAddField] = useState<boolean | string>(false)
  const [selectedFields, setSelectedFields] = useState<Record<string, boolean>>({})
  const [brands, setBrands] = useState<string[]>([])
  const location = useLocation<string>()

  const history = useHistory()
  const dispatch = useDispatch()
  const params = useParams<ParamsType>()
  const {
    fields, noContent, saveSuccess, brands: loadedBrands
  } = useSelector<AppState, TemplateStore>(store => store.template)

  useEffect(() => {
    //after save template
    if(!saveSuccess) return
    const {name} = params
    history.push(`/catalog/${name}/addItem/`)

    // eslint-disable-next-line
  }, [saveSuccess])

  const checkHandle = (e: ChangeEvent) => {
    const {id} = e.target
    setSelectedFields(prev => ({
      ...prev,
      [id]: !selectedFields[id]
    }))
  }

  useEffect(() => {
    //if hasnt content - fetch content
    if(noContent) {
      setAddField(false)
      dispatch(getFields(params.name))
    } else {
      //set checked inputs in table
      const data = fields.reduce((obj, field) => ({
        ...obj,
        [field._id]: field.enable
      }), {})
      
      setSelectedFields(data)
      setBrands(loadedBrands)
    }

    // eslint-disable-next-line
  }, [noContent])

  useEffect(() => () => {
    dispatch(clearTemplateData())
  }, [dispatch])

  const saveHandler = () => {
    const fields = Object.entries(selectedFields)
    .filter(field => field[1])
    .map(field => field[0])

    const data = {
      name: location.state,
      path: params.name,
      fields,
      brands
    }
    
    dispatch(saveTemplate(data))
  }

  return {
    noContent,
    saveHandler,
    addField,
    brands,
    setBrands,
    checkHandle,
    fields,
    setAddField,
    selectedFields
  }


} 