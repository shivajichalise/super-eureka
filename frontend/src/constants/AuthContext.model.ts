import {User} from './User.model'

export type AuthContextType = {
  user: User | null,
  login: (user: User) => void,
  logout: () => void
}
