import Home from './Components/Home'
import Docs from "./Components/Docs"
import Navbar from './Components/Navbar'
import Integration from "./Components/Integration"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/integration' element={<Integration />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
