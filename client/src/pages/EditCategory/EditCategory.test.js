import React from 'react'
import { shallow } from 'enzyme'
import ConnectedEditCategory, { EditCategory } from './EditCategory';
import configMockStore from 'redux-mock-store'


describe('test EditCategory component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<EditCategory fields={[]} />)
  })


  it('should redder add field component by default', () => {
    expect(wrapper.find('Connect(AddField)').exists()).toBe(true)
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = { template: {fields: 'fieldsArray', noContent: 'mock'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedEditCategory store={store} />).find('EditCategory')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('getFields')).toBeInstanceOf(Function)
    expect(wrapper.prop('fields')).toBe('fieldsArray')
    expect(wrapper.prop('noContent')).toBe('mock')
  })
})