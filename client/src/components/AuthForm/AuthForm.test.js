import React from 'react';
import { shallow } from 'enzyme'
import ConnectedAuthForm, { AuthForm } from './AuthForm';
import configMockStore from 'redux-mock-store'

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(() => ({path: '/login'})),
  useHistory: jest.fn(() => ({push: () => {}}))
}))

describe('componemt test', () => {
  let wrapper
  let fetchTest = jest.fn(() => {})
  beforeAll(() => {
    wrapper = shallow(<AuthForm successMessage={true} loading={true} buttonName='testName' fetchForm={fetchTest}/>)
  })

  test('button name should be equal props', () => {
    expect(wrapper.find('[type="submit"]').text()).toBe('testName')
    expect(wrapper.find('[type="submit"]').prop('disabled')).toBe(true)

  })

  it('should render Auth input 2 times', () => {
    expect(wrapper.find('AuthInput')).toHaveLength(2)
  })

  it('should call fetchForm function on submit', () => {
    const button = wrapper.find('form')
    button.simulate('submit', {preventDefault: () => {}})
    expect(fetchTest).toBeCalled()
  })

  it('should render success-message', () => {
    expect(wrapper.exists('.success-message')).toBe(true)
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {auth: {loading: 'testLoading', successMessage: 'testMessage', errors: 'testArray'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedAuthForm store={store} />).find('AuthForm')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('hideSuccessMessage')).toBeInstanceOf(Function)
    expect(wrapper.prop('redirectSuccess')).toBeInstanceOf(Function)
    expect(wrapper.prop('errors')).toBe('testArray')
  })
})