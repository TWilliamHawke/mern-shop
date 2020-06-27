
// eslint-disable-next-line
export const useItemData = () => ({
  gotoEditItem: () => jest.fn(),
  itemData: {
    title: 'testTitle',
    image: 'url',
    price: 42,
    other: 'otherData',
    popular: true
  },
  isAdmin: true,
  addToCartHandler: () => jest.fn(),
  popularHandler: () => jest.fn(),
  loading: false
})