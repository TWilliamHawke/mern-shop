import ConnectedRoutes, { Routes } from './Routes';
import configStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import React from 'react'

describe('test dumb component', () => {
  it('should rednder correctly', () => {
    const wrapper = shallow(<Routes />)

    expect(wrapper.find('Route').prop('path')).toBe('/')
  })

})

describe('test connected component', () => {
  const mockStore = configStore()
  const store = mockStore({ auth: {
      isGuest: 'guest test', 
      isUser: 'user test'}
  })
  const wrapper = shallow(<ConnectedRoutes store={store} />
    ).find('Routes')

  it('should receive props', () => {
    expect(wrapper.prop('isGuest')).toBe('guest test')
    expect(wrapper.prop('isUser')).toBe('user test')
  })
})