const convertPrice = price => {
  return new Intl.NumberFormat('en-EN', {
    currency: 'USD',
    style: 'currency'
  }).format(price)
}

export default convertPrice