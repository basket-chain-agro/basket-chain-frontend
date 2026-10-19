import { Routes, Route, Navigate } from 'react-router-dom'
import Buyerform from './components/Buyerform'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<Buyerform />} />
      <Route path="/login" element={<h1>Login page coming soon</h1>} />
      <Route path="/dashboard" element={<h1>Dashboard coming soon</h1>} />
    </Routes>
  )
}

export default App