import React from 'react'
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'
import ConnectedItemImage, { ItemImage } from './ItemImage';


describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<ItemImage imageUrl='someImg' loadImage={jest.fn()}/>)
  })
  test('should render image', () => {
    expect(wrapper.find('img').prop('src')).toBe('someImg')
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {template: {imageUrl: 'testUrl'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedItemImage store={store} />).find('ItemImage')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('imageUrl')).toBe('testUrl')
  })
})