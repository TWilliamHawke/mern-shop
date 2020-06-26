import { FieldData, FieldType } from "./templateDataType";

export type ItemDataType = {
  favorite: boolean
  filters: string[]
  id: string
  title: string
  other: FieldData[]
  catName: string
  price: number
  discountPrice: number
  image: string
  brand: string
  category: string
}

export type CategoryDataType = ItemDataType[]

export type FiltersType = {
  minValue: number
  maxValue: number
  fields: FieldType<{value: string, _id: string }>[]
  brands: string[]
  _id: string
  name: string
  path: string
}

export type FetchFiltersType = {
  filters: FiltersType
  categoryData: CategoryDataType
}