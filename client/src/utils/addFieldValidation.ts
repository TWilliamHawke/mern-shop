export const addFieldValidation = (
  type: string, values: string[], fieldName: string
  ): boolean => {
  if(fieldName.length < 3) return true
  if(type === 'selector' && values.length < 2) return true
  return false

}

export const newValueValidation = (fieldValue: string): boolean => {
  if(fieldValue === '') return true
  return false
}
