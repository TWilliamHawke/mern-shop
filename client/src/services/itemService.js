import axios from "axios"

class ItemService{
  fetchImg = (token, data) => {
    return axios.post('/api/items/image', data, {headers: {authorization: token}})
  }

  fetchTemplate = (token, category) => {
    return axios.get(`/api/items/template?cat=${category}`, {headers: {authorization: token}})
  }

  fetchCategory = (category) => {
    return axios.get(`/api/items/items?cat=${category}`)
  }

  fetchItem = (id) => {
    return axios.get(`/api/items/item?item=${id}`)
  }

  addItem = (token, data) => {
    return axios.post('/api/items/add', data, {headers: {authorization: token}})
  }
}

const itemService = new ItemService()

export default itemService