import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Home, About, Project, Tc, Contact } from './page';
import { Footer, Header } from './components';

function App() {

  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path='/' element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
        />
        {/* About */}
        <Route path='/About' element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        } />
        <Route path='/About' element={
          <>
            <Header />
            <Project />
            <Footer />
          </>
        } />
        <Route path='/About' element={
          <>
            <Header />
            <Tc />
            <Footer />
          </>
        } />
        <Route path='/About' element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
