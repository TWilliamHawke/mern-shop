import React from 'react'
import { shallow } from 'enzyme'
import configMockStore from 'redux-mock-store'
import ConnectedOrderPage, { OrderPage } from './OrderPage';

jest.mock('./hooks/useOrdersData.js')


it('should render correctly', () => {
  const wrapper = shallow(<OrderPage />)
  expect(wrapper.find('.order-page').exists()).toBe(true)
})