import React from 'react'
import { shallow } from 'enzyme'
import { OrderCard } from './OrderCard';

describe('Order card tests', () => {
  let wrapper
  const mockAction = jest.fn()
  beforeAll(() => {
    wrapper = shallow(<OrderCard data={{items: []}} cancelOrder={mockAction} />)
  })
  
  it('should render correctly', () => {
    expect(wrapper.find('.order-card').exists()).toBe(true)
  })

  it('should call action on click', () => {
    const button = wrapper.find('button')
    button.simulate('click')
    expect(button.text()).toBe('Cancel Order')
    expect(mockAction).toBeCalled()
  })

})
