import axios from "axios"

class ItemService{
  fetchImg = (token, data) => {
    return axios.post('/api/items/image', data, {headers: {authorization: token}})
  }

  fetchTemplate = (token, data) => {
    const {cat, item} = data
    const itemUrl = item ? `&item=${item}` : ''
    return axios.get(`/api/items/template?cat=${cat}${itemUrl}`, {headers: {authorization: token}})
  }

  fetchCategory = (string) => {
    return axios.get(`/api/items/items?${string}`)
  }

  fetchItem = (id) => {
    return axios.get(`/api/items/item?item=${id}`)
  }

  addItem = (token, data) => {
    return axios.post('/api/items/add', data, {headers: {authorization: token}})
  }

  editItem = (token, data) => {
    return axios.put('/api/items/edit', data, {headers: {authorization: token}})
  }

  fetchFilters = (category) => {
    return axios.get(`/api/items/filters?cat=${category}`)
  }

  addPopular = (token, data) => {
    return axios.put('/api/items/addpopular', {id: data}, {headers: {authorization: token}})
  }
  removePoupular = (token, data) => {
    return axios.put('/api/items/removepopular', {id: data}, {headers: {authorization: token}})   
  }
  getPopular = () => {
    return axios.get('/api/items/popular')
  }
}

const itemService = new ItemService()

export default itemService