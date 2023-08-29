import { Routes, Route, Navigate } from 'react-router-dom';
import LoginSignup from './screens/loginSignup';

function App() {

  return (
      <Routes>
        <Route path='login' element={<LoginSignup />} />
      </Routes>
  )
}

export default App
