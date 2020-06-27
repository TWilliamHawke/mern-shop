import { useParams } from "react-router-dom"
import { ParamsType } from "src/types/hookTypes"

type UseCategoriesType = {
  categories: CategoriesType
  params: ParamsType
  catName: string
}

export const categories = {
  cpu: 'CPU',
  motherboards: 'Motherboards',
  graphic: 'Graphic Cards',
  // coolings: 'CPU Cooling',
  memory: 'Memory',
  storage: 'Storage',
  cases: 'Cases',
  // fans: 'Case Fans',
  power: 'Power Supplies',
}

export type CategoriesType = typeof categories

export const useCategories = (): UseCategoriesType => {
  
  const params = useParams<ParamsType>()
  const catName = categories[params.name]

  return { categories, params, catName }
}