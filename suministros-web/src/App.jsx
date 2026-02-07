// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Dashboard/Login'
import Menu from './Dashboard/Menu'


import Header from './Componentes/Navbar'

import About from './Dashboard/About'

import Dashboard from './Dashboard/Dashboard'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App