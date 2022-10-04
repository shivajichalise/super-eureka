import {http} from './http'
import Cookies from 'js-cookie'
import cookie from 'cookie'

export const login = (name: string) => {
  Cookies.set('loggedin_cookie', name, {expires: 30})
}

export const logout = () => {
  if (typeof window !== 'undefined') {
    Cookies.remove('loggedin_cookie', {expires: 30})
  }
}

export const isLoggedIn = (reqCookies = null) => {
  // if we don't have request cookies, get the cookie from client
  if (!reqCookies) {
    return !!Cookies.get('loggedin_cookie')
  }

  // otherwise get cookie from server
  return !!cookie.parse(reqCookies).loggedin_cookie
}

