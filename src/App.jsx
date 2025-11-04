import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container page">
        <div className="layout">
          <Sidebar />
          <Home />
        </div>
      </div>
    </>
  )
}
