import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE } from "./types";


export const loadImage = (payload) => ({
  type: LOAD_IMAGE, payload
})

export const saveTemplate = (payload) => ({
  type: SAVE_TEMPLATE, payload
})

export const loadTemplate = (payload) => ({
  type: LOAD_TEMPLATE, payload
})