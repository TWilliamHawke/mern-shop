export type FieldType = {
  values: {value: string, _id: string }[]
  _id: string
  fieldName: string
  type: string
  measure: string
}

export type FieldData = {
  _id: string
  field: FieldType
  value: string
}

