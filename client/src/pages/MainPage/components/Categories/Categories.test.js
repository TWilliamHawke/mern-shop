import React from 'react'
import { shallow, mount } from 'enzyme'
import ConnectedCategories, { Categories } from './Categories';
import configMockStore from 'redux-mock-store'
import {MemoryRouter} from 'react-router-dom'

describe('test Categories component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mount(
      <MemoryRouter>
        <Categories userType='user' />
      </MemoryRouter>
    )
  })
  it('should render button', () => {
    expect(wrapper.find('button').text()).toBe('Custom Config')
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {auth: {userType: 'user'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedCategories store={store} />).find('Categories')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('userType')).toBe('user')
  })
})