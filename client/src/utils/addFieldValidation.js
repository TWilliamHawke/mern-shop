export const addFieldValidation = (type, values, fieldName) => {
  if(fieldName.length < 3) return true
  if(type === 'selector' && values.length < 2) return true
  return false

}

export const newValueValidation = (fieldValue) => {
  if(fieldValue === '') return true
  return false
}
