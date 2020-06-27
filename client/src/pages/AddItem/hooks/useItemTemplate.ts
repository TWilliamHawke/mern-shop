import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState, ChangeEvent } from "react"
import { loadTemplate } from 'src/redux/dataFetchSaga/actions'
import { clearTemplateData } from 'src/redux/templateReducer/actions';
import { AppState } from "src/redux/store";
import { TemplateStore } from "src/redux/templateReducer/templateReducer";
import { ParamsType } from "src/types/hookTypes";
import { ItemDataType } from "src/types/itemsDataType";
import { CategoryTemplateType } from "src/types/templateDataType";

export type LocalItemData = {
  itemTitle: string;
  itemPrice: string | number;
  itemDiscount: string | number;
  brand?: string
}

export type InputHandlerType = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void

type UseItemTemplateType = {
  itemData: LocalItemData,
  oldItemData: ItemDataType | null,
  inputHandler: InputHandlerType,
  category: CategoryTemplateType | null
}


export const useItemTemplate = (): UseItemTemplateType => {
  const {
    category, saveItemSuccess, itemData: oldItemData
  } = useSelector<AppState, TemplateStore>(state => state.template)
  const dispatch = useDispatch()
  const history = useHistory()
  const params = useParams<ParamsType>()

  const [itemData, setItemData] = useState<LocalItemData>({
    itemTitle: '',
    itemPrice: '',
    itemDiscount: '',
  })

  useEffect(() => {
    if(!category) return
    if(!oldItemData) return setItemData({
      ...itemData,
      brand: category.brands[0]
    })
    const {title, price, discountPrice, brand} = oldItemData

    setItemData({
      itemTitle: title,
      itemPrice: price,
      itemDiscount: discountPrice,
      brand,
    })

    // eslint-disable-next-line
  }, [category, oldItemData])

  useEffect(() => {
    const payload = {cat: params.name, item: params.item}
    dispatch(loadTemplate(payload))
    return () => {
      dispatch(clearTemplateData())
    }
    // eslint-disable-next-line
  }, [params.name, dispatch])

  useEffect(() => {
    if(!saveItemSuccess) return
    history.push(`/catalog/${params.name}/`)
    // eslint-disable-next-line
  }, [saveItemSuccess])

  const inputHandler: InputHandlerType = (e) => {
    const {id, value} = e.target
    setItemData(oldData => ({
      ...oldData,
      [id]: value
    }))
  }


  return {itemData, oldItemData, inputHandler, category}


}