import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import {ProfilePage} from './pages/Profile'
import {AuthProvider} from './utils/useAuth'
import {RequireAuth} from './components/RequireAuth'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;
