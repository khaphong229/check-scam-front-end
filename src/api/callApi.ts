import axios, { AxiosInstance } from 'axios'
import URL_SERVER from '../utils/constants'

const instance: AxiosInstance = axios.create({
  baseURL: URL_SERVER,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
