import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const useCategories = () => {
  const { categories } = useSelector(store => store.global)
  const params = useParams()
  const catName = categories[params.name]

  return { categories, params, catName }
}