import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Home from './Home'
import Product from './Product'
import Order from './Order'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Router>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App