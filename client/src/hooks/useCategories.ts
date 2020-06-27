import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppState } from "src/redux/store"
import { GlobalStore, CategoriesType } from '../redux/globalReducer/globalReducer'
import { ParamsType } from "src/types/hookTypes"

type UseCategoriesType = {
  categories: CategoriesType
  params: ParamsType
  catName: string
}

export const useCategories = (): UseCategoriesType => {
  const { categories } = useSelector<AppState, GlobalStore>(store => store.global)
  const params = useParams<ParamsType>()
  const catName = categories[params.name]

  return { categories, params, catName }
}