import axios from "axios"
import { CategoryDataType, ItemDataType, FetchFiltersType } from "src/types/itemsDataType"
import { FetchTemplateType, FetchImageData } from "src/types/templateDataType"
import { TfItemDataOutput } from "src/types/actionHelpersTypes"

export const itemApi = {
  fetchImg: (token: string, data: FormData): Promise<FetchImageData> => {
    return axios.post('/api/items/image', data, {headers: {authorization: token}})
  },

  fetchTemplate: (token: string, data: {cat: string, item: string}): Promise<FetchTemplateType> => {
    const {cat, item} = data
    const itemUrl = item ? `&item=${item}` : ''
    return axios.get(`/api/items/template?cat=${cat}${itemUrl}`, {headers: {authorization: token}})
  },

  fetchCategory: (string: string): Promise<CategoryDataType> => {
    return axios.get(`/api/items/items?${string}`)
  },

  fetchItem: (id: string): Promise<ItemDataType> => {
    return axios.get(`/api/items/item?item=${id}`)
  },

  addItem: (token: string, data: TfItemDataOutput): Promise<void> => {
    return axios.post('/api/items/add', data, {headers: {authorization: token}})
  },

  editItem: (token: string, data: TfItemDataOutput): Promise<void> => {
    return axios.put('/api/items/edit', data, {headers: {authorization: token}})
  },

  fetchFilters: (category: string): Promise<FetchFiltersType> => {
    return axios.get(`/api/items/filters?cat=${category}`)
  },

  addPopular: (token: string, data: string): Promise<ItemDataType> => {
    return axios.put('/api/items/addpopular', {id: data}, {headers: {authorization: token}})
  },
  
  removePoupular: (token: string, data: string): Promise<ItemDataType> => {
    return axios.put('/api/items/removepopular', {id: data}, {headers: {authorization: token}})   
  },

  getPopular: (): Promise<CategoryDataType> => {
    return axios.get('/api/items/popular')
  },
}