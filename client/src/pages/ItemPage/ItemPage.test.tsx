import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import ItemPage from './ItemPage';

jest.mock('src/hooks/useUserType.ts')
jest.mock('./hooks/useItemData.ts')

describe('test dumb component', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<ItemPage />)
  })
  it('should render spinner without itemData', () => {
    expect(wrapper.find('PathLinks').exists()).toBe(true)
    expect(wrapper.find('PathLinks').prop('itemTitle')).toBe('testTitle')
    
  })
})

