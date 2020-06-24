import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addItem, editItem } from 'src/redux/dataFetchSaga/actions'

import { useEffect } from "react"

export const useSaveItemHandler = ({customData, itemData, oldItemData}) => {

  const params = useParams()
  const dispatch = useDispatch()
  const { category, imageId, imageUrl } = useSelector(store => store.template)


  useEffect(() => {
    // eslint-disable-next-line
  }, [])

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
    if(!params.item) return dispatch(addItem(data))
    data.id = params.item
    if(oldItemData.image !== imageUrl) {
      data.oldImg = oldItemData.image
    }
    dispatch(editItem(data))
  }

  return {saveItemHandler}
}