import axios from "axios"
import { OrdersDataType, CartDataType } from "src/types/ordersDataTypes"

export const OrdersApi = {
  addToCart: (token: string, data: string): Promise<void> => {
    return axios.post('/api/cart', {id: data}, {headers: {authorization: token}})
  },
  fetchCart: (token: string): Promise<CartDataType> => {
    return axios.get('/api/cart', {headers: {authorization: token}})
  },
  removeOne: (token: string, data: string): Promise<void> => {
    return axios.put('/api/cart', {id: data}, {headers: {authorization: token}})
  },
  removeAll: (token: string, data: string): Promise<void> => {
    return axios.delete('/api/cart', {data: {id: data}, headers: {authorization: token}}, )
  },
  makeOrder: (token: string): Promise<void> => {
    return axios.post('/api/orders', {cost: ''}, {headers: {authorization: token}})
  },
  fetchAllOrders: (token: string): Promise<OrdersDataType> => {
    return axios.get('/api/orders/all', {headers: {authorization: token}})
  },
  fetchMyOrders: (token: string): Promise<OrdersDataType> => {
    return axios.get('/api/orders', {headers: {authorization: token}})
  },
  cancelOrder: (token: string, data: string): Promise<void> => {
    return axios.delete('/api/orders', {data: {id: data}, headers: {authorization: token}}, )
  }
}