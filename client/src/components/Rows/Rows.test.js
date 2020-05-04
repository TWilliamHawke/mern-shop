import { shallow} from 'enzyme'
import React from 'react'
import Rows from './Rows'

describe('test rows component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<Rows left={<p>sidebar</p>} right={<p>content</p>} />)
  })

  it('should render left side', () => {
    expect(wrapper.find('ErrorBoundary').first().children().text()).toBe('sidebar')
  })
})