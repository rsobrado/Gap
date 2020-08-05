import React from 'react'
import { render } from '@testing-library/react'
import Button from '@material-ui/core/Button'

import { shallow } from 'enzyme'

import App from './App'
import Dashboard from './components/Dashboard'

test('Call to action Add to Cart exists', () => {
  const { getByText } = render(<Dashboard />)
  const linkElement = getByText(/Add to Cart/i)
  expect(linkElement).toBeInTheDocument()
})

describe('Dashboard', () => {
  it('should be defined', () => {
    expect(Dashboard).toBeDefined()
  })
  it('should contains Add to Cart CTA', () => {
    const mockCallBack = jest.fn()
    const button = shallow(<Button id="add-to-cart" onClick={mockCallBack} />)
    expect(button).toMatchSnapshot()
  })
  it('test Add to Cart CTA', () => {
    const mockCallBack = jest.fn()
    const button = shallow(<Button id="add-to-cart" onClick={mockCallBack} />)

    button.simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
  
})
