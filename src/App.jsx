import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import CreateFruits from './pages/CreateFruits'
import Fruits from './pages/Fruits'
import Veggies from './pages/Veggies'
import CreateVeggies from './pages/CreateVeggies'

function App() {


  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create/fruits">
          <button> Fruits</button>
        </Link>
        <Link to="/veggies">
          <button> Veggies</button>
        </Link>
        <Link to="/veggies/create">
          <button> Creat New Veggies</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/create/fruits" element={<CreateFruits />} />
        <Route path="/veggies" element={<Veggies />} />
        <Route path="/veggies/create" element={<CreateVeggies/>}/>
      </Routes>
    </div>
  )
}

export default App