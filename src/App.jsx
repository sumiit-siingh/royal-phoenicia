import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from './Layout'
import HomePage from './pages/HomePage'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
