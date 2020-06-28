import React from 'react'
import { shallow } from 'enzyme'
import { AddField } from './AddField';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.mock()
}))


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
    expect(wrapper.find('form').exists()).toBe(true)
  })
  // eslint-disable-next-line
  // it('should call testHandler onClick', () => {
  //   wrapper.find('.config-btn').simulate('click')
  //   expect(testHandler).toBeCalled()
  // })
})
