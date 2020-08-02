import { useSelector, useDispatch } from "react-redux"
import { AppState } from "src/redux/store"
import { ItemState } from "src/redux/itemReducer/itemReducer"
import { FiltersType, CategoryDataType } from "src/types/itemsDataType"
import { useParams } from "react-router-dom"
import { ParamsType } from "src/types/hookTypes"
import { getFilters, getCategory } from "src/redux/dataFetchSaga/actions"
import { clearFilters } from "src/redux/itemReducer/actions"
import { useEffect } from "react"
import { TfFilterToStringInput } from "src/types/actionHelpersTypes"

type UseCategoryDataType = {
  categoryData: CategoryDataType | null
  filters: FiltersType | null
  getCategory: (d: TfFilterToStringInput) => void
}

export const useCategoryData = (): UseCategoryDataType => {
  const {categoryData, filters} = useSelector<AppState, ItemState>(store => store.items)
  const dispatch = useDispatch()
  const {name} = useParams<ParamsType>()

  useEffect(() => {
    dispatch(getFilters(name))
  }, [dispatch, name])

  useEffect(() => () => {
    dispatch(clearFilters())
  }, [dispatch])



  return {
    categoryData,
    filters,
    getCategory: (d: TfFilterToStringInput) => void dispatch(getCategory(d))
  }
}