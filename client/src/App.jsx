import { Routes, Route, Navigate } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import GoogleCallback from './pages/GoogleCallback'

function App() {

  return (
      <Routes>
        <Route path='login' element={<LoginSignup />} />
        <Route path='google/callback' element={<GoogleCallback />} />
      </Routes>
  )
}

export default App
