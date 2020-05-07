import { loadImage } from "./actions"
import { LOAD_IMAGE } from "./types"



describe('test itemSaga actions', () => {
  it('should return LOAD_IMAGE type', () => {
    expect(loadImage('somedata'))
      .toEqual({type: LOAD_IMAGE, payload: 'somedata'})
  })
})