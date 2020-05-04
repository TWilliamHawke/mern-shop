import React from 'react'
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'
import ConnectedAddField, { AddField } from './AddField';


describe('test dumb component', () => {
  let wrapper
  const testHandler = jest.fn()
  beforeAll(() => {
    wrapper = shallow(<AddField showForm={false} setShowForm={testHandler} />)
  })

  it('should render button', () => {
    expect(wrapper.find('.config-btn').exists()).toBe(true)
    expect(wrapper.find('.form').exists()).toBe(false)
  })

  it('should call testHandler onClick', () => {
    wrapper.find('.config-btn').simulate('click')
    expect(testHandler).toBeCalled()
  })
})

describe('test component with showform is true', () => {
  let wrapper
  const testHandler = jest.fn()
  beforeAll(() => {
    wrapper = shallow(<AddField showForm={true} setShowForm={testHandler} />)
  })

  it('should render button', () => {
    expect(wrapper.find('.config-btn').exists()).toBe(false)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  // it('should call testHandler onClick', () => {
  //   wrapper.find('.config-btn').simulate('click')
  //   expect(testHandler).toBeCalled()
  // })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedAddField store={store} />).find('AddField')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('addField')).toBeInstanceOf(Function)
  })
})