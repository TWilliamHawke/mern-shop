import ConnectedRoutes, { Routes } from './Routes';
import configStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import React from 'react'

describe('test dumb component', () => {
  it('should rednder correctly', () => {
    const wrapper = shallow(<Routes userType='guest' />)

    expect(wrapper.find('Route').prop('path')).toBe('/')
  })

})

describe('test connected component', () => {
  const mockStore = configStore()
  const store = mockStore({ auth: {
      userType: 'testType'}
  })
  const wrapper = shallow(<ConnectedRoutes store={store} />
    ).find('Routes')

  it('should receive props', () => {
    expect(wrapper.prop('userType')).toBe('testType')
    expect(wrapper.prop('checkUserType')).toBeInstanceOf(Function)
  })
})