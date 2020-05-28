import axios from "axios"

class OrdersService {
  addToCart = (token, data) => {
    return axios.post('/api/orders/add', {id: data}, {headers: {authorization: token}})
  }
  fetchCart = (token) => {
    return axios.get('/api/orders/cart', {headers: {authorization: token}})
  }
  removeOne = (token, data) => {
    return axios.put('/api/orders/cart', {id: data}, {headers: {authorization: token}})
  }
  removeAll = (token, data) => {
    return axios.delete('/api/orders/cart', {data: {id: data}, headers: {authorization: token}}, )
  }
}

const ordersService = new OrdersService()

export default ordersService