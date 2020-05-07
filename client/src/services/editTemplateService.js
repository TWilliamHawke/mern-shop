import axios from "axios"

class TemplateService {

  addField = (data, token) => {
    return axios.post('/api/template/addField', data, {headers: {authorization: token}})
  }
  getFields = (token) => {
    return axios.get('/api/template/fields', {headers: {authorization: token}})
  }
}

const templateService = new TemplateService()

export default templateService