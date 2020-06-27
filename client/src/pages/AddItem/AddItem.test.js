import React from 'react'
import { shallow } from 'enzyme'
import { AddItem } from './AddItem';
import { saveMock } from './hooks/useSaveItemHandler'

jest.mock('./hooks/useCustomData.ts')
jest.mock('./hooks/useItemTemplate.ts')
jest.mock('./hooks/useSaveItemHandler.ts')



describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(
      <AddItem />)
  })
  test('should render correctly', () => {
    expect(wrapper.find('PathLinks').exists()).toBe(true)
    expect(saveMock).toBeDefined()
  })

  it('should call mock function', () => {
    const form = wrapper.find('form')
    form.simulate('submit')
    expect(saveMock).toBeCalled()
  })
})
