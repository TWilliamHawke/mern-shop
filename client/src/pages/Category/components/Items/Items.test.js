import React from 'react'
import { shallow } from 'enzyme'
import { Items } from './Items';

jest.mock('src/hooks/useUserType.js')
jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}))


describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<Items header='test' categoryData={[]} />)
  })
  test('text', () => {
    expect(wrapper.find('h2').text()).toBe('test')
  })
})
