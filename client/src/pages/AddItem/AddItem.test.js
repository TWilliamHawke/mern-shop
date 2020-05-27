import React from 'react'
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'
import ConnectedAddItem, { AddItem } from './AddItem';

describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(
      <AddItem 
        category={true}
        location={{state: 'name'}}
        match={{params: {name: 'testName'}}} />)
  })
  test('should render correctly', () => {
    expect(wrapper.find('Connect(withRouter(PathLinks))').exists()).toBe(true)
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {template: {imageUrl: 'someUrl', category: 'someData', imageId: 'id', saveItemSuccess: 'savesucc'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedAddItem store={store} />).find('withRouter(AddItem)')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('category')).toBe('someData')
    expect(wrapper.prop('imageUrl')).toBe('someUrl')
    expect(wrapper.prop('imageId')).toBe('id')
    expect(wrapper.prop('loadTemplate')).toBeInstanceOf(Function)
    expect(wrapper.prop('addItem')).toBeInstanceOf(Function)
    expect(wrapper.prop('editItem')).toBeInstanceOf(Function)
    expect(wrapper.prop('clearTemplateData')).toBeInstanceOf(Function)
    expect(wrapper.prop('saveItemSuccess')).toBe('savesucc')
  })
})
