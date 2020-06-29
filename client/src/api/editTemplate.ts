import Axios from "axios"
import { EditFieldData, SaveTemplateData } from "src/types/fetchDataTypes"
import { FetchFieldsType } from "src/types/templateDataType"

export const editTemplateApi = {
  addField: (token: string, data: EditFieldData): Promise<void> => {
    return Axios.post('/api/template/addField', data, {headers: {authorization: token}})
  },
  getFields: (token: string, category: string): Promise<FetchFieldsType> => {
    return Axios.get(`/api/template/fields?cat=${category}`, {headers: {authorization: token}})
  },
  saveTemplate: (token: string, data: SaveTemplateData): Promise<void> => {
    return Axios.post('/api/template/fields', data, {headers: {authorization: token}})
  },
  editTemplate: (token: string, data: EditFieldData): Promise<void> => {
    return Axios.put('/api/template/editTemplate', data, {headers: {authorization: token}})
  },

}

export type EditTemplateType = typeof editTemplateApi