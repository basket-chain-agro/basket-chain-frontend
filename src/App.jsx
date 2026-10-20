import { Routes, Route, Navigate } from 'react-router-dom'
import Buyerform from './components/Buyerform'
import Login from './components/Loginform'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<Buyerform />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<h1>Dashboard coming soon</h1>} />
       <Route path="/forgot-password" element={<h1>Forgot password coming soon</h1>} />
    </Routes>
  )
}

export default App