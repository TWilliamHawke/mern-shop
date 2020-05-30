import React from 'react'
import { shallow } from 'enzyme'
import ConnectedOrderCard, { OrderCard } from './OrderCard';
import configMockStore from 'redux-mock-store'


describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedOrderCard store={store} />).find('OrderCard')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('cancelOrder')).toBeInstanceOf(Function)
  })
})