import ConnectedFilter, { Filter } from './Filter';
import React from 'react'
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'


describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {items: {filters: 'filtersData'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedFilter store={store} />).find('Filter')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('getCategory')).toBeInstanceOf(Function)
  })
})