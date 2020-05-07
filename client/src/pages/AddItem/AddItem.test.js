import React from 'react'
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'
import ConnectedAddItem, { AddItem } from './AddItem';

describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<AddItem location={{state: 'name'}} />)
  })
  test('should render correctly', () => {
    expect(wrapper.find('PathLinks').exists()).toBe(true)
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {item: {imageUrl: 'someUrl'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedAddItem store={store} />).find('withRouter(AddItem)')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('loadImage')).toBeInstanceOf(Function)
    expect(wrapper.prop('imageUrl')).toBe('someUrl')
  })
})
