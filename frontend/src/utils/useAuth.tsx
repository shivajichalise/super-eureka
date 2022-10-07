import {useState, useEffect, createContext, useContext} from 'react'
import {User} from '../constants/User.model'
import {AuthContextType} from '../constants/AuthContext.model'
import {AuthProviderProps} from '../constants/AuthProvider.model'
import {http} from '../utils/http'

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (user: User) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  const isUserLoggedIn = async () => {
    await http().get('/api/user').then(response => {
      if (response.data.error) {
        console.log(response.data.error)
      } else {
        setUser(response.data)
      }
    })
  }

  useEffect(() => {
    isUserLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
