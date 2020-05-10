import { loadImage, saveTemplate, loadTemplate } from "./actions"
import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE } from "./types"



describe('test itemSaga actions', () => {
  it('should return LOAD_IMAGE type', () => {
    expect(loadImage('somedata'))
      .toEqual({type: LOAD_IMAGE, payload: 'somedata'})
  })

  it('should return SAVE_TEMPLATE type', () => {
    expect(saveTemplate('somedata'))
      .toEqual({type: SAVE_TEMPLATE, payload: 'somedata'})
  })

  it('should return LOAD_TEMPLATE type', () => {
    expect(loadTemplate('somedata'))
      .toEqual({type: LOAD_TEMPLATE, payload: 'somedata'})
  })
})