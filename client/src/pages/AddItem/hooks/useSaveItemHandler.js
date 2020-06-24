import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useItemTemplate } from "./useItemTemplate"
import { addItem, editItem } from 'src/redux/dataFetchSaga/actions'

import { useCustomData } from './useCustomData'
import { useEffect } from "react"

export const useSaveItemHandler = () => {

  const params = useParams()
  const dispatch = useDispatch()
  const { itemData, oldItemData } = useItemTemplate()
  const { customData } = useCustomData()
  const { category, imageId, imageUrl } = useSelector(store => store.template)

  useEffect(() => {
    console.log(customData)
    console.log(itemData)
  }, [customData, itemData])

  const saveItemHandler = e => {
    e.preventDefault()
    const data = {
      ...itemData,
      imageId,
      imageUrl,
      catName: params.name,
      category: category._id,
      other: customData
    }
    // if(!params.item) return dispatch(addItem(data))
    // data.id = params.item
    // if(oldItemData.image !== imageUrl) {
    //   data.oldImg = oldItemData.image
    // }
    // dispatch(editItem(data))
  }

  return {saveItemHandler}
}