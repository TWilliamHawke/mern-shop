import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { CartPage } from './CartPage';

jest.mock('./hooks/useCartData.ts')


describe('test dumb component', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<CartPage />)
  })
  test('text', () => {
    expect(wrapper.find('p').text()).toBe('Cart is Empty')
  })
})