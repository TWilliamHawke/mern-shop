import React from 'react'
import configMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import ConnectedItemPage, { ItemPage } from './ItemPage';


describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<ItemPage userType='admin' categories={{}} />)
  })
  it('should render spinner without itemData', () => {
    expect(wrapper.find('Spinner').exists()).toBe(true)
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {items: {itemData: 'testData'}, auth: {userType: 'random'}, global: {loading: 'load'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedItemPage store={store} />).find('withRouter(ItemPage)')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('getItem')).toBeInstanceOf(Function)
    expect(wrapper.prop('addToCart')).toBeInstanceOf(Function)
    expect(wrapper.prop('itemData')).toBe('testData')
    expect(wrapper.prop('loading')).toBe('load')
    expect(wrapper.prop('userType')).toBe('random')
  })
})
