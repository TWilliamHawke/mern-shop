const convertPrice = (price: number): string => {
  return new Intl.NumberFormat('en-EN', {
    currency: 'USD',
    style: 'currency'
  }).format(price)
}

export default convertPrice