import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Home, About, Project, Tc, Contact } from './page';
import { Footer, Header, MenuTc } from './components';

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
        {/* Project */}
        <Route path='/Project' element={
          <>
            <Header />
            <Project />
            <Footer />
          </>
        } />
        {/* Tc */}
        <Route path='/Tc' element={
          <>
            <Header />
            <MenuTc/>
            <Tc />
            <Footer />
          </>
        } />
        {/* Contact */}
        <Route path='/Contact' element={
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
