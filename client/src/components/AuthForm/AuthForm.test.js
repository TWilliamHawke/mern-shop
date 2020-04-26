import React from 'react';
import { shallow } from 'enzyme'
import AuthForm from './AuthForm';

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(() => ({path: '/login'}))
}))

describe('componemt test', () => {
  let wrapper
  let fetchTest = jest.fn(() => {})
  beforeAll(() => {
    wrapper = shallow(<AuthForm loading={true} buttonName='testName' fetchForm={fetchTest}/>)
  })

  test('button name should be equal props', () => {
    expect(wrapper.find('button').text()).toBe('testName')
    expect(wrapper.find('button').prop('disabled')).toBe(true)

  })

  it('should render Auth input 2 times', () => {
    expect(wrapper.find('AuthInput')).toHaveLength(2)
  })

  it('should call fetchForm function on submit', () => {
    const button = wrapper.find('form')
    button.simulate('submit', {preventDefault: () => {}})
    expect(fetchTest).toBeCalled()
  })
})