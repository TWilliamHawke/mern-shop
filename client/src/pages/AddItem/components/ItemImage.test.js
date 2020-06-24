import React from 'react'
import { shallow } from 'enzyme'
import { ItemImage } from './ItemImage';
import { useItemImage } from '../hooks/useItemImage'


jest.mock('../hooks/useItemImage')

const handler = jest.fn()
useItemImage.mockImplementation(() => ({
  imageHandler: handler,
  imageUrl: 'testUrl'
}))


describe('test dumb component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<ItemImage />)
  })
  test('should render image', () => {
    expect(wrapper.find('img').prop('src')).toBe('testUrl')
  })

  it('should call handler', () => {
    const input = wrapper.find('input')
    input.simulate('change')
    expect(handler).toBeCalled()
  })
})

