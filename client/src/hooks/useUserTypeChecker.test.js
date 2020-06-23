import {useUserTypeChecker} from './useUserTypeChecker'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { mount } from 'enzyme'
import { checkUserType } from 'src/redux/authSaga/actions'


jest.mock('react-redux')
const mockDispatch = jest.fn()
useDispatch.mockImplementation(() => mockDispatch)

useSelector.mockImplementation(() => ({userType: 'admin'}))

const TestComp = () => {
  const type = useUserTypeChecker()
  return (
    <>
      <h1>{type}</h1>
    </>
  )
}



it('should render usertype', () => {
  const wrapper = mount(<TestComp />)
  const header = wrapper.find('h1')

  expect(header.text()).toBe('admin')
  expect(useDispatch).toBeCalledTimes(1)
  expect(mockDispatch).toBeCalledWith(checkUserType())

})

