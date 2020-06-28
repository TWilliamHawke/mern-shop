import React from 'react'
import { shallow } from 'enzyme'
import { OrderPage } from './OrderPage';

jest.mock('./hooks/useOrdersData.ts')


it('should render correctly', () => {
  const wrapper = shallow(<OrderPage all={false} />)
  expect(wrapper.find('.order-page').exists()).toBe(true)
})