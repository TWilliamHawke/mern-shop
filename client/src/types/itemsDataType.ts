import { FieldData, FieldType } from "./templateDataType";

export type ItemDataType = {
  popular: boolean
  filters: string[]
  _id: string
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

export type FiltersFieldType = FieldType<{value: string, id: string }>

export type FiltersType = {
  minValue: string
  maxValue: string
  fields: FiltersFieldType[]
  brands: string[]
  _id: string
  name: string
  path: string
}

export type FetchFiltersType = {
  filters: FiltersType
  categoryData: CategoryDataType
}