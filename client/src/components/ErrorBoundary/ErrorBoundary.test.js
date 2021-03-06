import React from 'react'
import { shallow } from 'enzyme'
import ErrorBoundary from './ErrorBoundary'

test('render children element by default', () => {
  const wrapper = shallow(<ErrorBoundary><p>test</p></ErrorBoundary>)

  expect(wrapper.instance().state.hasError).toBe(false)
  expect(wrapper.find('p').text()).toBe('test')
})

test('render error message then catch',() => {
  const wrapper = shallow(<ErrorBoundary>test</ErrorBoundary>)
  wrapper.instance().componentDidCatch()

  expect(wrapper.instance().state.hasError).toBe(true)
  expect(wrapper.find('.error').props().children).toMatch('went wrong')
})