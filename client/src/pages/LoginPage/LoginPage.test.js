import React from 'react'
import {shallow} from 'enzyme'
import ConnectedLoginPage, { LoginPage } from './LoginPage';
import configMockStore from 'redux-mock-store'

describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<LoginPage loginUser='testFunction'/>)
  })
  test('text', () => {
    expect(wrapper.find('Connect(AuthForm)').prop('fetchForm')).toBe('testFunction')
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedLoginPage store={store} />).find('LoginPage')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('loginUser')).toBeInstanceOf(Function)
  })
})