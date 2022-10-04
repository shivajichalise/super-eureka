import {useState, createContext, useContext} from 'react'
import {User} from '../constants/User.model'
import {AuthContextType} from '../constants/AuthContext.model'
import {AuthProviderProps} from '../constants/AuthProvider.model'

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (user: User) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
