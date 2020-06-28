import ConnectedFilter, { Filter } from './Filter';
import React from 'react'
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'


describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<Filter filters={{brands: [], fields: [{_id: ''}]}} />)
  })
  test('text', () => {
    expect(wrapper.find('.filters').exists()).toBeTruthy()
  })
})