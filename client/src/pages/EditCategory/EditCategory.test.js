import React from 'react'
import { shallow } from 'enzyme'
import EditCategory from './EditCategory';

describe('test EditCategory component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<EditCategory />)
  })


  it('should redder add field component by default', () => {
    expect(wrapper.find('Connect(AddField)').exists()).toBe(true)
  })
})