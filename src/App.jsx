import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import { Chat } from './components/Chat'
import { Sidebar } from './components/Sidebar'
import { Signup } from './components/Signup'
import { Signin } from './components/Signin'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CoGuide } from './components/CoGuide'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={
          <div className="flex">
            <Sidebar className="mr-4" />
            <Chat />
          </div>
        } />
        <Route path="/signup" element={
          <Signup />
        } />
        <Route path="/signin" element={
          <Signin />
        } />
        <Route path="/" element={
          <div className="antialiased text-gray-900 w-screen">
            <Header />
            <Home />
            <Footer />
          </div>
        } />
        <Route path='/about' element={
          <div className="antialiased bg-gray-100 w-screen">
            <Header />
            <About />
            <Footer />
          </div>
        } />
        <Route path='/contact' element={
          <div className="antialiased bg-gray-100 w-screen">
            <Header />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path='/CoGuide' element={
          <div className="antialiased bg-gray-100 w-screen">
            <Header />
            <CoGuide />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
