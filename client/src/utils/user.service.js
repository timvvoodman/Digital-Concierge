import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/api/test'

const getPublicContent = () => {
  return axios.get(API_URL + 'all')
}

const getHostContent = () => {
  return axios.get(API_URL + 'host', { headers: authHeader() })
}

export default {
  getPublicContent,
  getHostContent,
}
