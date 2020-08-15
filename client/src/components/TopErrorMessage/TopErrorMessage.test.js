import React from 'react'
import { TopErrorMessage } from './TopErrorMessage';
import { shallow } from 'enzyme'
import reactRouter from 'react-router-dom'

jest.mock('src/hooks/useErrorsData.ts')
jest.mock('react-router-dom')
reactRouter.useHistory = jest.fn()
reactRouter.useLocation = jest.fn(() => ({pathname: 'not main page'}))


describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<TopErrorMessage />)
  })
  test('text', () => {
    expect(reactRouter.useHistory).toBeCalled()
    expect(wrapper.find('.top-error').exists()).toBeTruthy()
    expect(wrapper.find('button').at(1).text()).toBe('Go to Main page')
  })
})
