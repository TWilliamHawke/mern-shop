import axios from "axios"

class OrdersService {
  addToCart = (token, data) => {
    return axios.post('/api/cart', {id: data}, {headers: {authorization: token}})
  }
  fetchCart = (token) => {
    return axios.get('/api/cart', {headers: {authorization: token}})
  }
  removeOne = (token, data) => {
    return axios.put('/api/cart', {id: data}, {headers: {authorization: token}})
  }
  removeAll = (token, data) => {
    return axios.delete('/api/cart', {data: {id: data}, headers: {authorization: token}}, )
  }
  makeOrder = (token, data) => {
    return axios.post('/api/orders', {cost: data}, {headers: {authorization: token}})
  }
}

const ordersService = new OrdersService()

export default ordersService