import React from 'react';
import { shallow } from 'enzyme'
import { AuthPage } from './AuthPage';
import authValidator from '../../utils/authValidation.ts';

jest.mock('./hooks/useAuthData.ts')

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(() => ({path: '/login'})),
  useHistory: jest.fn(() => ({push: () => {}}))
}))

jest.mock('../../utils/authValidation.ts')
authValidator.mockImplementation(() => false)


describe('componemt test', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<AuthPage header='testName' />)
  })

  test('button name should be equal props', () => {
    expect(wrapper.find('[type="submit"]').text()).toBe('testName')
    expect(wrapper.find('[type="submit"]').prop('disabled')).toBe(false)

  })

  it('should render Auth input 2 times', () => {
    expect(wrapper.find('AuthInput')).toHaveLength(3)
  })

  it('should render success-message', () => {
    expect(wrapper.exists('.success-message')).toBe(true)
  })
})
