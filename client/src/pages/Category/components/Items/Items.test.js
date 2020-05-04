import Items from './Items';
import React from 'react'
import {mount} from 'enzyme'
import { MemoryRouter} from 'react-router-dom'


describe('items componemt', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mount(
      <MemoryRouter>
        <Items header='test' />
      </MemoryRouter>
    )
  })

  it('should render headers', () => {
    expect(wrapper.find('h2').text()).toBe('test')
  })
})