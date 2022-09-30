import axios from 'axios'
import {logout} from './auth'

export const http = () => {
  const http = axios.create({
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json'
    },
    withCredentials: true
  })

  http.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {
      logout()
      return Promise.reject()
    }
  })

  return http
}
