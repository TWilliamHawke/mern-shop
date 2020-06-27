import React from 'react'
import { TopErrorMessage } from './TopErrorMessage';
import { shallow } from 'enzyme'

jest.mock('src/hooks/useErrorsData.ts')

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => 'loc'
}));

describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<TopErrorMessage />)
  })
  test('text', () => {
    expect(wrapper.find('.top-error').exists()).toBeTruthy()
  })
})
