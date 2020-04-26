import React from 'react'
import {shallow} from 'enzyme'
import ErrorMessages from './ErrorMessages';

describe('test ErrorMessages', () => {
  it('should render all errors', () => {
    const errors = [
      'firstError',
      'secondError',
      'thirdError'
    ]
    const wrapper = shallow(<ErrorMessages errors={errors} />)
    expect(wrapper.find('p')).toHaveLength(3)
  })
})