import React from 'react';
import { Navbar } from './Navbar';
import {shallow} from 'enzyme'
import { mockLogout } from './useNavbarData'

jest.mock('./useNavbarData.ts')
jest.mock('src/hooks/useUserType.ts')

describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<Navbar />)
  })
  test('text', () => {
    expect(wrapper.find('NavLink').first().text()).toBe('Home')
  })

  it('should mock logout', () => {
    const button = wrapper.find('button')
    button.simulate('click')
    expect(mockLogout).toBeCalled()
  })
})
