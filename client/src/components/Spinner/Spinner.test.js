import Spinner from './Spinner';
import React from 'react'
import { shallow } from 'enzyme'


describe('test Spinner component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<Spinner />)
  })

  it('should render correctly', () => {
    expect(wrapper.find('div').first().prop('className')).toBeTruthy()
  })
})