import React from 'react'
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'
import ConnectedOrderPage, { OrderPage } from './OrderPage';

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {orders: {orders:'ordersList'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedOrderPage store={store} />).find('OrderPage')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('getAllOrders')).toBeInstanceOf(Function)
    expect(wrapper.prop('orders')).toBe('ordersList')
  })
})
