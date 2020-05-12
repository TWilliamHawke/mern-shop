import axios from "axios"

class TemplateService {

  addField = (data, token) => {
    return axios.post('/api/template/addField', data, {headers: {authorization: token}})
  }
  getFields = (token, category) => {
    return axios.get(`/api/template/fields?cat=${category}`, {headers: {authorization: token}})
  }
  saveTemplate = (token, data) => {
    return axios.post('/api/template/fields', data, {headers: {authorization: token}})
  }
  editTemplate = (token, data) => {
    return axios.put('/api/template/editTemplate', data, {headers: {authorization: token}})
  }
  
}

const templateService = new TemplateService()

export default templateService