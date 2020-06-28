import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addItem, editItem } from 'src/redux/dataFetchSaga/actions'
import { LocalItemData } from './useItemTemplate'
import { FormEvent } from 'react'

import { ItemDataType } from "src/types/itemsDataType"
import { ParamsType } from "src/types/hookTypes"
import { AppState } from "src/redux/store"
import { TemplateStore } from "src/redux/templateReducer/templateReducer"
import { TfItemDataInput } from "src/types/actionHelpersTypes"

export const saveMock = jest.fn() // for tests

type UseSaveItemHandlerType = (a: {customData: Record<string, string>
  itemData: LocalItemData
  oldItemData: ItemDataType | null
}) => ({
  saveItemHandler: (e: FormEvent) => void
})

export const useSaveItemHandler: UseSaveItemHandlerType = ({customData, itemData, oldItemData}) => {

  const params = useParams<ParamsType>()
  const dispatch = useDispatch()
  const { category, imageId, imageUrl } = useSelector<AppState, TemplateStore>(store => store.template)

  const saveItemHandler = (e: FormEvent) => {
    if(!category || !oldItemData) return
    e.preventDefault()
    const data: TfItemDataInput = {
      ...itemData,
      imageId,
      imageUrl,
      catName: params.name,
      category: category._id,
      other: customData
    }
    if(!params.item) return dispatch(addItem(data))
    data.id = params.item
    if(oldItemData.image !== imageUrl) {
      data.oldImg = oldItemData.image
    }
    dispatch(editItem(data))
  }

  return { saveItemHandler }
}