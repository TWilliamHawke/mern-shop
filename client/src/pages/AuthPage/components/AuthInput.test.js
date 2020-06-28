import React from 'react'
import {shallow} from 'enzyme'
import AuthInput from './AuthInput';

describe('test AuthInput componnt', () => {
  let wrapper
  const mockChange = 'testFunction'
  const mockData = {
    label: 'testLabel',
    type: 'testType',
    name: 'phone'
  }
  const testValues = {phone: 'testValue'}

  beforeAll(() => {
    wrapper = shallow(<AuthInput data={mockData} onInput={mockChange} values={testValues} />)
  })

  it('should render props correctly', () => {
    const input = wrapper.find('InputElement')
    expect(input.props().name).toBe('phone')
    expect(input.props().type).toBe('testType')
    expect(input.props().id).toBe('authphone')
    expect(input.props().onChange).toBe('testFunction')
    expect(input.props().mask).toMatch('99-99')
    expect(input.props().value).toBe('testValue')
  })

  describe('render with other name prop', () => {
    beforeAll(() => {
      mockData.name = 'testName'
      testValues.testName = 'testValNoPhone'
      wrapper = shallow(<AuthInput data={mockData} onInput={mockChange} values={testValues} />)
    })

    it('should render props correctly', () => {
      const input = wrapper.find('InputElement')
      expect(input.props().mask).toBe('')
      expect(input.props().value).toBe('testValNoPhone')
    })
  
  })
})