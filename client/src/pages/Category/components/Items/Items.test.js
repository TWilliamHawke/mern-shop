import React from 'react'
import { shallow } from 'enzyme'
import ConnectedItems, { Items } from './Items';
import configMockStore from 'redux-mock-store'



describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<Items header='test' categoryData={[]} />)
  })
  test('text', () => {
    expect(wrapper.find('h2').text()).toBe('test')
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {auth: {userType: 'testType'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedItems store={store} />).find('withRouter(Items)')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('userType')).toBe('testType')
  })
})