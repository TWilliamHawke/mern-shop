import storage from './storageServices';

describe('test getItem function', () => {
  beforeAll(() => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 'testString')
    jest.spyOn(JSON, 'parse').mockImplementation(() => 'testData')
  })

  it('should return testdata', () => {
    expect(storage.getItem('testField')).toBe('testData')
    expect(localStorage.getItem).toBeCalledWith('testField')
    expect(JSON.parse).toBeCalledWith('testString')
  })
})

describe('test setItem function', () => {
  beforeAll(() => {
    jest.spyOn(Storage.prototype, 'setItem')
    jest.spyOn(JSON, 'stringify').mockImplementation(() => 'testString')
    storage.setItem('testField', 'testData')
  })

  it('should call mock functions', () => {
    expect(localStorage.setItem).toBeCalledWith('testField', 'testString')
    expect(JSON.stringify).toBeCalledWith('testData')
  })
})

describe('test removeItem function', () => {
  beforeAll(() => {
    jest.spyOn(Storage.prototype, 'removeItem')
    storage.removeItem('testField')
  })

  it('should call localstorage removeItem', () => {
    expect(localStorage.removeItem).toBeCalledWith('testField')
  })
})