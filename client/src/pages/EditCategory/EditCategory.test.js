import React from 'react'
import { shallow } from 'enzyme'
import { EditCategory } from './EditCategory';

jest.mock('./hooks/useEditCategory.ts')
jest.mock('react-router-dom', () => ({
  useLocation: () => jest.fn()
}))


describe('test EditCategory component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<EditCategory fields={[]} match={{params: {name: 'test'}}} />)
  })


  it('should redder add field component by default', () => {
    expect(wrapper.find('Fields').exists()).toBe(true)
  })
})
