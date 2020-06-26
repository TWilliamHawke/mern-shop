export type SaveTemplateData = {
    name: string,
    path: string,
    fields: string[],
    brands: string[]
}

export type EditFieldData = {
  fieldName: string,
  type: string,
  measure: string,
  values: string[],
  multiple: boolean
  id?: string
}