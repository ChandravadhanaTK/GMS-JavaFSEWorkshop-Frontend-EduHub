import axios from 'axios'

export const API = new axios({
  baseURL: 'http://localhost:8080/eduhubapi/v1'
})