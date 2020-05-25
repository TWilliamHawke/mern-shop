import React from 'react'
import configMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import ConnectedItemPage, { ItemPage } from './ItemPage';

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {items: {itemData: 'testData'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedItemPage store={store} />).find('withRouter(ItemPage)')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('getItem')).toBeInstanceOf(Function)
    expect(wrapper.prop('itemData')).toBe('testData')
  })
})
