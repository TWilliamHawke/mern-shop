import React from 'react';
import { mount } from 'enzyme'
import { useItemImage } from './useItemImage'
import { useDispatch, useSelector } from "react-redux";
import { loadImage } from "src/redux/dataFetchSaga/actions";

jest.mock("react-redux")
jest.mock("src/redux/dataFetchSaga/actions")

const mockDispatch = jest.fn()

useDispatch.mockImplementation(() => mockDispatch)
useSelector.mockImplementation(() => ({imageUrl: 'testUrl'}))

const fn = jest.fn()

describe('useItemImage hook', () => {
  let handler

  beforeAll(() => {
    mount(<TestComponent />)
    handler = fn.mock.calls[0][0]
  })

  const TestComponent = () => {
    const {imageHandler, imageUrl} = useItemImage()
    fn(imageHandler, imageUrl)
    return null
  }

  beforeEach(() => {
    loadImage.mockClear()
  })


  it('should return data', () => {
    expect(handler).toBeInstanceOf(Function)
    expect(fn.mock.calls[0][1]).toBe('testUrl')
  })

  test('handler function should call action', () => {
    const event = {target: {files: ['qwerty']}}
    handler(event)
    expect(loadImage).toBeCalled()
  })

  test('handler function shouldnt call action without file', () => {
    const event = {target: {files: [null]}}
    handler(event)
    expect(loadImage).not.toBeCalled()
  })

})
