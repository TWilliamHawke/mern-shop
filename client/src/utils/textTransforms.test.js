import { tfMeasure } from "./textTransforms"

describe('test of tfMeasure function', () => {
  test('run without arguments should return empty string', () => {
    expect(tfMeasure()).toBe('')
  })

  test('run with arguments should return (argument)', () => {
    expect(tfMeasure('data')).toBe(' (data)')
  })

})