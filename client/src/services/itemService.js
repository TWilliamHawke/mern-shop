import axios from "axios"

class ItemService{
  fetchImg = (token, data) => {
    return axios.post('/api/items/image', data, {headers: {authorization: token}})
  }
}

const itemService = new ItemService()

export default itemService