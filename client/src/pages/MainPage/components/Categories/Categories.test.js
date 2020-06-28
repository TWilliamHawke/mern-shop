import React from 'react'
import { mount } from 'enzyme'
import { Categories } from './Categories';
import {MemoryRouter} from 'react-router-dom'

jest.mock('../../hooks/usePopularData.ts')

describe('test Categories component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mount(
      <MemoryRouter>
        <Categories userType='user' categories={{}} />
      </MemoryRouter>
    )
  })
  it('should render header', () => {
    expect(wrapper.find('h3').text()).toBe('Categories')
  })
})
