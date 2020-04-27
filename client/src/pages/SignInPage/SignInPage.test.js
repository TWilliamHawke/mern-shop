import React from 'react';
import { shallow } from 'enzyme'
import ConnectedSignInPage, { SignInPage } from './SignInPage';
import configMockStore from 'redux-mock-store'

describe('test dumb component', () => {
  let wrapper
  
  beforeAll(() => {
    wrapper = shallow(<SignInPage createUser='testFunction' />)
  })

  test('form should give function in props', () => {
    expect(wrapper.find('Connect(AuthForm)').prop('fetchForm')).toBe('testFunction')
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedSignInPage store={store} />).find('SignInPage')
  })

  test('component should receive props from connect function', () => {
    expect(wrapper.prop('createUser')).toBeInstanceOf(Function)
  })
})

