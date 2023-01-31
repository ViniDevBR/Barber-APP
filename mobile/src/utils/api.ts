import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://192.168.15.165:4444'
})
