export const transformErrors = (response) => {
  let payload = ['Server is not aviable']
  if(!response) return payload

  if(response.data.errors) {
    payload = response.data.errors.map(error => error.msg)
  } else if (response.data.message) {
    payload = [response.data.message]
  }

  return payload
}

export const tfItemData = ({itemTitle, itemPrice, itemDiscount, imageUrl, other, ...values}) => ({
  title: itemTitle,
  price: +itemPrice || 0,
  discountPrice: +itemDiscount || 0,
  image: imageUrl,
  other: Object.entries(other).map(([field, value]) => ({field, value})),
  ...values
})