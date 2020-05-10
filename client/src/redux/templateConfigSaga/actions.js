import { ADD_FIELD, GET_FIELDS } from "./types";

export const addField = (payload) => ({
  type: ADD_FIELD, payload
})

export const getFields = (payload) => ({
  type: GET_FIELDS, payload
})