import convertPrice from "./convertPrice"

it('should trfnsform number into dollars', () => {
  expect(convertPrice(300)).toBe('$300.00')
  expect(convertPrice(299.99)).toBe('$299.99')
})