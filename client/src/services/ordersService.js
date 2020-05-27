import axios from "axios"

class OrdersService {
  addToCart = (token, data) => {
    return axios.post('/api/orders/add', {id: data}, {headers: {authorization: token}})
  }
}

const ordersService = new OrdersService()

export default ordersService