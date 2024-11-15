import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// components
import SignUp from './pages/SignUp'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={< SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </Router>
  </StrictMode>,
)
