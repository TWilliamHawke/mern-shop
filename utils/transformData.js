const transformFields = (data) => {
  const [category, fields] = data

  return fields.map((field) => {
    return {...field._doc, enable: category.fields.includes(field._id)}
  }).sort((a, b) => {
    if(a.fieldName > b.fieldName) return 1
    if(a.fieldName < b.fieldName) return -1
    return 0
  }).sort((a, b) => {
    if(a.enable === b.enable) return 0
    if(a.enable) return -1
    return 1
  })
}

module.exports = {
  transformFields
}
