import React from 'react';
import { shallow } from 'enzyme'
import AuthForm from './AuthForm';

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(() => ({path: '/login'}))
}))

describe('componemt test', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<AuthForm buttonName='testName'/>)
  })

  test('button name should be equal props', () => {
    expect(wrapper.find('button').text()).toBe('testName')
  })

  test('input with username should be hidden', () => {
    expect(wrapper.exists('[type="hidden"]')).toBe(true)
  })
})