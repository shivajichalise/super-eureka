import {useAuth} from '../utils/useAuth'
import {Navigate} from 'react-router-dom'

type RequireAuthProps = {
  children: JSX.Element
}

export const RequireAuth = ({children}: RequireAuthProps) => {

  const auth = useAuth()

  if (!auth.user) {
    return <Navigate to="/login" />
  }
  return children
}
