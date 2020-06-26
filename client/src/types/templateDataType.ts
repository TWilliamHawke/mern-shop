import { ItemDataType } from "./itemsDataType"

export type FieldType<T> = {
  values: T[]
  _id: string
  fieldName: string
  type: string
  measure: string
  enable?: boolean
}

export type FieldData = {
  _id: string
  field: FieldType<string>
  value: string
}

export type CategoryTemplateType = {
  minValue: number
  maxValue: number
  fields: FieldType<string>[]
  brands: string[]
  _id: string
  name: string
  path: string
}

export type FetchTemplateType = {
  category: CategoryTemplateType
  itemData: ItemDataType
}

export type FetchFieldsType = {
  fields: FieldType<string>[]
  brands: string[]
}

export type FetchImageData = {
  img: string
  id: string;
}