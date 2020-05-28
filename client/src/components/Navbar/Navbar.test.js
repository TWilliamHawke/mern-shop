import React from 'react';
import ConnectedNavbar, { Navbar } from './Navbar';
import {shallow} from 'enzyme'
import configMockStore from 'redux-mock-store'


describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<Navbar />)
  })
  test('text', () => {
    expect(wrapper.find('NavLink').first().text()).toBe('Home')
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {auth: {userType: 'testType'}, orders: {cart: 'count'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedNavbar store={store} />).find('Navbar')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('userType')).toBe('testType')
    expect(wrapper.prop('cart')).toBe('count')
    expect(wrapper.prop('logout')).toBeInstanceOf(Function)
  })
})