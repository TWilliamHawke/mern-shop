import React from 'react'
import ConnectedTopErrorMessage, { TopErrorMessage } from './TopErrorMessage';
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'

describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<TopErrorMessage errors={['test']} />)
  })
  test('text', () => {
    expect(wrapper.find('.top-error')).toBeTruthy()
  })
})

describe('test connected component', () => {
  let wrapper
  beforeAll(() => {
    const mockStore = configMockStore()
    const state = {global: {errors: 'array'}}
    const store = mockStore(state)
    wrapper = shallow(<ConnectedTopErrorMessage store={store} />).find('withRouter(TopErrorMessage)')
  })
  test('component should receive props from connect function', () => {
    expect(wrapper.prop('errors')).toBe('array')
    expect(wrapper.prop('clearGlobalErrors')).toBeInstanceOf(Function)
    
  })
})