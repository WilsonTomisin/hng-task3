import React from 'react'
import { Navbar } from './components/navbar/navbar'
import { Main } from './components/main/main'
import { Signup} from './components/signin_login/signup'
import { Login } from './components/signin_login/Login'
import { Footer } from './components/footer/footer'
import { Gallery } from './components/gallery/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
