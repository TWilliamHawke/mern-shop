import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('test app component', () => {
  let wrapper
  beforeEach(() => {
    wrapper=shallow(<App />)
  })

  it('should rendered correctly', () => {
    expect(wrapper.exists('Provider')).toBe(true);
  })
})