// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Dashboard/Login'
import Menu from './Dashboard/Menu'
import Inicio from './Dashboard/Inicio'

import Header from './Componentes/Navbar'

import About from './Dashboard/About'


function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/home" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App