import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path='/' element={
          <>
            <Home />
          </>
        }
        />
      </Routes>
    </Router>
  )
}

export default App
