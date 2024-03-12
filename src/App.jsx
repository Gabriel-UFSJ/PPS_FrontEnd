import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import { Chat } from './components/Chat'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Chat />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
