import React from 'react'
import configMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import ConnectedCartPage, { CartPage } from './CartPage';


describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {orders: {cart: 'cartArray', cartIsEmpty: 'cartData'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedCartPage store={store} />).find('withRouter(CartPage)')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('getCart')).toBeInstanceOf(Function)
    expect(wrapper.prop('cart')).toBe('cartArray')
  })
})
