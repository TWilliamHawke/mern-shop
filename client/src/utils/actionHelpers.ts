import { ErrorInputType, ErrorOutputType } from "src/types/authDataTypes"
import { TfItemDataInput, TfItemDataOutput, TfFilterToStringInput } from "src/types/actionHelpersTypes"

export const transformErrors = (response: ErrorInputType): ErrorOutputType => {
  let payload = ['Server is not aviable']
  if(!response) return payload

  if(response.data.errors) {
    payload = response.data.errors.map(error => error.msg)
  } else if (response.data.message) {
    payload = [response.data.message]
  }

  return payload
}


export const tfItemData = ({
  itemTitle, itemPrice, itemDiscount, imageUrl, other, ...values
}: TfItemDataInput): TfItemDataOutput => ({

  title: itemTitle,
  price: +itemPrice || 0,
  discountPrice: +itemDiscount || 0,
  image: imageUrl,
  other: Object.entries(other).map(([field, value]) => ({field, value})),
  ...values
})

export const tfFilterToString = ({
  cat,
  min,
  max,
  checkedBrands,
  checkedFilters
}: TfFilterToStringInput): string => {
  const brands = Object.entries(checkedBrands)
    .filter(brand => brand[1])
    .map(brand => brand[0])
    .join(',')
    
    const filters = Object.values(checkedFilters)
      .map(field => Object.entries(field).filter(f => f[1]).map(f => f[0]).join(','))
      .filter(string => string !== '').join(';')
  return `cat=${cat}&min=${min}&max=${max}&brands=${brands}&filters=${filters}`
}