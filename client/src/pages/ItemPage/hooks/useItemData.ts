import { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getItem, addToCart, addPopular, removePoupular } from "src/redux/dataFetchSaga/actions"
import { clearItemData } from "src/redux/itemReducer/actions"
import useUserType from "src/hooks/useUserType"
// types
import { AppState } from "src/redux/store"
import { ItemState } from "src/redux/itemReducer/itemReducer"
import { GlobalStore } from "src/redux/globalReducer/globalReducer"
import { ParamsType } from "src/types/hookTypes"
import { ItemDataType } from 'src/types/itemsDataType'

type UseItemDataType = {
  itemData: ItemDataType | null
  gotoEditItem: () => void
  isAdmin: boolean,
  addToCartHandler: () => void
  popularHandler: () => void
  loading: boolean
}


export const useItemData = (): UseItemDataType => {
  const params = useParams<ParamsType>()
  const dispatch= useDispatch()
  const history= useHistory()
  const { isAdmin, isGuest } = useUserType()
  const { itemData } = useSelector<AppState, ItemState>(store => store.items)
  const { loading } = useSelector<AppState, GlobalStore>(store => store.global)

  useEffect(() => {
    dispatch(getItem(params.item))

  }, [params.item, dispatch])

  useEffect(() => {
    return () => {
      dispatch(clearItemData())
    }
  }, [dispatch])

  const gotoEditItem = () => {
    history.push({
      pathname: 'edit',
      state: itemData
    })
  }

  const addToCartHandler = () => {
    if(isGuest) return history.push('/login');
    if(loading || !itemData) return;
    dispatch(addToCart(itemData._id))
  }

  const popularHandler = () => {
    if(loading || !itemData) return;
    const id = itemData._id.toString();
    if(!itemData.popular) return void dispatch(addPopular(id));
    return void dispatch(removePoupular(id));
  }

  return {
    gotoEditItem,
    itemData,
    isAdmin,
    addToCartHandler,
    popularHandler,
    loading
  }
}